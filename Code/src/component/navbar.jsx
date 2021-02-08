import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../style/Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div  className="topnav">
            <img className="logo-nav" src='/images/logo.png' />
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/Services">
                <li>Services</li>
                </Link>
                <Link to="/OurTeam">
                <li>OurTeam</li>
                </Link> 
                <Link to="/Testamonial">
                <li>Testamonial</li>
                </Link>
                <Link to="/Join">
                <li><a className="login-btn" id="login-btn">Login/Register</a></li>
                </Link>
                </ul>
           
            </div>
        )
    }
}

export default Navbar
