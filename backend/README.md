## Backend Endpoints

**Endpoint:** `/`✅
* **Type**: `GET`
* **Parameters:**
    * `None`
* **Return:**
    * `"Hello": "World"`
    * `Version`: The version of the API currently in use (String)
    * `Success`: Whether the API works (Boolean)
* **Description:** Health Check Endpoint -- use this to check if the API actually works
---
**Endpoint:** `/user/signUp`✅
* **Type**: `POST`
* **Parameters:**
    * `name`: Name of user (String)
    * `email`: Email of user (String)
    * `gender`: Gender of user (String) -- NOT BEING COLLECTED NOW
    * `age`: Age of user (Number) -- NOT BEING COLLECTED NOW
    * `socialId`: Social Id of user -- obtained via firebase google login (String)
* **Return:**
    * `Success`: Whether the data was added successfully (Boolean)
* **Description:** POST request to add a new user to firestore when they sign up
---
**Endpoint:** `/operation/addOperation` ✅
* **Type**: `POST`
* **Parameters:**
    * `beforePrice`: Price of operation before insurance (Number)
    * `afterPrice`: Price of operation after insurance (Number)
    * `insurance`: Insurance provider (String)
    * `userId`: Unique user id of the user (String)
    * `operationName`: Name of operation being conducted (String)
    * `hospitalAddress`: Address of the hospital the operation is being added to (String)
* **Return:**
    * `Success`: Whether the data was added successfully (Boolean)
* **Description:** POST request to add a new operation to a specified hospital
---
**Endpoint:** `/hospital/addHospital` ✅
* **Type**: `POST`
* **Parameters:**
    * `name`: Name of the hospital (String)
    * `address`: Address of the hospital (String)
    * `longitude`: Longitude of the hospital (Number)
    * `latitude`: Latitude of the hospital (Number)
* **Return:**
    * `Success`: Whether the data was added successfully (Boolean)
* **Description:** POST request to add a new hospital
---
`/hospital/readAllHospitals` ✅
* **Type**: `GET`
* **Parameters:**
    * `None`
* **Return:**
    * `Success`: Whether the data was added successfully (Boolean)
    * `Info`: List of all hospital information from firestore
* **Description:** GET request to see the different hospitals
---
`/hospital/readHospital`
* **Type**: `POST`
* **Parameters:**
    * `longitude`: Longitude of the hospital being searched
    * `latitude`: Latitude of the hospital being searched
* **Return:**
    * `Success`: Whether the data was added successfully (Boolean)
    * `Info`: The hospital information for the hospital being searched
* **Description:** POST request to see the hospital being searched
