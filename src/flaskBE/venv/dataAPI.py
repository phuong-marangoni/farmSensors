from flask import Flask
from random import uniform
import datetime
from flask_cors import CORS

app = Flask(__name__)
# Resolves Cross Origin Resource sharing error on FE
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/humidity": {"origins": "http://localhost:3000"}})

@app.route('/')
def home():
    return '<h1>DATA API HOMEPAGE</h1>'

@app.route('/humidity')
def getHumidity():
    tnow = datetime.datetime.now(datetime.timezone.utc)
    time = tnow.isoformat()

    myOutput = {
        "time": time,
        "humidity": format(uniform(0, 100.0), '.2f')
    }

    return myOutput
