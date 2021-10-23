from flask import Flask, request
import os

from flask_cors import CORS
from google.cloud import firestore

app = Flask(__name__)
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.getcwd() + os.sep + "firebase_credentials.json"
db = firestore.Client()
cors = CORS(app, resources={
    r"/*": {"origins": ["*"]}})

"""
    HEALTH CHECKS
"""


@app.route("/")
def test():
    return {"Hello": "World", "Version": 2, "Success": True}


"""
    CREATE OPERATIONS
"""


@app.route("/user/signUp", methods=['POST'])
def createUser():
    try:
        name = request.json["name"]
        email = request.json["email"]
        # gender = request.json["gender"]
        # age = request.json["age"]
        socialId = request.json["socialId"]
        if len(list(db.collection("Users").where("Email", "==", email).stream())) > 0:
            print("HELLO WORLD")
            return {"Success": True,
                    "Info": list(db.collection("Users").where("Email", "==", email).stream())[0].to_dict()}
        else:
            print("BYE WORLD")
            document = db.collection("Users").document()
            document.set({
                "Name": name,
                "Email": email,
                "Gender": "",
                "Age": -1,
                "SocialId": socialId,
                "id": document.id
            })
            return {"Success": True, "Info": document.get().to_dict()}
    except Exception as e:
        print(e)
        return {"Success": False, "Info": None}


@app.route("/operation/addOperation", methods=['POST'])
def createOperation():
    try:
        priceBefore = request.json['beforePrice']
        priceAfter = request.json["afterPrice"]
        insurance = request.json['insurance']
        userId = request.json['userId']
        operationName = request.json["operationName"]
        hospitalAddress = request.json['hospitalAddress']
        hospitalId = list(db.collection("Hospitals").where("Address1", "==", hospitalAddress).stream())[
            0].to_dict().get('id')

        if hospitalId != None:
            operationDocument = db.collection("Operations").document()
            operationDocument.set({
                "BeforePrice": priceBefore,
                "AfterPrice": priceAfter,
                "Insurance": insurance,
                "UserId": userId,
                "OperationName": operationName,
                "HospitalId": hospitalId,
                "id": operationDocument.id
            })

            hospitalCollection = db.collection("hospitalDocument")
            operationsUpdate = hospitalCollection.document(hospitalId).get().to_dict().get("Operations") \
                .append(operationDocument.id)

            hospitalCollection.document(hospitalId).update({
                "Operations": operationsUpdate
            })
            return {"Success": True}
        else:
            return {"Success": False}
    except Exception as e:
        print(e)
        return {"Success": False}


@app.route("/hospital/addHospital", methods=['POST'])
def createHospital():
    try:
        name = request.json["name"]
        address = request.json['address1']
        address2 = request.json["address2"]
        longitude = request.json["longitude"]
        latitude = request.json['latitude']
        review = request.json['review']

        document = db.collection("Hospitals").document()
        document.set({
            "Name": name,
            "Address1": address,
            "Address2": address2,
            "Longitude": longitude,
            "Latitude": latitude,
            "Reviews": review,
            "Operations": [],
            "id": document.id
        })
        return {"Success": True}
    except Exception as e:
        print(e)
        return {"Success": False}


@app.route("/operations/readOperations", methods=['POST'])
def readOperations():
    address = request.json['address']
    hospital = list(db.collection("Hospitals").where("Address1", "==", address).stream())[0]
    operations = list(hospital.get("Operations"))
    operationArray = []
    for operation in operations:
        operationArray.append(db.collection("Operations").document(operation).get().to_dict())
    return {"Success": True, "Info": operationArray}


"""
    READ OPERATIONS
"""


@app.route("/hospital/readAllHospitals", methods=['GET'])
def readAllHospitals():
    try:
        hospitalCollection = db.collection("Hospitals").stream()
        hospitalList = [doc.to_dict() for doc in hospitalCollection]
        return {"Success": True, "Info": hospitalList}
    except Exception as e:
        print(e)
        return {"Success": False}


@app.route("/hospital/readHospital", methods=['POST'])
def readHospital():
    try:
        longitude = request.json["longitude"]
        latitude = request.json["latitude "]
        hospitalCollection = db.collection("Hospitals").where("Longitude", "==", longitude).where("Latitude", "==",
                                                                                                  latitude).stream()
        hospitalList = [doc.to_dict() for doc in hospitalCollection]
        return {"Success": True, "Info": hospitalList[0]}
    except Exception as e:
        print(e)
        return {"Success": False}


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
