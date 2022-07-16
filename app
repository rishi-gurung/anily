from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
    
@app.route("/videos/<id>")
def watch(id):
    a = str(id).replace("-"," ")
    return render_template("watch.html", vid=id, vidi=a.title())
