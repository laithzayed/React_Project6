import React, { Component } from 'react'
import '../style/Homeheader.css';

export default class Homeheader extends Component {
    render() {
        return (
            <div id="videowrapper">
                <div id="fullScreenDiv">
                    <video id="video" role="presentation" preload="auto" playsinline="" crossorigin="anonymous" autoPlay loop muted className="blur">
                        <source src="video/galaxy.webm" type="video/webm" />
                    </video>
                    <div id="videoMessage" class="styling">
                        <h1>مريخ صبية ؟  عطارد شب؟</h1>
                        <h3>آخر راكب ... لحق حالك</h3>
                        <p class="videoClick"><a href="#main">booknow!</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
