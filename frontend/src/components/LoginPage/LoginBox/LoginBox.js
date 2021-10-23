import React, { Component } from "react";
import "./LoginBox.css";

class LoginBox extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="login-box-grid" className={this.props.className} >
                <h1 className="header-text">Login • Register</h1>
                <div className="subheader-text">Make Your Healthcare More Affordable</div>
                <div className="google-button">
                    <img></img>
                    <h1>Login with Google</h1>
                </div>
            </div>
        );
    }
}

export default LoginBox;