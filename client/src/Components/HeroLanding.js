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
          {/* <div className="bg-local ">
            <img className="heroz" src={heropic} alt="hero pic" />
          </div>
          <div className="centered">
            <p className="hero">
              SHIPS ARE RESPONSIBLE FOR <sub>2-3</sub>% OF THE WORLD'S CO
              <sub>2</sub> EMISSIONS
            </p>{" "}
            <br />
            <p className="heroSmall">
              ESG-NRG enables shipping firms to calculate, visualize and
              compensate their emissions via a purpose-built digital platform.
            </p>
            <br />
            <br />
            <br />
            <button className="button">GET STARTED</button>
          </div> */}
        </div>
      )}
    </>
  );
}

export default HeroLanding;
