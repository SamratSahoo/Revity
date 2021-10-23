import React, { Component } from "react";
import "./LoginPage.css";
import Navbar from "../Navbar/Navbar";
import loginImage from '../../../src/assets/login.svg';
import LoginBox from "./LoginBox/LoginBox";
import Footer from "../Footer/Footer";

const LoginPage = () => {
    // constructor(){
    //     super();
    // }

    return(
            <div>
                <Navbar></Navbar>
                <div className="login-grid">
                    <img src={loginImage} className="login-image"></img>
                    <LoginBox className="login-box-background">

                    </LoginBox>
                
                
                </div>
            </div>
    );
}

export default LoginPage;