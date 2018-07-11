from flask import Flask
app = Flask(__name__)

#q is the name of the page being requested
#function returns the contence of request
def spitPage(q):
    with open(q, "r") as f:
        return f.read();

@app.route("/")
def hello():
    return spitPage("wellcome.html")

@app.route("/bar")
def main():
    return spitPage("example.html")
