from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

# 몽고 url 입력
from pymongo import MongoClient
import certifi
ca = certifi.where()
client = MongoClient('...', tlsCAFile=ca)
db = client.dbsparta

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/sub')
def mypage():  
   return render_template('sub.html')

# 서브페이지 GET 요청
@app.route("/sub/team", methods=["GET"])
def mypage_get():
    all_teams = list(db.teams.find({},{'_id':False}))
    return jsonify({'result': all_teams})

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)