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
 const [address, updateAddress] = React.useState("");
 const [beforePrice, updateBeforePrice] = React.useState(0);
 const [afterPrice, updateAfterPrice] = React.useState(0);
 const [insurace, updateInsurance] = React.useState("");
 const [operation, updateOperation] = React.useState("");

 const handleSubmit = (e) => {
  const url = "http://revit-publi-1xstsu1e3rgne-1394708788.us-east-2.elb.amazonaws.com/";
  axios.post(url + 'operation/addOperation', {
      beforePrice: beforePrice,
      afterPrice: afterPrice,
      insurance: insurace,
      userId: window.sessionStorage.getItem("UserId"),
      operationName: operation,
      hospitalAddress: address
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
   <form onSubmit={handleSubmit} >
     <h2>Input Operation Data</h2>
     <label>Hospital Street Address</label>
     <input {...register("streetaddress", { required: true })} onChange={(event) => updateAddress(event.target.value)} />
     <label>Operation</label>
     <input {...register("operation", { required: true })} onChange={(event) => updateOperation(event.target.value)}/>
     <label>Price without Insurance</label>
     <input {...register("withoutinsurance", { required: true })} onChange={(event) => updateBeforePrice(event.target.value)}/>
     <label>Insurance Company</label>
     <input {...register("insurancename", { required: false })} onChange={(event) => updateInsurance(event.target.value)}/>
     <label>Price with Insurance</label>
     <input {...register("withinsurance", { required: false })} onChange={(event) => updateAfterPrice(event.target.value)}/>
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