import React, {useState} from "react";
import { Link, Switch, Route } from "react-router-dom";
import useScreenSize from "./useScreenSize";
import {slide as Menu} from 'react-burger-menu'
import Login from "./Login";
import Signup from "./SignUp";
import logo from '../images/logo.png'

function NavBar(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      {screenSize === "xs" || screenSize === "sm" ? (
       
    //hamburger
        <Menu right>
        <div className="p-menu1">
        <nav id="navbar" className="navigation" role="navigation">
          <input id="toggle1" type="checkbox" />
          <label className="hamburger1" for="toggle1">
            <div className="top"></div>
            <div className="meat"></div>
            <div className="bottom"></div>
          </label>
        
          <nav className="menu1">
            <a href='/'><img className='logo' src={logo} alt='esg-nrg logo' /></a>
            <a id="about-us" className="menu-item" href="/about-us">ABOUT US</a>
            <a id="faqs" className="menu-item" href="/faq">FAQS</a>
            <a id="projects" className="menu-item" href="/projects">PROJECTS</a>
            <a id="our-impact" className="menu-item" href="/our-impact">OUR IMPACT</a>
            <a id="contact-us" className="menu-item" href="/contact-us">CONTACT US</a>
            <a id="register" className="menu-item" href="/signup">Register</a>
            <a id="login" className="menu-item" href="/login">Sign In</a>
          </nav>
      </nav>
    </div>
        </Menu>
   
   
      ) : (
       
        <div className="wideNav">
        <nav className="py-4 flex space-x-8 ">
          <div className="flex space-x-6">
          <a href='/'><img className='logo' src={logo} alt='esg-nrg logo' /></a>
            <Link to="/about-us">ABOUT US</Link>
            <Link to="/faq">FAQS</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/our-impact">OUR IMPACT</Link>
            <Link to="/contact-us">CONTACT US</Link>
          </div>

          <div className="flex flex-row-reverse space-x-1 space-x-reverse">
            <Link to="/signup">Register</Link>
            <Link to="/login">Sign In | </Link>
          </div>
        </nav>
      </div>
  
      )}

    </>
  );
}

export default NavBar;
