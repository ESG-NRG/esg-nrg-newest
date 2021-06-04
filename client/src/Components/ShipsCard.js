import React, { useState } from "react";
import hero from "../images/ShipCardHero.png";
import basket from "../images/basketicon.png";
import history from "../images/historyicon.png";
import projects from "../images/projectsicon.png";
import ship from "../images/shipsicon.png";
import map from '../images/vesselMap.png';
import search from '../images/magnifyGlass.png'
import Group70 from '../images/Group70.png'
import NavBar from "./NavBar";
import useScreenSize from "./useScreenSize";
import '../shipcard.css'
import FleetCard from "./FleetCard";

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
            <br /><br/>
            <div className="bg-local ">
              <img src={hero} alt="hero pic" />
            </div><br/>
            <div className='outerFrameMM' >
              <img src={ship} onClick='' className='navIcons' alt="ship" />
              <img src={projects} onClick='' className='navIcons' alt="offset projects" />
              <img src={basket} onClick='' className='navIcons' alt="basket" />
              <img src={history} onClick='' className='navIcons' alt="history" />
            </div><br/>
            <div>
              <p className='marineM'>Search Ship Name / IMO</p>
            </div><br/>
              <div className='flex flex-row'>
                  <input className='shipSearchM'  placeholder='' value='  Name/IMO' />
                  <img className='magnifyGlassM' src={search} id="search button" />
              </div><br/><br/>

              <div className='frameM'><br/>
                <img className='group70' src={Group70} /><br/><br/><br/>
              </div><br/><br/>

              <FleetCard />
            
          </div>
        ) : (
          <div>
            <div id='parentD' >
              <img id='image1D' className='heroDesk' src={map} alt='World Map' />
            <div id='image2D' className='outerFrameD' ><br/><br/><br/>
              <img src={ship} onClick='fleetCard' className='navIconsD' alt="ship" /><br/><br/>
              <img src={projects} onClick='' className='navIconsD' alt="offset projects" /><br/><br/>
              <img src={basket} onClick='' className='navIconsD' alt="basket" /><br/><br/>
              <img src={history} onClick='' className='navIconsD' alt="history" /><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
            <FleetCard />

          </div>
        )}
      </>
    </div>
  );
}

export default ShipsCard;
