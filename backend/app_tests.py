import requests

userInfo = {
    "name": "Samrat Sahoo",
    "email": "samratsahoo2013@gmail.com",
    "gender": "Male",
    "age": 18
}

r = requests.post('http://128.61.9.81:5000/user/signUp', json=userInfo)
print(r.json())
