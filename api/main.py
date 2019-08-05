from flask import Flask, request, redirect
import json

app = Flask(__name__)

@app.route("/", methods=['GET'] )
def hello():
    return "Hello World!"

@app.route("/cuisines", methods=['GET'])
def return_cuisines():
    return json.dumps(["Chinese", "Indian", "American"])

if __name__ == "__main__":
    app.run()