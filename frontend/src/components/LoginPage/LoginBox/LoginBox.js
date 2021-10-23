import React, { Component } from "react";
import "./LoginBox.css";
import googleLogo from '../../../../src/assets/google_logo.png';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";


class LoginBox extends Component {
    constructor(){
        super();
        dotenv.config();
    }

    

    loginGoogle() {
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
        const analytics = getAnalytics(app);
        const provider = new GoogleAuthProvider();
        const auth = getAuth();        
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          // API CALL HERE
            
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          return null;
      });}

    render(){
        return(
            <div className="login-box-grid" className={this.props.className} >
                <h1 className="header-text">Login • Register</h1>
                <div className="subheader-text">Make Your Healthcare More Affordable</div>
                <div className="google-button" onClick={this.loginGoogle}>
                    <img src={googleLogo} className="google-image"></img>
                    <h2 className="login-text">Login with Google</h2>
                </div>
                <div className="tos-text">*By signing up on Revity, you agree to our Terms of Service and Privacy Policy</div>
            </div>
        );
    }
}

export default LoginBox;