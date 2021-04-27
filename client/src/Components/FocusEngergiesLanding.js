import React, { useState } from "react";
import useScreenSize from "./useScreenSize"

import rightship from "../images/rightship.png";
import leftship from "../images/leftship.png";


function FocusEngergiesLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false)
    return (
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
          <div>
          <div>
                <img
                  className="rightshipM"
                  src={rightship}
                  alt="full cargo ship"
                />
              </div>
            <div className="my-10">
            <div >
            <div> 
              <div>
                <p className="marine">
                  FOCUS YOUR ENERGY <br /> TOWARDS YOUR CLIENT
                </p><br/>
                <p className="secondLine">
                  turn your emissions into a source of positive energy.
                </p>{" "}
                <br />
                <ul>
                <li className="smallRoboto">
                    Target cargo-owners who care about net-zero.
                  </li><br/>
                  <li className="smallRoboto">
                    Align your corporate identity with your company actions.
                  </li><br/>
                  <li className="smallRoboto">
                    Display your ESG achievements to the market.
                  </li><br/>
    
                </ul>
              </div>
              </div>
         
            </div><br/>
        
            <div>
                <img
                  className="leftshipM"
                  src={leftship}
                  alt="empty cargo ship"
                />
              </div>
            <div className="flex flex-row my-10">
              <div>
                <p className="marine">
                  FLAT $<sub>1</sub>/MT COMMISION
                </p><br/>
                <p className="smallRaleway">
                  only transparent transactions and incentives.
                </p><br/>
                <ul>
                <li className="smallRoboto">
                    We broker our deals, we don't trade.
                  </li><br/>
                  <li className="smallRoboto">
                    Some of the lowest fees in the industry (other middlemen take <b>10-30%</b> of the transaction value).
                  </li><br/>
                  <li className="smallRoboto">
                    More money flows directly to project development and local communities.
                  </li><br/>
                </ul>
              </div>
            </div>
          </div>
        </div>
        ) : (
     
          <div>
            <div className="my-10">


            <div className="flex flex-row">
            <div className='container'> 
              <div className='containerText'>
                <p className="marine">
                  FOCUS YOUR ENERGY <br /> TOWARDS YOUR CLIENT
                </p> <br/>
                <p className="smallRaleway">
                  turn your emissions into a source of positive energy.
                </p>
                <br />
                <ul>
                <li className="smallRoboto">
                    Target cargo-owners who care about net-zero.
                  </li><br/><br/>
                  <li className="smallRoboto">
                    Align your corporate identity with your company actions.
                  </li><br/><br/>
                  <li className="smallRoboto">
                    Display your ESG achievements to the market.
                  </li>
    
                </ul>
              </div>
              </div>
              <div>
                <img className="rightship" class='container' src={rightship} alt="full cargo ship"/>
              </div>
            </div>



            <div className="flex flex-row">
              <div>
                <img className='container'
                  className="leftship"
                  src={leftship}
                  alt="empty cargo ship"
                />
              </div>
              <div class='container'>
              <div className='containerText'>
                <p className="marine">
                  FLAT $<sub>1</sub>/MT COMMISION
                </p> <br/>
                <p className="smallRaleway">
                  only transparent transactions and incentives.
                </p><br/>
                <ul>
                <li className="smallRoboto">
                    We broker our deals, we don't trade.
                  </li><br/><br/>
                  <li className="smallRoboto">
                    Some of the lowest fees in the industry (other middlemen take <b>10-30%</b> of the transaction value).
                  </li><br/><br/>
                  <li className="smallRoboto">
                    More money flows directly to project development and local communities.
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </>
    );
}

export default FocusEngergiesLanding;