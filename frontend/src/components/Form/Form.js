import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Styles = styled.div`
 background: lavender;
 
 h2 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;

function Form() {
 const { register, handleRegister } = useForm();

//  const handleSubmit = (e, data) => {
//      e.preventDefault();
//      console.log(data);
//      alert('Submitted');
     
//  }

 const saveData = (data) => {
     const url = "http://revit-publi-1xstsu1e3rgne-1394708788.us-east-2.elb.amazonaws.com/";
     axios.post(url + 'operations/addOperations', {
         beforePrice: data.withoutinsurance,
         afterPrice: data.withinsurance,
         insurance: data.insurancename,
         userId: window.sessionStorage.getItem("UserId"),
         operationName: data.operation,
         hospitalAddress: data.streetaddress
     }, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }).then((response) => {
        console.log(response);
    });
     alert('Submitted');
 }

 return (
     <div>
    <Navbar/>
   <form onSubmit={(data) => saveData(data)} >
     <h2>Input Operation Data</h2>
     <label>Hospital Street Address</label>
     <input {...register("streetaddress", { required: true })} />
     <label>Operation</label>
     <input {...register("operation", { required: true })} />
     <label>Price without Insurance</label>
     <input {...register("withoutinsurance", { required: true })} />
     <label>Insurance Company</label>
     <input {...register("insurancename", { required: false })} />
     <label>Price with Insurance</label>
     <input {...register("withinsurance", { required: false })} />
     <input type="submit" className="submitButton" />
   </form>
   <Footer/>
   </div>
 );
}

export default function App() {
 return (
   <Styles>
     <Form />
   </Styles>
 );
}