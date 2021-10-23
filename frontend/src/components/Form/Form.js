import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
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

function saveData(data) {
    console.log(data);
}

function Form() {
 const { register, handleSubmit } = useForm();

 return (
   <form onSubmit={handleSubmit(data => saveData(data))}>
     <h1>Input Operation Data</h1>
     <label>Address</label>
     <input {...register("address")} />
     <label>Operation</label>
     <input {...register("operation")} />
     <label>Price without Insurance</label>
     <input {...register("withoutinsurance")} />
     <label>Insurance Company</label>
     <input {...register("insurancename")} />
     <label>Price with Insurance</label>
     <input {...register("withinsurance")} />
     <input type="submit" className="submitButton" />
   </form>
 );
}

export default function App() {
 return (
   <Styles>
     <Form />
   </Styles>
 );
}