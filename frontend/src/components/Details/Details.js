import React, { useEffect, useState } from 'react'
import "./Details.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from "axios"


// const baseUrl = 'http://revit-publi-1xstsu1e3rgne-1394708788.us-east-2.elb.amazonaws.com/';
const baseUrl = 'http://128.61.14.76:5000/';

const Details = () => {

    const [operations, setOperation] = useState([]);

    useEffect(() =>{
        axios.post(baseUrl + 'operation/readOperations', {
            address : window.sessionStorage.getItem("HospitalAddress")
        }, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }).then((response) => {
        setOperation(response.data.Info);
    })},[]);
    


    return (
        <div>
            {/* before price
            after price
            insurance
            operationName
            (hospital name) */}

            <Navbar />
            <h2 className="DetailTitle">{window.sessionStorage.getItem("HospitalName")}</h2>
            
            <div className="boxes">
                {operations.map((operation) => (
                    <div className="shadow">
                        <div className="shadowRow">
                            <h4>Operation:</h4>
                            <h4>{operation.OperationName}</h4>
                        </div>
                        <div className="shadowRow">
                            <h4>Price (Without Insurance):</h4>
                            <h4>{operation.BeforePrice}</h4>
                        </div>
                        <div className="shadowRow">
                            <h4>Price (With Insurance):</h4>
                            <h4>{operation.AfterPrice}</h4>
                        </div>
                        <div className="shadowRow">
                            <h4>Insurance Provider:</h4>
                            <h4>{operation.Insurance}</h4>
                        </div>
                    </div>
                ))}
                
            </div>
            
            <div class="btn-section d-flex">
                <a href="/explore" class="btn-start">Return to Map</a>
            </div>
            
            

            <Footer />
            
            
        </div>
    )
}

export default Details
