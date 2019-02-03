from flask import Flask, render_template
import requests

app = Flask(__name__)
app.config["DEBUG"] = True 

@app.route('/')
def home(): 
	return render_template("index.html")

@app.route('/learn')
def learn(): 
	return render_template("learn.html")

@app.route("/name")
def name():
	return "Kim Santiago"

@app.route("/search/<search_query>")
def search(search_query):
	return search_query

if __name__ == "__main__":
    app.run(host="0.0.0.0")