import React, { Component, useEffect, useState } from "react";
import "./LoginBox.css";
import googleLogo from '../../../../src/assets/google_logo.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import axios from "axios"
import { useHistory } from "react-router-dom";

const baseURL = "http://revit-publi-1xstsu1e3rgne-1394708788.us-east-2.elb.amazonaws.com/";

const LoginBox = (props) => {


    // constructor(){
    //     super();
    //     dotenv.config();
    // }

    const history = useHistory();

    useEffect(() => {
        dotenv.config();
    })


    const loginGoogle = () => {
        const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
            appId: process.env.REACT_APP_FIREBASE_MESSAGE_APP_ID,
            measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const provider = new GoogleAuthProvider();
        const auth = getAuth();        
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          
          axios
            .post(baseURL+'user/signUp', { 
                name: user.displayName,
                email: user.email,
                socialId: user.uid,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then((response) => {
                console.log(response);
                window.sessionStorage.setItem("UserId", response.data.Info.id);
            });
        //    console.log(props)
            history.push('/explore');


        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          return null;
      });}

    return(
            <div className="login-box-grid" className={props.className} >
                <h1 className="header-text">Login • Register</h1>
                <div className="subheader-text">Make Your Healthcare More Affordable</div>
                <div className="google-button" onClick={loginGoogle}>
                    <img src={googleLogo} className="google-image"></img>
                    <h2 className="login-text">Login with Google</h2>
                </div>
                <div className="tos-text">*By signing up on Revity, you agree to our Terms of Service and Privacy Policy</div>
            </div>
    );
}

export default LoginBox;