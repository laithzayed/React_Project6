import { Container, Row, Col, Jumbotron, Nav } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import Logo from './logo.png';
import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faInstagram,faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



class Footer extends Component {

        render(){

            return(
        <Jumbotron style={{backgroundColor:'#10121F'}}>
            <Container style={{color:'#fff'}}>
                    
           
                <Row>
                  <Col><h5 id="footer-h5">About US</h5></Col>
                  <Col><h5 id="footer-h5">Contact US</h5></Col>
                  <Col><h5 id="footer-h5">Videos</h5></Col>
                  <Col><h5 id="footer-h5">Social Media</h5></Col>
                 
                  
                </Row>
                <Row>
                  <Col>It work</Col>
                  <Col>Contact</Col>
                  <Col>Submit Video</Col>
                  <Col>Instagram</Col>
                </Row>
                <Row>
                  <Col>Testimonials</Col>
                  <Col>Support</Col>
                  <Col>Ambassadors</Col>
                  <Col>Facebook</Col>
                </Row>
                <Row>
                  <Col>Careers</Col>
                  <Col>Destination</Col>
                  <Col>Agency</Col>
                  <Col>Youtube</Col>
                </Row>
                <Row>
                  <Col>Investors</Col>
                  <Col>Sponsorship</Col>
                  <Col>Influance</Col>
                  <Col>Twitter</Col>
                </Row>
                <Row>
                  <Col>Terms</Col>
                  {/* <Col></Col>
                  <Col></Col>
                  <Col></Col> */}
                </Row>
            </Container>
        <div className="Footer-end">
            <div className="footer-left">
              <img id="footer-img" src="/images/logo.png" alt="Logo" />  
            </div>

            <center><div className="footer-center">
            <p id="footer-p">MAKOOK © All rights reserved</p>  
            </div></center>  
         

            <div className="footer-right">
            <FontAwesomeIcon icon={faFacebookF} size="x" id="sign"/>
            <FontAwesomeIcon icon={faInstagram} size="x" id="sign"/>
            <FontAwesomeIcon icon={faYoutube} size="x" id="sign"/>
            <FontAwesomeIcon icon={faTwitter} size="x" id="sign"/>
            <FontAwesomeIcon icon={faLinkedinIn} size="x" id="sign"/>
            
            </div>
            </div>
           
        </Jumbotron>
      

            )
        }
}

export default Footer;
