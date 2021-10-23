import requests

userInfo = {
    "name": "Samrat Sahoo",
    "email": "samratsahoo2013@gmail.com",
    "gender": "Male",
    "age": 18,
    "socialId": "Rawr"
}

r = requests.post('http://128.61.9.234:5000/user/signUp', json=userInfo)
print(r.json())
