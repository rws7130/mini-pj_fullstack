from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
# import certifi
# ca = certifi.where()
client = MongoClient('mongodb+srv://sparta:test@cluster0.g7hon70.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sub')
def mypage():  
   return 'This is My Page!'

@app.route("/noplan", methods=["POST"])
def noplan_post():
    noplan_receive = request.form['noplan_give']
    doc = {
        'noplan': noplan_receive
    }
    db.noplan.insert_one(doc)
    return jsonify({'msg': 'POST 연결 완료!'})
    
@app.route("/noplan", methods=["GET"])
def noplan_get():
    all_noplans = list(db.noplan.find({},{'_id':False}))
    return jsonify({'result': all_noplans})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5010, debug=True)