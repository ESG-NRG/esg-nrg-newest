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
            <div className="my-10">
            <div className="flex flex-row">
              <div>
                <p className="marine">
                  FOCUS YOUR ENERGY <br /> TOWARDS YOUR CLIENT
                </p>
                <p className="secondLine">
                  turn your emissions into a source of positive energy.
                </p>{" "}
                <br />
                <ul>
                <li className="smallRoboto">
                    Target cargo-owners who care about net-zero.
                  </li>
                  <li className="smallRoboto">
                    Align your corporate identity with your company actions.
                  </li>
                  <li className="smallRoboto">
                    Display your ESG achievements to the market.
                  </li>
    
                </ul>
              </div>
              <div>
                <img
                  className="rightship"
                  src={rightship}
                  alt="full cargo ship"
                />
              </div>
            </div>

            <div className="flex flex-row">
              <div>
                <img
                  className="leftship"
                  src={leftship}
                  alt="empty cargo ship"
                />
              </div>
              <div>
                <p className="marine">
                  FLAT $<sub>1</sub>/MT COMMISION
                </p>
                <p className="smallRaleway">
                  only transparent transactions and incentives.
                </p>
                <ul>
                <li className="smallRoboto">
                    We broker our deals, we don't trade.
                  </li>
                  <li className="smallRoboto">
                    Some of the lowest fees in the industry (other middlemen take <b>10-30%</b> of the transaction value).
                  </li>
                  <li className="smallRoboto">
                    More money flows directly to project development and local communities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        ) : (
     
          <div>
            <div className="my-10">
            <div className="flex flex-row">
              <div>
                <p className="marine">
                  FOCUS YOUR ENERGY <br /> TOWARDS YOUR CLIENT
                </p>
                <p className="smallRaleway">
                  turn your emissions into a source of positive energy.
                </p>{" "}
                <br />
                <ul>
                <li className="smallRoboto">
                    Target cargo-owners who care about net-zero.
                  </li>
                  <li className="smallRoboto">
                    Align your corporate identity with your company actions.
                  </li>
                  <li className="smallRoboto">
                    Display your ESG achievements to the market.
                  </li>
    
                </ul>
              </div>
              <div>
                <img className="rightship" src={rightship} alt="full cargo ship"/>
              </div>
            </div>

            <div className="flex flex-row">
              <div>
                <img
                  className="leftship"
                  src={leftship}
                  alt="empty cargo ship"
                />
              </div>
              <div>
                <p className="marine">
                  FLAT $<sub>1</sub>/MT COMMISION
                </p>
                <p className="smallRaleway">
                  only transparent transactions and incentives.
                </p>
                <ul>
                <li className="smallRoboto">
                    We broker our deals, we don't trade.
                  </li>
                  <li className="smallRoboto">
                    Some of the lowest fees in the industry (other middlemen take <b>10-30%</b> of the transaction value).
                  </li>
                  <li className="smallRoboto">
                    More money flows directly to project development and local communities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        )}
      </>
    );
}

export default FocusEngergiesLanding;