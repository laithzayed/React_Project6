import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Video from '../video/galaxy.webm'
import Video from './video/galaxy.webm'
// import ReactPlayer from 'react-player';
import '../style/HomeSection.css'

// class HomeSection extends React.Component {



//       render() {
//         return (
//             <p>Slider</p>,
//             <br></br>,
//             <img id="home-img" src="https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"></img>,
//             <ReactPlayer url='https://www.youtube.com/watch?v=7NyEX8DjOTw&ab_channel=Animoplex' />






//         );
//       }
//     }

function HomeSection() {
    return (
        <div className='App'>
            <video width="100%" autoplay controls muted id="myVideo">
                <source src={Video} type="video/webm" />
            </video>
            <div className="overlay" id="over-video">
                <h2>Go to Space Journey Now!</h2>
                <p>Go to Space Journey Now!</p>
                <button className="btn-1">Go Now</button>
            </div>
        </div>


    )
}
export default HomeSection;