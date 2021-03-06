import requests

jsonData = [
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 123,
                    "HospitalName": "Laurel Heights Hospital",
                    "Address": "934 Briarcliff Rd NE",
                    "Address2": "Atlanta, GA 30306",
                    "Reviews": 3.8
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.780540, -84.346090]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 456,
                    "HospitalName": "Emory University Hospital Midtown",
                    "Address": "550 W Peachtree St NW",
                    "Address2": "Atlanta, GA 30308",
                    "Reviews": 3.1
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.770000, -84.387459]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 789,
                    "HospitalName": "WellStar Georgia Hospitalists Group, LLC",
                    "Address": "265 Boulevard NE #2",
                    "Address2": "Atlanta, GA 30312",
                    "Reviews": 3.0
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.761660, -84.371560]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 987,
                    "HospitalName": "Fresenius Medical Care At Kindred Hospital",
                    "Address": "705 Juniper St NE",
                    "Address2": "Atlanta, GA 30315",
                    "Reviews": 2.0
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.773860, -84.382710]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 654,
                    "HospitalName": "Piedmont Atlanta Hospital",
                    "Address": "1968 Peachtree Rd NW",
                    "Address2": "Atlanta, GA 30309",
                    "Reviews": 3.5
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.809036, -84.396370]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 321,
                    "HospitalName": "Atlanta Medical Center",
                    "Address": "303 Parkway Dr NE",
                    "Address2": "Atlanta, GA 30312",
                    "Reviews": 2.7
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.763048, -84.373463]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 565,
                    "HospitalName": "Whitehead Building (Health Services)",
                    "Address": "740 Ferst Dr NW",
                    "Address2": "Atlanta, GA 30332",
                    "Reviews": 4.65
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.776752, -84.393447]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "HospitalID": 787,
                    "HospitalName": "Hughes Spalding Hospital",
                    "Address": "35 Jesse Hill Jr Dr SE",
                    "Address2": "Atlanta, GA 30303",
                    "Reviews": 4.55
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.753932, -84.382034]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "HospitalID": 243,
                    "HospitalName": "Emory Long-Term Acute Care",
                    "Address": "450 N Candler St",
                    "Address2": "Decatur, GA 30030",
                    "Reviews": 4.0
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.777523, -84.292968]
                }
            }, {
                "type": "Feature",
                "properties": {
                    "HospitalID": 759,
                    "HospitalName": "Piedmont West",
                    "Address": "1800 Howell Mill Rd",
                    "Address2": "Atlanta, GA 30318",
                    "Reviews": 4.8
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [33.804784, -84.414924]
                }
            }
        ]
    }
]

if __name__ == '__main__':
    for data in jsonData[0]['features']:
        hospInfo = {
            "name": data['properties']['HospitalName'],
            "address1": data['properties']['Address'],
            "address2": data['properties']['Address2'],
            "latitude": data['geometry']['coordinates'][0],
            "longitude": data['geometry']['coordinates'][1],
            "review": data['properties']['Reviews']
        }
        r = requests.post('http://128.61.14.111:5000/hospital/addHospital', json=hospInfo)
        print(r.json())
