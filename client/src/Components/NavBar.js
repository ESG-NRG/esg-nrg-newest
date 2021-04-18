import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Signup from './SignUp';

function NavBar(props) {
  return (
    <div>
      <nav className="py-4 flex space-x-10 container mx-auto border-4 border-gray-100">
      
        <div className= "flex space-x-12">
        <Link to="/about-us">ABOUT US</Link>
        <Link to="/faqs">FAQS</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/our-impact">OUR IMPACT</Link>
        <Link to="/contact-us">CONTACT US</Link>
        </div>
      
       

       
    <div className= "flex flex-row-reverse space-x-1 space-x-reverse">
      <Link to="/signup">Register</Link> 
      <Link to="/login">Sign In |</Link>
    </div>
      </nav>
    </div>
    
    
  );
}

export default NavBar;
