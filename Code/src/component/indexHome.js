import React, { Component } from 'react';
import Homeheader from "./Homeheader";
import ServicesList from "./ServicesList";
import Testimonials from "./Testimonials";
import OurTeamList from './ourTeamList';
import Youtube from './youtube';
 class IndexHome extends Component {
    render() {
        return (
            <div>
                <Homeheader />
                <ServicesList />
                <Testimonials />
                 <Youtube />
                <OurTeamList />
            </div>
        )
    }
}
export default IndexHome;
