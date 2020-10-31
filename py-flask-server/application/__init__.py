# Import Modules
from flask import Flask
import json 

# create app
app = Flask(__name__)

#Read json file
with open('data.json') as f:
    data = json.load(f)

# Routing
@app.route("/")
@app.route("/Home")
def index():
    return "Server Page!!"

@app.route("/api")
def api():
    return json.dumps(data)