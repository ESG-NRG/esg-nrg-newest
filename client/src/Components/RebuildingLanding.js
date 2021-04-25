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
                <p className="secondLine">
                  with open, pragmatic guidance from your ESG Adviser
                </p>
                <br />
                <li>
                  Find offsets that are additional, traceable, verifiable,
                  performing and contributing to sustainable development.
                </li>
                <br />
                <li>
                  Filter across different carbon offset project types, developers, standards, price ranges, SDG goals and countries of origin.
                </li>
                <br />
                <li>
                  Weigh the proclaimed project benefits against it's likely impact on the environment with market insights and research provided within the Marine Offset Platform (MOP).
                </li>
                <br />
              </ul>
              <button className="buttonM" onClick>
                DISCOVER NOW
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
                  with open, pragmatic guidance from your ESG Adviser
                </p>
                <br />
                <li>
                  Find offsets that are additional, traceable, verifiable,
                  performing and contributing to sustainable development.
                </li>
                <br />
                <li>
                  Filter across different carbon offset project types, developers, standards, price ranges, SDG goals and countries of origin.
                </li>
                <br />
                <li>
                  Weigh the proclaimed project benefits against it's likely impact on the environment with market insights and research provided within the Marine Offset Platform (MOP).
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