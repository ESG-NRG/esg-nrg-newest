import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import babysprout from "../images/babysprout.png";


function RebuildingLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false)
    return (
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
        <div>
        <div>
            <img className="sproutM" src={babysprout} alt="baby tree sprout" />
            </div>
        <div className="flex flex-row my-10">
            <div>
              <ul className="md:leading-normal list-outside">
                <p className="marineM">REBUILD THE OCEAN + ENVIRONMENT</p> <br />
                <p className="smallRobotoM">
                  The selection of the project It's 100% up to you!
                </p>
                <br />
                <li>
                  Find offsets that are additional, traceable, verifiable,
                  performing and contributing to sustainable development.
                </li>
                <br />
                <li>
                  Filter and compare across different project types, standards,
                  vintages, prices, proponents and country of origin.
                </li>
                <br />
                <li>
                  Weight the pros/cons of each project with your esg advisor...
                  <br />
                  ...and if you cant find what you like, we'll hunt it for you!
                </li>
                <br />
              </ul>
              <button className="button" onClick>
                EXPLORE PROJECTS
              </button>
            </div>
          </div>
            
        </div>
    ) : ( 
      <div>
        <div className="flex flex-row my-10">
            <div>
              <ul className="md:leading-normal list-outside">
                <p className="marine">REBUILD THE OCEAN + ENVIRONMENT</p> <br />
                <p className="secondLine">
                  The selection of the project It's 100% up to you!
                </p>
                <br />
                <li>
                  Find offsets that are additional, traceable, verifiable,
                  performing and contributing to sustainable development.
                </li>
                <br />
                <li>
                  Filter and compare across different project types, standards,
                  vintages, prices, proponents and country of origin.
                </li>
                <br />
                <li>
                  Weight the pros/cons of each project with your esg advisor...
                  <br />
                  ...and if you cant find what you like, we'll hunt it for you!
                </li>
                <br />
              </ul>
              <button className="button" onClick>
                EXPLORE PROJECTS
              </button>
            </div>
            <div>
              <img className="sprout" src={babysprout} alt="baby tree sprout" />
            </div>
          </div>
            
        </div>
    )}
    </>
  )
}

export default RebuildingLanding;