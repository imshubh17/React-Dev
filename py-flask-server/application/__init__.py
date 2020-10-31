# Import Modules
from flask import Flask, jsonify
import json 

# create app
app = Flask(__name__)

#Read json file
with open('data.json') as f:
    data = json.load(f)

# Routing
@app.route("/")
@app.route("/home")
def index():
    return "Server Page!!"

@app.route("/api")
def api():
    return jsonify(data)