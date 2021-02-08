import React from 'react';
import { Component } from 'react';
import YouTube from 'react-youtube';
import '../style/youtubes.css'

class Youtube extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '250',
      width: '80%',
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="ytb-container" style={{ backgroundImage: " url('../images/bg-login.png')" }}>
        <div className="container container-ytb background-ytb"  >
          <div className="row">
            <div className="col-12 col-lg-6">
              <YouTube className="ytb-size" videoId="Plcx5JGxOJE" opts={opts} onReady={this._onReady} />    </div>
            <div className="col-12 col-lg-6 ">
              <YouTube videoId="6DF0X84iOwk" opts={opts} onReady={this._onReady} />    </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <YouTube videoId="rIntgpd18AI" opts={opts} onReady={this._onReady} />    </div>
            <div className="col-12 col-lg-6">
              <YouTube videoId="UIJgru0MBv8" opts={opts} onReady={this._onReady} />    </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Youtube;
