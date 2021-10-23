import React, { useState } from 'react'

import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
    InfoWindow
} from "react-google-maps";

import * as hospitalData from "./data/mockHospitalData.json"
import mapStyles from '../mapStyles';

import './Google.css';
import useGeolocation from "./useGeoLocation"
import Navbar from '../components/Navbar/Navbar';
  


function Map() {

    const [curHospital, setHospital] = useState(null);
    const location = useGeolocation();

    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={location.loaded ? {lat: location.coordinates.lat, lng: location.coordinates.lng} 
            : { lat: 33.788, lng: -84.398}}
            defaultOptions={{styles: mapStyles}}
        >

        {hospitalData.features.map((hospital) => (
            <Marker 
                key= {hospital.properties.HospitalID}
                position= {{ 
                    lat: hospital.geometry.coordinates[0],
                    lng: hospital.geometry.coordinates[1]
                }} 
                onClick={() => {
                    setHospital(hospital);
                }}
                icon={{
                    url: `/hospital.svg`,
                    scaledSize: new window.google.maps.Size(25, 25)
                }}
            />
        ))}

        {location.loaded ? <Marker 
                position= {{ 
                    lat: location.coordinates.lat,
                    lng: location.coordinates.lng
                }} 
        /> : console.log("User's Current Location not available")}

        {curHospital && (
            <InfoWindow
                onCloseClick={() => {
                    setHospital(null);
                }}
                position= {{
                    lat: curHospital.geometry.coordinates[0],
                    lng: curHospital.geometry.coordinates[1]  
                }}
            >
                <div>
                    <h2>{curHospital.properties.HospitalName}</h2>
                    <p>{curHospital.properties.Address}</p>
                    <p>{curHospital.properties.Address2}</p>
                    <p>{"Reviews: " + curHospital.properties.Reviews + "/5"}</p>
                </div>
            </InfoWindow>
        )}

        </ GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));



const Google = () => {

    // const [defaultCenter, setDefaultCenter] = useState(null)

    return (
        <div>
            <Navbar />
            <div style={{ width:"100vw", height: "100vh" }} className='Map'>
                {/* <MapWithAMarker
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> */}

                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=${
                        process.env.REACT_APP_MAP_APIKEY
                    }`}
                    loadingElement={<div style={{height: "100%"}} />}
                    containerElement={<div style={{height: "100%"}} />}
                    mapElement={<div style={{height: "100%"}} />}
                />
            </div>
        </div>
    )
}

export default Google


