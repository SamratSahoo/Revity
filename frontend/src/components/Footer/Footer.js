import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaEnvelope} from "react-icons/fa"; 

import './Footer.css';

const Footer = (props) => {

    const linkStyle = {
        textDecoration: "none",
        color: "#ffffff"
    }

    return (
        <div className="Footer">
            <div className="FooterContent">
                <div className="FooterCol">
                    <p style={{marginBottom: "25px"}} className="FooterColHeader">Pages</p>
                    <a style={linkStyle} href="/"><p>Home</p></a>
                    <a style={linkStyle} href="/explore"><p>Explore</p></a>
                    <a style={linkStyle} href="/login"><p>Account</p></a>
                </div>
                <div className="FooterCol">
                    <p style={{marginBottom: "25px"}} className="FooterColHeader">About</p>
                    <a style={linkStyle} href="/"><p>Blog</p></a>
                    <a style={linkStyle} href="/"><p>Terms</p></a>
                    <a style={linkStyle} href="/"><p>Privacy</p></a>
                </div>
                <div className="FooterCol">
                    <p style={{marginBottom: "25px"}} className="FooterColHeader">Get Started</p>
                    <a style={linkStyle} href="/login"><p>Login</p></a>
                    <a style={linkStyle} href="/login"><p>Register</p></a>
                    <a style={linkStyle} href="/login"><p>Account</p></a>
                </div>
                <div className="FooterCol">
                    <p style={{marginBottom: "25px"}} className="FooterColHeader">Contact</p>
                    <a style={linkStyle} href="/"><p>Contact Form</p></a>
                    <p>Headquarters - Atlanta, GA</p>
                    <a style={linkStyle} href="/"><p>Email - contact@revity.io</p></a>
                </div>
            </div>
            <div className="FooterSubContent">
                <div className="FooterSocials">
                    <a style={linkStyle} href="/" ><FaInstagram/></a>
                    <a style={linkStyle} href="/" ><FaTwitter /></a>
                    <a style={linkStyle} href="/" ><FaLinkedinIn /></a>
                    <a style={linkStyle} href="mailto:contact@revity.io" ><FaEnvelope /></a>
                </div>
                <p>&copy; Revity</p>
            </div>
        </div>
    );
}

export default Footer;