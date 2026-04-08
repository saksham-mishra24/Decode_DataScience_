# We will create a simple flask application that will act as a calculator. It will have two routes: one for addition and one for subtraction.
from flask import Flask, request, jsonify
app = Flask(__name__)
@app.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    num1 = data['num1']
    num2 = data['num2']
    result = num1 + num2
    return jsonify({'result': result})
@app.route('/subtract', methods=['POST'])
def subtract():
    data = request.get_json()
    num1 = data['num1']
    num2 = data['num2']
    result = num1 - num2
    return jsonify({'result': result})
if __name__ == '__main__':
    app.run(debug=True)
