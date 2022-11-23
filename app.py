from flask import Flask,request
# from flask_mysqldb import MySQL
# import pymysql
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import column,Integer,String,Float
import os
import psycopg2
from datetime import datetime,timezone
from dotenv import load_dotenv
from flask_bcrypt import Bcrypt

CREATE_USER_TABLE=(
    "CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,name TEXT,email TEXT,password TEXT);"
)
CREATE_SENSOR_TABLE="""CREATE TABLE IF NOT EXISTS sensor_Data(sensor_id INTEGER,temperature REAL,weight REAL,bmp REAL,height REAL,date TIMESTAMP,FOREIGN KEY(sensor_id) REFERENCES users(id) ON DELETE CASCADE);"""
 
LOGIN_USER=("SELECT * FROM users WHERE name=(%s) OR email =(%s);")
INSERT_USER_RETURN_ID = "INSERT INTO users(name,email,password) VALUES(%s,%s,%s) RETURNING id;"
INSERT_SENSOR_DATA=("INSERT INTO sensor_Data(sensor_id,temperature,weight ,bmp,height,date) VALUES(%s,%s,%s,%s,%s,%s);")
ALL_SELECT="SELECT temperature,weight FROM sensor_data"
load_dotenv()
app=Flask(__name__)
bcrypt = Bcrypt(app)
url=os.getenv("DATABASE_URL")
connection = psycopg2.connect(url)


@app.post("/api/user")
def add_user():
    data=request.get_json() 
    name=data["name"]
    email=data["email"]
    password=data['password']
    pw_hash = bcrypt.generate_password_hash('password').decode('utf-8')
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(CREATE_USER_TABLE)
            cursor.execute(INSERT_USER_RETURN_ID,(name,email,pw_hash))
            sensor_id=cursor.fetchone()
    return {"id":sensor_id,"message":f"User added {name,email,pw_hash} created. "},201

@app.post("/api/login")
def login():
    data=request.get_json()
    name=data["name"]
    email=data["email"]
    password1=data['password']
    
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(LOGIN_USER,(name,email))
            user_data=cursor.fetchall()[0]
            print(user_data)
             
    if bcrypt.check_password_hash(user_data[3], password1) == True:
        print("login Successfully")
        return {"id":user_data[0],"message":f"User found {name,email}  {user_data} created. "},201
    else:
        print(bcrypt.check_password_hash(user_data[3], password1))
        print(user_data[3])
        print("wrong Credentials")
        return f"Wrong Credentials ,{user_data}",401




@app.post("/api/sensor_data")
def sensor_Data():
    data=request.get_json()
    height=data["height"]
    wieght=data["weight"]
    temperature=data["temperature"]
    sensor_id=data["sensor_id"]
    bmp=data["bmp"]
    try:
        date=datetime.strptime(data["date"],"%m-%d-%Y %H:%M:%S")
    except KeyError:
        date = datetime.now(timezone.utc)
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(CREATE_SENSOR_TABLE)
            cursor.execute(INSERT_SENSOR_DATA,(sensor_id,height,wieght,temperature,bmp,date))
    
    return {"message":"Sensor Data added. "},201

@app.get("/api/sensorData")
def sensorData():
    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM Sensor_data")
            data=cursor.fetchall()[0]
            print(data)
            
    return {"data":{"temperature": data[1],"weight":data[2],"BMP":data[3],"height":data[4]}},200
    



# @app.route("/<string:Username>/<string:password>")
# def index(Username:str,password:str):
#     return jsonify(message="Welcome "+Username+"Your password is "+password),200

