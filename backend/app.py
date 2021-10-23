from flask import Flask, request
import os
from google.cloud import firestore

app = Flask(__name__)
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.getcwd() + os.sep + "firebase_credentials.json"
db = firestore.Client()

"""
    HEALTH CHECKS
"""


@app.route("/")
def test():
    return {"Hello": "World", "Version": 1, "Success": True}


"""
    CREATE OPERATIONS
"""


@app.route("/user/signUp", methods=['POST'])
def createUser():
    try:
        name = request.json["name"]
        email = request.json["email"]
        gender = request.json["gender"]
        age = request.json["age"]
        socialId = request.json["socialId"]

        document = db.collection("Users").document()
        document.set({
            "Name": name,
            "Email": email,
            "Gender": gender,
            "Age": age,
            "SocialId": socialId,
            "id": document.id
        })
        return {"Success": True}
    except Exception as e:
        print(e)
        return {"Success": False}


@app.route("/operation/addOperation", methods=['POST'])
def createOperation():
    try:
        priceBefore = request.json['beforePrice']
        priceAfter = request.json["afterPrice"]
        insurance = request.json['insurance']
        userId = request.json['userId']
        operationName = request.json["operationName"]
        hospitalId = request.json['id']

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
    except Exception as e:
        print(e)
        return {"Success": False}


@app.route("/hospital/addHospital", methods=['POST'])
def createHospital():
    try:
        name = request.json["name"]
        address = request.json['address']
        longitude = request.json["longitude"]
        latitude = request.json['latitude']

        document = db.collection("Hospitals").document()
        document.set({
            "Name": name,
            "Address": address,
            "Longitude": longitude,
            "Latitude": latitude,
            "Reviews": [],
            "Operations": [],
            "id": document.id
        })
        return {"Success": True}
    except Exception as e:
        print(e)
        return {"Success": False}


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
