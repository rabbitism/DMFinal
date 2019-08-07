from flask import Flask, request, redirect
import json
import os
import info

app = Flask(__name__)

@app.route("/", methods=['GET'] )
def hello():
    return "Hello World!"

@app.route("/cuisines", methods=['GET'])
def return_cuisines():
    return json.dumps(info.cuisines)

@app.route("/cuisine/<cuisine>/<top>", methods=['GET'])
def return_top(cuisine: str, top: int):
    top_index = min(int(top), 40)
    return json.dumps(info.top_list[cuisine][0:top_index])


if __name__ == "__main__":
    app.run()