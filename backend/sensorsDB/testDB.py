import sqlite3
from sqlite3 import Error

def createTable(con, cur):
    cur.execute(""" CREATE TABLE humidity_table (id INTEGER PRIMARY KEY, time TEXT NOT NULL, humidity TEXT NOT NULL); """)
    con.commit()
    print("TABLE humidity CREATED")

def insertTable(con, cur, data):
    cur.execute(data)
    con.commit()
    print("TABLE humidity data " + data + " INSERTED.")

try:
    connection = sqlite3.connect('testDB_0.db')
    cur = connection.cursor()
    print("Successfully connected to SQLite " + sqlite3.version)

    data = """ INSERT INTO humidity_table(id, time, humidity) VALUES(1,'Day, 00 Jul 0000 00:00:00 GMT', '45.3')"""

    # Check if table exists
    cur.execute(""" SELECT count(name) FROM sqlite_master WHERE type='table' AND name='humidity_table'; """)

    if cur.fetchone()[0] == 1:
        insertTable(connection, cur, data)
    else:
        createTable(connection,cur)

    cur.close()
except sqlite3.Error as e:
    print("Operation failed", e)
finally:
    if (connection):
        connection.close()
        print("The SQLite connection is closed")
