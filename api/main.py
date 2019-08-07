from flask import Flask, request, redirect
import json
import os

app = Flask(__name__)

from functools import wraps
from flask import make_response


def allow_cross_domain(fun):
    @wraps(fun)
    def wrapper_fun(*args, **kwargs):
        rst = make_response(fun(*args, **kwargs))
        rst.headers['Access-Control-Allow-Origin'] = '*'
        rst.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
        allow_headers = "Referer,Accept,Origin,User-Agent"
        rst.headers['Access-Control-Allow-Headers'] = allow_headers
        return rst
    return wrapper_fun

cuisines = []

with open(os.sep.join(['.', 'category_list.txt']), 'r') as f:
    for line in f.readlines():
        cuisines.append(line.replace('\n', ''))
            
top_list = {}

with open(os.sep.join(['.', 'Task7Matrix.csv']), 'r') as mf:
    content = mf.readlines()
    for i in range(len(cuisines)):
        rank = {}
        scores = content[i].split(',')
        top = []
        for j in range(len(cuisines)):
            if (i == j):
                continue
            rank[cuisines[j]] = (float)(scores[j])
        sorted_rank = sorted(rank.items(), key = lambda x: x[1], reverse= True )
        #print(cuisines[i], sorted_rank[0:5])
        for item in sorted_rank:
            top.append(item[0])
        top_list[cuisines[i]] = top

@app.route("/", methods=['GET'])
@allow_cross_domain
def hello():
    return "Hello World!"

@app.route("/cuisines", methods=['GET'])
@allow_cross_domain
def return_cuisines():
    return json.dumps(cuisines)

@app.route("/cuisine/<cuisine>/<top>", methods=['GET'])
@allow_cross_domain
def return_top(cuisine: str, top: int):
    top_index = min(int(top), 40)
    return json.dumps(top_list[cuisine][0:top_index])


if __name__ == "__main__":
    app.run()