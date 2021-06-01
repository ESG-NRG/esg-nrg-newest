import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import sprout from "../images/sprout.png";
import paragraph from "../images/sproutsFriend.png";

function RebuildingLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false)
    return (
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
        <div>
        <div>
            <img className="sproutM" src={sprout} alt="baby tree sprout" />
            </div>
        <div className="flex flex-row my-10">
            <div className='MOPsectionM'>
             
                <p className="marineM">REBUILD THE OCEAN + ENVIRONMENT</p> <br />
                <p className="smallRobotoM">
                  with open, pragmatic guidance from your ESG Adviser
                </p>
                <br /><br />
                <div>
                  <img className='paragraphM' src={paragraph} />
                </div> 
                <br /><br />
            
              <button className="buttonM" onClick>
               EXPLORE PROJECTS
              </button>
            </div>
          </div>
            
        </div>
    ) : ( 
      <div className='MOPsection'>
      <p className="marine">REBUILD THE OCEAN + ENVIRONMENT</p> <br />
                <p className="smallRaleway">
                  with open, pragmatic guidance from your ESG Adviser
                </p>
                <br /><br /><br />
        <div className="flex flex-row">
            <div>
                <div>
                  <img className='paragraph' src={paragraph} />
                </div> 
                <br /><br />

              <button className="button" onClick>
                EXPLORE PROJECTS
              </button>
            </div>
            <div>
              <img className="sprout" src={sprout} alt="baby tree sprout" />
            </div>
          </div>
        </div>
    )}
    </>
  )
}

export default RebuildingLanding;