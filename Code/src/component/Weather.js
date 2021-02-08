import React from 'react'
// import weatherIcon from '../images/weather.png'
import '../style/Weather.css';
export default function Weather(props) {
    const {city,country,temp,temp_max,temp_min,description,icon} = props.data;
    return (

        <div className="container">
                <div className="row">


                    <div className="col-md-12 text-center">
                        <div className="cont-data">
                        <div className="info">
                            <h3 className="text-center">{city},{country}</h3>
                            <h5 >
                                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                            </h5>
                            <h2 className="display-4"> {temp} &deg;</h2>
                            <h4>
                                <span className="display-5 mx-1"> {temp_max} &deg; -</span>
                                <span className="display-5 mx-1"> {temp_min} &deg; </span>
                            </h4>
                            <h5 className="display-3"> {description}</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

