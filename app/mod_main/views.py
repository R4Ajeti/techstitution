
from flask import Flask,Blueprint, render_template, request, redirect, url_for
from app import mongo
from bson import json_util, ObjectId
from flask import jsonify
from forms import Arkep

mod_main = Blueprint('main', __name__)


@mod_main.route('/', methods=['GET','POST'])
def index():
    db = mongo.db.arkep
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        data = request.form.to_dict()
        db.insert(data)
        if(data):
            result="Te dhenat u ruajtun me sukses"
            return redirect(url_for('main.lista'))


        else:
            result = "Ka ndodhur gabim ne ruajten e te dhenave"
            return render_template('result.html', result=result,json=json_util.dumps(data))

@mod_main.route('/<string:id>', methods=["GET"])
def get_doc(id):

    db = mongo.db.arkep
    if request.method == 'GET':
        doc = db.find_one({"_id": ObjectId(id)})
        return render_template('view.html', doc=doc)
    else:
        return "Bad Request"
@mod_main.route('/update', methods=["GET",'POST'])
def update_doc():
        db = mongo.db.arkep
        data = request.form.to_dict()
        id = data['_id']
        del data['_id']
        db.update(
           {'_id':ObjectId(id)},
          data,True
        )
        if (data):
            result = "Te dhenat u ruajtun me sukses"
            return redirect(url_for('main.lista'))

        else:
            result = "Ka ndodhur gabim ne ruajten e te dhenave"
            return render_template('result.html', result=result, json=json_util.dumps(data))

@mod_main.route('/delete/<string:id>', methods=["GET"])
def remove_doc(id):

    db = mongo.db.arkep
    if request.method == 'GET':
        db.remove({"_id": ObjectId(id)})
        return redirect(url_for('main.lista'))
    else:
        return "Bad Request"

@mod_main.route('/list',methods=['GET'])
def lista():
    db=mongo.db.arkep
    data=db.find()
    return render_template('result.html',data=data)

@mod_main.route('/test',methods=['GET'])
def test():
    form = Arkep()
    return render_template('view2.html',form=form)

