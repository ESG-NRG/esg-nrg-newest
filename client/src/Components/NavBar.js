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
                <a id="contact-us" className="menu-item" href="/contact-us">
                  CONTACT US
                </a>
                <a id="login" className="menu-item" href="/login">
                  Sign In
                </a>
                <a id="register" className="menu-item" href="/signup">
                  Register
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
                <Link to="/about-us">ABOUT US</Link>
                <Link to="/faq">FAQS</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/our-impact">OUR IMPACT</Link>
                <Link to="/contact-us">CONTACT US</Link>
              </div>

              <div className="rightWideNav">
                <Link to="/signup">Register</Link>
                <Link to="/login">Sign In | </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
