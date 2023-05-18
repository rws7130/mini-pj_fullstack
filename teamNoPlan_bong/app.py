from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
import certifi
ca = certifi.where()
client = MongoClient('mongodb+srv://sparta:test@cluster0.hjivimn.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta


@app.route('/')
def home():
   return render_template('index.html')

@app.route('/sub')
def mypage():  
   return render_template('sub.html')

@app.route("/infom", methods=['POST'])
def infom_post():
   name_receive = request.form['name_give']
   best_receive = request.form['best_give']
   style_receive = request.form['style_give']
   blog_receive = request.form['blog_give']
   image_receive = request.form['image_give']
   doc = {
      'name': name_receive,
      'best': best_receive,
      'style': style_receive,
      'blog': blog_receive,
      'image': image_receive
   }
   db.info.insert_one(doc)

   return jsonify({'msg': '저장 완료'})
@app.route("/infom", methods=['GET'])
def infom_get():
   all_info = list(db.info.find({},{'_id':False}))
   return jsonify({'result': all_info})



if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)