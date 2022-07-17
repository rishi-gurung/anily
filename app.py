from flask import Flask,render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
    
@app.route("/videos/<id>")
def watch(id):
    a = str(id).replace("-"," ")
    return render_template("watch.html", vid=id, vidi=a.title())

if __name__ == "__main__":
    server_port = int(os.environ.get("PORT", 5000)) 
    app.run(debug=False, port=server_port, host='0.0.0.0')
