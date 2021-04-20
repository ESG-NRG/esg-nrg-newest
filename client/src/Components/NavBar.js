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
        <a id="about-us" className="menu-item" href="/about-us">ABOUT US</a>
        <a id="faqs" className="menu-item" href="/faqs">FAQS</a>
        <a id="projects" className="menu-item" href="/projects">PROJECTS</a>
        <a id="our-impact" className="menu-item" href="/our-impact">OUR IMPACT</a>
        <a id="contact-us" className="menu-item" href="/contact-us">CONTACT US</a>
        <a id="register" className="menu-item" href="/signup">Register</a>
        <a id="login" className="menu-item" href="/login">Sign In</a>
    </Menu>
   
      ) : (
        <div>
        <nav className="py-4 flex space-x-10 container mx-auto border-4 border-gray-100">
          <div className="flex space-x-12">
          <img className='logo' src={logo} alt='esg-nrg logo' />
            <Link to="/about-us">ABOUT US</Link>
            <Link to="/faqs">FAQS</Link>
            <Link to="/projects">PROJECTS</Link>
            <Link to="/our-impact">OUR IMPACT</Link>
            <Link to="/contact-us">CONTACT US</Link>
          </div>

          <div className="flex flex-row-reverse space-x-1 space-x-reverse">
            <Link to="/signup">Register</Link>
            <Link to="/login">Sign In </Link>
          </div>
        </nav>
      </div>
      )}

    </>
  );
}

export default NavBar;
