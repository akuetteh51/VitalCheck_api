import datetime
from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy
import os
from werkzeug.security import check_password_hash,generate_password_hash
import uuid
import jwt

app=Flask(__name__ )
basedir=os.path.abspath(os.path.dirname(__file__))
app.config['SECRET_KEY']='THEPASSCODE1'
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///'+os.path.join(basedir,'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db=SQLAlchemy(app)

# user_table=db.Table('user_table',
# db.Column('doctor_id',db.Integer,db.ForeignKey('doctor.id')),
# db.Column('appointment_id',db.Integer,db.ForeignKey('appointment.id')),
# db.Column('user_id',db.Integer,db.ForeignKey('user.id')),
# db.Column('patient_id',db.Integer,db.ForeignKey('patient.id')),
# db.Column('sensor_id',db.Integer,db.ForeignKey('sensor.id'))


# )

class User(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    public_id=db.Column(db.String(50),unique=True)
    name=db.Column(db.String(50))
    password=db.Column(db.String(80))
    email=db.Column(db.String(80),unique=True)
    admin=db.Column(db.Boolean)
    sensor=db.relationship('Sensor',backref='user',uselist=False)
   

    def __init__(self,public_id,name,password,email,admin):
        self.public_id=public_id
        self.name=name
        self.email=email
        self.password=password
        self.admin=admin

class Sensor(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    user_id=db.Column(db.String(50),db.ForeignKey('user.public_id'))
    Height=db.Column(db.Float)
    weight=db.Column(db.Float)
    Bmp=db.Column(db.Float)
    Temp=db.Column(db.Float)
    


    def __init__(self,Height,weight,Bmp,Temp,user_id):
        self.Height=Height
        self.weight=weight
        self.Bmp=Bmp
        self.Temp=Temp
        self.user_id=user_id
        

class Doctor(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    field=db.Column(db.String(50))
  


class Nurse(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(50))
    Nurse_id=db.Column(db.String(50),unique=True)
   

class Patient(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(50))
    Patient_id=db.Column(db.String(50),unique=True)
 

class Appointment(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    date=db.Column(db.String(50))
    description=db.Column(db.String(50))
    
    
    

@app.route('/',methods=['GET'])
def index():
    return "Hello world"


@app.post("/api/user")
def create_user():
    data=request.get_json() 
    name=data["name"]
    email=data["email"]
    password=data['password']
    print("name:",name,"email:",email,"password:",password)
    hashed_password=generate_password_hash(password,method='sha256')
    new_user=User(public_id=str(uuid.uuid4()),name=name,password=hashed_password,email=email,admin=False)
    try:

      
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'status':201,
            "msg":"New user created"
        }),201
    
    except:
        return jsonify({'status':404,
            'msg':"email already exist"
        }),404


@app.post("/api/login")
def login():  
    data=request.get_json()
    #name=data["name"]
    email=data["email"]
    password=data['password']
    print(email,password)

    user= User.query.filter_by(email=email).first()
    
    
    
    if not user:
        return jsonify({'status':401,"msg":'Access denied'}),401
    userData={}
    userData['public_id'] = user.public_id
    userData['name']=user.name
    userData['password']=user.password
    userData['email']=user.email
    userData['admin']=user.admin
    print(userData)

    if check_password_hash(user.password,password):
        token=jwt.encode({'public_id':user.public_id,'exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=30)},app.config['SECRET_KEY'])
        # print(token)
        return jsonify({'status':200,'auth_token':token,"user":userData})
    return jsonify({'status':401,"msg":'could wrong credentials'}),401
# STATUS,MSG,USER DATA,ATH TOKEN
    
@app.post("/api/sensor_data")
def sensor_Data():
    data=request.get_json()
    height=data["height"]
    weight=data["weight"]
    temperature=data["temperature"]
    user_id=data["user_id"]
    bmp=data["bmp"]
    new_data=Sensor(Height=height,weight=weight,Temp=temperature,Bmp=bmp,user_id=user_id)
    
    try:

        db.session.add(new_data)
        db.session.commit()
        return jsonify({"status":201,
            "msg":"Data added"
        }),201
    
    except:
        return jsonify({'status':404,
            'msg':"Error connecting to db or server"
        }),404
    



    
@app.get("/api/users")
def  all_user():
    users=User.query.all()
    print(users)
    output=[]
    for user in users:
        userData={}
        userData['public_id'] = user.public_id
        userData['name']=user.name
        userData['password']=user.password
        userData['email']=user.email
        userData['admin']=user.admin
        output.append(userData)

    return jsonify(
        {
            'status':200,'users':output
        }
    ),200
    

@app.get('/api/user/<public_id>')
def get_one(public_id):
    user=User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({"msg":"No user Found!"})
  
    
    userData={}
    userData['public_id'] = user.public_id
    userData['name']=user.name
    userData['password']=user.password
    userData['email']=user.email
    userData['admin']=user.admin
    

    return jsonify(
        {'status':200,
            'user':userData
        }
    ),200

@app.put('/api/user/<public_id>')
def update_status(public_id):
    user=User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({'status':200,"msg":"No user Found!"}),200

    user.admin =True
    db.session.commit()
    return jsonify({'status':201,
        "msg":"user Status updated"
    }),201
  
@app.delete('/api/user/<public_id>')
def del_user(public_id):
    user=User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({"msg":"No user Found!"})

    db.session.delete(user)
    db.session.commit()
    return jsonify(
        {'status':201,
        "msg":"user Deleted updated"
    }
    ),201

@app.get("/api/sensorData/<user_id>")
def sensorData(user_id):
    
    # data=Sensor.query.filter_by(user_id=user_id)
    data=Sensor.query.filter_by(user_id=user_id)
    # print('------------------------before loop---------------------------------')
    # print(data)
    # print('------------------------before loop---------------------------------')
    SensorData=[]
    try: 
        for data in data:
        
        
    
            sensorData={}
            sensorData['id'] = data.id
            sensorData['Height']= data.Height
            sensorData['weight']= data.weight
            sensorData['Bmp']= data.Bmp
            sensorData['Temp']=   data.Temp
            SensorData.append(sensorData)
    

        return jsonify({'status':200,"SensorData": SensorData[-1]}),200
    except:
        
        return jsonify({'status':200,"SensorData": "no Data found"}),200
    

# app.app_context().push()
#open sqlite with sqlite3 db.sqlite    # data1=[data.id,data.Temp,data.weight,data.Bmp,data.Height]

# {"data":{"temperature": data[1],"weight":data[2],"BMP":data[3],"height":data[4]}},200
    # print('------------------------------------------------------')
    # print(tuple([data.id,data.Temp,data.weight,data.Bmp,data.Height]))
    # print('------------------------------------------------------')
#check table with .tables
