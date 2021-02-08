import React, { Component } from 'react';
import '../style/Navbar2.css';
import {Link} from 'react-router-dom'

 class Navbar extends Component {

    render() {
        const style={

        }
        return (
            <header className="container-navbar">
           <img className="brand" src='/images/logo.png' />
            <nav class="navbar-menu">
                <input className="navbar-input" type="checkbox" id="menuToggle" />
                <label for="menuToggle" className="menu-icon"><i class="fa fa-bars"></i></label>
                <ul className="navbar-ul">
                    
                <Link to="/" className='navbar-link'> <li className='navbar-icon'>Home</li></Link>
                <Link to="/profile" className='navbar-link'> <li className='navbar-icon'>Profile</li> </Link>
                 <Link to="/login" className='navbar-link'><li className='navbar-icon btn-navbar'>Login/Register</li></Link> 
                    
                    
                </ul>
                
            </nav>
        </header>
        )
    }
}
export default Navbar;
