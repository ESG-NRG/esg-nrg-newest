import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import placeholderpic from "../images/placeholderpic.png";
import arrow from "../images/subscriptionArrow.png";


function AssetsLanding(props) {
    return (
        <div>
            <p className="marine">OUR ASSETS</p>
          <p className="smallRaleway">
            are people, experience and a little bit of code.
          </p>
          <div className="bigBossMans">
            <div>
      
              <img className="teampic" src={placeholderpic} />
              CEO
            </div>
            <div>
       
              <img className="teampic" src={placeholderpic} />
              CTO
            </div>
            <div>
    
              <img className="teampic" src={placeholderpic} />
              CXO
            </div>
          </div>
          <div className="littleBossMans">
            <div className="flex flex-wrap flex-row">
              <img className="teampic" src={placeholderpic} />
              <br />
              <br />
              <img className="teampic" src={placeholderpic} /> <br />
              <br />
              <br />
              <br />
              WEB DEV
            </div>
            <br />

            <div className="flex flex-wrap flex-row">
              <img className="teampic" src={placeholderpic} />
              <img className="teampic" src={placeholderpic} /> <br />
              <br />
              <br />
              <br />
              UX/UI
            </div>
          </div>
          <p>
            Join our Newsletter to get the latest news on environmental
            sustainability.
          </p>
        </div>
    );
}

export default AssetsLanding;