from flask import Flask
import os


app = Flask(__name__)
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.getcwd() + os.sep + "firebase_credentials.json"

@app.route("/")
def test():
    return {"Hello": "World", "Version": 1}


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
