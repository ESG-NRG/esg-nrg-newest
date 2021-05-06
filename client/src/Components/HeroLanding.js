import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import heropic from "../images/heropic.png";
import hero from '../images/Hero.png';
import heroM from "../images/heroM.png";

function HeroLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {screenSize === "xs" || screenSize === "sm" ? (
        <div>
          <div className="bg-local ">
            {/* make img clickable with a href tag once button 'get started'  */}
            <img src={heroM} alt="hero pic" />
          </div>
        </div>
      ) : (
        <div>
        <div className="bg-local ">
            {/* make img clickable with a href tag once button 'get started'  */}
            <img src={hero} alt="hero pic" />
          </div>
        </div>
      )}
    </>
  );
}

export default HeroLanding;
