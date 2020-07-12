from flask import Flask
from random import uniform
import datetime
import math
from flask_cors import CORS
import sqlite3
from sqlite3 import Error
import testDB

app = Flask(__name__)
# Resolves Cross Origin Resource sharing error on FE
app.config['CORS_HEADERS'] = 'Content-Type'
# Add routes here to resolve COR errors
cors = CORS(app, resources={r"/humidity": {"origins": "http://localhost:3000"}, r"/soiltemp": {"origins": "http://localhost:3000"}})

def getTime():
    tnow = datetime.datetime.now(datetime.timezone.utc)
    return tnow.isoformat()


def testDBAction(tblName, data):
    try:
        connection = sqlite3.connect("testDB.db")
        cur = connection.cursor()
        #print("Successfully connected to SQLite " + sqlite3.version)

        # Write fake test data to DB
        # Check if table exists
        cur.execute(" SELECT count(name) FROM sqlite_master WHERE type='table' AND name='" + tblName + "'; ")

        if cur.fetchone()[0] == 1:
            testDB.insertTable(connection, cur, data)
        else:
            testDB.createTable(connection, cur, data)

        cur.close()

    except sqlite3.Error as e:
        print("Operation failed", e)
    finally:
        if connection:
            connection.close()
            #print("The SQLite connection is closed")


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

    testDBAction('humidity_table', myOutput)

    return myOutput

@app.route('/soiltemp')
def getSoilTemp():
    time = getTime()

    myOutput = {
        "time": time,
        "soiltemp": math.ceil(uniform(0, 100.0))
    }

    testDBAction('soiltemp_table', myOutput)
    return myOutput
