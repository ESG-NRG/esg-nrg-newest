import React, { useState } from "react";
import hero from "../images/aboutUsHero.png";
import basket from "../images/basketicon.png";
import history from "../images/historyicon.png";
import projects from "../images/projectsicon.png";
import ship from "../images/shipsicon.png";
import NavBar from "./NavBar";
import useScreenSize from "./useScreenSize";
import '../shipcard.css'

function ShipsCard(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
          <div>
            <br />
            <br />
            <br />
            Mobile
            <div className="bg-local ">
              <img src={hero} alt="hero pic" />
            </div>
            <div className='outerFrameM' className='flex flex-row'>
              <img src={ship} className='navIcons' alt="ship" />
              <img src={projects} className='navIcons' alt="offset projects" />
              <img src={basket} className='navIcons' alt="basket" />
              <img src={history} className='navIcons' alt="history" />
            </div>
          </div>
        ) : (
          <div>Desktop</div>
        )}
      </>
    </div>
  );
}

export default ShipsCard;
