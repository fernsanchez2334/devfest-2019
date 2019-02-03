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

@app.route('/track1')
def track1(): 
	return render_template("track1.html")

@app.route('/track2')
def track2(): 
	return render_template("track2.html")

@app.route('/track3')
def track3(): 
	return render_template("track3.html")

@app.route("/name")
def name():
	return "Kim Santiago"

@app.route("/search/<search_query>")
def search(search_query):
	return search_query

if __name__ == "__main__":
    app.run(host="0.0.0.0")