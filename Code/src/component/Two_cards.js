import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from './Flibby_combination';
import Rick from './rick.png';
import '../style/Two_cards.css';
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

// components 

import Weather from './Weather';
import Error from './Error';
const API_KEY = "3f5a8d36d96c810dabf652d54a0d110f"

const FlippyStyle = {
  marginTop: '20%',
  width: '80%',
  height: '600px',
  marginLeft: '10%',
  marginRight: '10%',
  textAlign: 'center',
  color: '#FFF',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}
let loginname = "Usernot Login";
let logeduser = JSON.parse(localStorage.getItem("loggeduser"));
if (logeduser) {
  loginname = logeduser[0].email;
}
console.log(loginname);
const DefaultCardContents = ({ children }) => (

  <React.Fragment>
    <FrontSide
      style={{
        borderRadius: '2.5rem',
        backgroundColor: '#BBFF39',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <img
        src={Rick}
        style={{ maxWidth: '50%', maxHeight: '50%' }}
      />
      RICK
      <span
        style={{
          borderRadius: '2.5rem',
          color: 'black',
          fontSize: '12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>
        {children}<br />
        {/* (FRONT SIDE) */}
      </span>
    </FrontSide>
    <BackSide
      style={{
        borderRadius: '2.5rem',
        backgroundColor: '#10121F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      {loginname}
      <span
        style={{
          fontSize: '12px',
          position: 'absolute',
          bottom: '10px',
          width: '100%'
        }}>

      </span>
    </BackSide>
  </React.Fragment>);

const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
  <Flippy
    flipOnHover={true}
    flipDirection={flipDirection}
    style={FlippyStyle}
  >
    <DefaultCardContents>

      {/* <h1>Aseeeeeeeeeeel</h1> */}

      <p className='info-paraghraf'>Look back To see my info </p>
      <FaTwitter className="twitter" />
      <FaInstagram className='facebook' />
      <FaFacebookF className='youtube' />
      < FaYoutube className='instagram' />
    </DefaultCardContents>

  </Flippy>
);



class Two_cards extends Component {

  state = {
    isFlipped: false,
    city: 'cairo',
    country: 'egypt',
    icon: '',
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    description: '',
    status: false,
    error: false,
  };

  // setInterval(() => {
  //   this.setState({
  //     isFlipped: !this.state.isFlipped
  //   });
  // }, 3000);

  componentDidMount() {

    //  getData = async (e)=>{
    // e.preventDefault();
    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=amman,jordan&appid=${API_KEY}`).then(response => response.json())
      .then(result => {
        this.setState({
          city: 'Amman',
          country: 'Jordan',
          temp: this.convertToSilsious(result.main.temp),
          temp_min: this.convertToSilsious(result.main.temp_min),
          temp_max: this.convertToSilsious(result.main.temp_max),
          description: result.weather[0].description,
          icon: result.weather[0].icon,
          status: true,
          error: false

        })
      })
      .catch(e => {
        console.log(e);
        this.setState({ error: true })
      });
  }
  // }

  convertToSilsious = (temp) => {
    return Math.floor(temp - 273.15)
  }

  render() {
    return (

      <div>


        <div className="Two_card">

          <div style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>

            <FlippyOnHover flipDirection="horizontal">

            </ FlippyOnHover >

            <div className="TwoCard_wrapper">
              <div className="InfoCard_container">
                {this.state.error ? <Error /> : ''}
                {this.state.status ? <Weather data={this.state} /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Two_cards;
