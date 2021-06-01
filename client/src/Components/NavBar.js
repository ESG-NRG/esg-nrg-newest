import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import useScreenSize from "./useScreenSize";
import { stack as Menu } from "react-burger-menu";
// import faq from "./FAQ"
// import Login from "./Login";
// import Signup from "./SignUp";
import logo from "../images/logo.png";
import "../index.css";


function NavBar(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
        console.log(scroll);
      }
    });
  });

  return (
    <>
      {screenSize === "xs" || screenSize === "sm" ? (
        //hamburger
        <div className={scroll ? "burgerLogoNavBar" : "burgerLogoNavBarScroll"}>
      <a href='/'><img className='burgerNavbarLogo'  src={logo} alt='esg-nrg logo' /></a>
        <Menu right>
          <a href='/'><img className='logo' class="burgerLogo" src={logo} width={"50px"} height={"50px"} alt='esg-nrg logo' /></a>
        <a id="home" className="menu-item" href="/">HOME</a>
                <a id="about-us" className="menu-item" href="/about-us">
                  ABOUT US
                </a>
                <a id="faqs" className="menu-item" href="/faq">
                  FAQS
                </a>
                <a id="projects" className="menu-item" href="/projects">
                  PROJECTS
                </a>
                <a id="our-impact" className="menu-item" href="/our-impact">
                  OUR IMPACT
                </a>
                <a id="ship-cards" className="menu-item" href="/ship-cards">
                  SHIP CARDS
                </a>
                <a id="contact-us" className="menu-item" href="/contact-us">
                  CONTACT US
                </a>
                <a id="login" className="menu-item" href="/login">
                  Sign In
                </a>
                <a id="register" className="menu-item" href="/signup">
                  Request A Demo
                </a>
                
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>

      </div>
      ) : (
        <div className={scroll ? "outerWideNav" : "outerWideNavScroll"}>
          <div className="wideNav">
            <nav className="innerWideNav">
              <div className="leftWideNav">
                <a href="/">
                  <img className="logo" src={logo} alt="esg-nrg logo" />
                </a>
              </div>
              <div className="centerWideNav">
                <Link to="/">HOME</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/faq">FAQs</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/our-impact">Our Impact</Link>
                <Link to="/ship-cards">SHIP CARDS</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
           <span></span>
              <div className="rightWideNav">
                
                <Link to="/login"> Sign In </Link> <br/>
                <p>|</p>
                <Link to="/signup">Request A Demo</Link> 
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
