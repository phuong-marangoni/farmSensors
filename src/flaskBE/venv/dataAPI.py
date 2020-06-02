from flask import Flask
from random import uniform
import datetime
import math
from flask_cors import CORS

app = Flask(__name__)
# Resolves Cross Origin Resource sharing error on FE
app.config['CORS_HEADERS'] = 'Content-Type'
# Add routes here to resolve COR errors
cors = CORS(app, resources={r"/humidity": {"origins": "http://localhost:3000"}, r"/soiltemp": {"origins": "http://localhost:3000"}})

def getTime():
    tnow = datetime.datetime.now(datetime.timezone.utc)
    return tnow.isoformat()


@app.route('/')
def home():
    return '<h1>DATA API HOMEPAGE</h1>'

@app.route('/humidity')
def getHumidity():
    time = getTime()

    myOutput = {
        "time": time,
        "humidity": format(uniform(0, 100.0), '.2f')
    }

    return myOutput

@app.route('/soiltemp')
def getSoilTemp():
    time = getTime()

    myOutput = {
        "time": time,
        "soiltemp": math.ceil(uniform(0, 100.0))
    }

    return myOutput
