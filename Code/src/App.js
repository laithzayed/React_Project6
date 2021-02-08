import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ServicesList from './component/ServicesList';
// import Youtube from './component/youtube';
// import HomeSection from './component/HomeSection';
import Testimonials from './component/Testimonials';
// import OurTeamList from './component/ourTeamList';
// import OurTeam from './component/ourTeam';
// import Link from './component/Link';
// import Navbar from './component/navbar';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Two_cards from './component/Two_cards';
import Footer from "./component/Footer";
import Homeheader from "./component/Homeheader";
import IndexHome from "./component/indexHome";
import Navbarmain from "./component/Navbarmain";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbarmain />
          <Switch>
            <Route path="/" exact component={IndexHome} />
            <Route path="/profile" component={Two_cards} />
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>



    )
  }
}

export default App

