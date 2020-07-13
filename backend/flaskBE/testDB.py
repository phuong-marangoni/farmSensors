import sqlite3
from sqlite3 import Error


def getTableType(data):

    if "humidity" in data.keys():
        return "humidity_table"
    elif "soiltemp" in data.keys():
        return "soiltemp_table"
    else:
        print("ERROR WITH CHECKING KEYS()")
        return None

def createTable(con, cur, data):

    tbl = getTableType(data)

    cur.execute(" CREATE TABLE " + tbl + " (id INTEGER PRIMARY KEY AUTOINCREMENT, time DATETIME NOT NULL, " + tbl.strip('_table') +" REAL NOT NULL); ")

    # Extracting and formatting data for insert string
    dataArr = data.keys()
    dataArr2 = str(list(dataArr)).replace("'","")[1:-1]

    insertParams = "INSERT INTO " + tbl + " (" + dataArr2 +") VALUES(?, ?)"
    cur.execute(insertParams, list(data.values()))
    con.commit()

def insertTable(con, cur, data):

    tbl = getTableType(data)

    if "humidity" in data.keys():
        insertParams = "INSERT INTO " + tbl + " (time, humidity) VALUES(?, ?)"
    elif "soiltemp" in data.keys():
        insertParams = "INSERT INTO " + tbl + " (time, soiltemp) VALUES(?, ?)"
    else:
        print("ERROR WITH CHECKING KEYS()")

    cur.execute(insertParams, list(data.values()))
    con.commit()
