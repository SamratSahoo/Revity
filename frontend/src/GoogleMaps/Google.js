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
  
// const MapWithAMarker = withGoogleMap(props =>
// <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
// >
//     <Marker
//     position={{ lat: -34.397, lng: 150.644 }}
//     />
// </GoogleMap>
// );

function Map() {

    const [curHospital, setHospital] = useState(null);

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={ { lat: 33.7, lng: -84.4}}
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
        <div style={{ width:"100vw", height: "100vh" }}>
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
    )
}

export default Google


