import React, { Component } from 'react';
import "../style/ourTeam.css";


class ourTeam extends Component {
    render() {

        return (
            <div class="wrapper-ourteam">
                <div className="img-area-ourteam">
                    <div class="inner-area-ourteam">
                        <img src={this.props.img} alt=""></img>
                    </div>
                </div>
                <div className="name-ourteam">{this.props.name}</div>
                <div className="about-ourteam">{this.props.job}</div>
                <div class="social-icons-ourteam">
                    <a href={this.props.Facebook} class="fb-ourteam"><i class="fab fa-facebook-f"></i></a>
                    <a href={this.props.twitter} class="twitter-ourteam"><i class="fab fa-twitter"></i></a>
                    <a href={this.props.github} class="insta-ourteam"><i class="fab fa-github"></i></a>
                </div>

            </div>

        );
    }

}

export default ourTeam;