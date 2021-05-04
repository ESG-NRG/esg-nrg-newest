import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import babysprout from "../images/babysprout.png";
import paragraph from "../images/sproutsFriend.png";

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
            <div className='MOPsectionM'>
              <ul >
                <p className="marineM">REBUILD THE OCEAN + ENVIRONMENT</p> <br />
                <p className="smallRobotoM">
                  with open, pragmatic guidance from your ESG Adviser
                </p>
                <br /><br />
                <div>
                  <img className='paragraphM' src={paragraph} />
                </div> 
                <br /><br />
              </ul>
              <button className="buttonM" onClick>
                DISCOVER NOW
              </button>
            </div>
          </div>
            
        </div>
    ) : ( 
      <div className='MOPsection'>
        <div className="flex flex-row">
            <div>
            
                <p className="marine">REBUILD THE OCEAN + <br />ENVIRONMENT</p> <br />
                <p className="smallRaleway">
                  with open, pragmatic guidance from your ESG Adviser
                </p>
                <br /><br />
                <div>
                  <img className='paragraph' src={paragraph} />
                </div> 
                <br /><br />

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