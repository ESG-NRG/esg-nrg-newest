import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import hero from '../images/Hero.png';
import heroM from "../images/HeroMM.png";
import fadingLogo from '../images/heroLogoFading.png'

function HeroLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {screenSize === "xs" || screenSize === "sm" ? (
        <div>
        <br/>
          <div className="bg-local">
            {/* make img clickable with a href tag once button 'get started'  */}
            <img src={heroM} alt="hero pic" />
          </div>
        </div>
      ) : (
        <div>
        <div className='parent' className="bg-local ">
            {/* make img clickable with a href tag once button 'get started'  */}
            <img className='image1' src={hero} alt="hero pic" />
            <img className='image2' src={fadingLogo} />
          </div>
        </div>
      )}
    </>
  );
}

export default HeroLanding;
