import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';
import '../style/Navbarmain.css';
import { Link } from 'react-router-dom';

export default class Navbarmain extends Component {
    render() {
        return (
            <Navbar className="navbarmain-container" bg="#10121F" expand="lg">
                <Navbar.Brand href="#home"><img className="logonav" src="/images/logo.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto navmain-links">
                        <Nav.Link  ><Link to="/" className="navmain-links" >Home</Link></Nav.Link>
                        <Nav.Link  ><Link to="/profile" className="navmain-links" >Profile</Link></Nav.Link>

                    </Nav>
                    <Form className="btn-formnav" inline>
                        <a className="btn-navbarmain" >
                            <Link to="/login" >Login/Register</Link></a>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
