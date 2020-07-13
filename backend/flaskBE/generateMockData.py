from random import uniform
from datetime import datetime, timedelta
import math
from random import uniform
import sqlite3
from sqlite3 import Error
import testDB

try:
    conn = sqlite3.connect('oneYearDataDB.db')
    cur = conn.cursor()

    # Create Humidity Table
    humidityTblParams = """ CREATE TABLE humidity_table (id INTEGER PRIMARY KEY AUTOINCREMENT, time DATETIME NOT NULL, humidity REAL NOT NULL);"""

    #Create Soil Temp Table
    soilTblParams = """ CREATE TABLE soiltemp_table (id INTEGER PRIMARY KEY AUTOINCREMENT, time DATETIME NOT NULL, soiltemp REAL NOT NULL);"""

    cur.execute(humidityTblParams)
    cur.execute(soilTblParams)
    conn.commit()

    # Generate one year worth of fake data for both tables
    startTime = datetime(2019, 7, 12)
    endTime = datetime(2020,7, 12)
    currentHumidityTime = startTime # increment by 5 second
    currentSoilTempTime = startTime # increment by 1 minute

    counter = 0

    # Generate data for Humidty table
    while currentHumidityTime <= endTime:
        currentHumidityTime += timedelta(seconds=5)
        hparams = """ INSERT INTO humidity_table (time, humidity) VALUES(?,?)"""
        hData = [currentHumidityTime.isoformat(), str(format(uniform(0,100.0), '.2f'))]
        cur.execute(hparams, hData)

        counter += 1

        if counter == 5000:
            conn.commit()
            counter = 0
            #print("ENTRY COMMITTED" + currentHumidityTime.isoformat())

    counter = 0

    while currentSoilTempTime <= endTime:
        currentSoilTempTime += timedelta(minutes=1)
        stparams = """ INSERT INTO soiltemp_table (time, soiltemp) VALUES(?,?)"""
        stData = [currentSoilTempTime.isoformat(), str(math.ceil(uniform(0,100.0)))]
        cur.execute(stparams, stData)

        counter += 1

        if counter == 5000:
            conn.commit()
            counter = 0

    cur.close()

except sqlite3.Error as e:
    print('Operation Failed ', e)
finally:
    if conn:
        conn.close()
