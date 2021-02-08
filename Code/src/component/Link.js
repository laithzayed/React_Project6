import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeSection from './HomeSection';
import ServicesList from './ServicesList';
import Navbar from './navbar';


function Link() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={ HomeSection }/> */}
        <Route path="/Services" component={ServicesList} />
        <Route path="/OurTeam" component={HomeSection} />
        <Route path="/Testamonial" component={HomeSection} />
        <Route path="/Join" component={HomeSection} />

      </Switch>
    </BrowserRouter>
  )
}

export default Link;
