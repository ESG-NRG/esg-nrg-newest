import React, { useState } from "react";
import heropic from "../images/heropic.png";


function HeroLanding(props) {
    return (
        <div>
            <div className="bg-local ">
            <img className='heroz' src={heropic} alt="hero pic" />
          </div>
          <div className="centered">
            <p className="hero">
              HELPING YOU OFFSET YOUR CHARTER'S <br /> CARBON FOOTPRINT
            </p>{" "}
            <br />
            <p className="heroSmall">
              Ships are responsible for 2-3% of the worlds CO<sub>2</sub>{" "}
              emissions. We need to avert emissions and pull CO<sub>2</sub> from
              the atmosphere.
            </p>
            <button className="button getStarted">GET STARTED</button>
          </div>
        </div>
    );
}

export default HeroLanding;