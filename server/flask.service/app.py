# $ pip3 install -U Flask
# $ pip3 install -U flask-cors
# $ env FLASK_APP=app.py flask run

from flask import Flask, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/tone', methods = ['POST'])
def getTone():
    name = request.args
    print(name)
    tones = ['Humorous', 'Ironic', 'Cynical']
    tone = random.choice(tones)
    return tone