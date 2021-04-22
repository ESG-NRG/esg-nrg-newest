import React, { useState } from "react";
import useScreenSize from "./useScreenSize"

import rightship from "../images/rightship.png";
import leftship from "../images/leftship.png";


function FocusEngergiesLanding(props) {
    return (
        <div>
            <div className="my-10">
            <div className="flex flex-row">
              <div>
                <p className="marine">
                  FOCUS YOUR ENERGIES <br /> TOWARDS YOUR CLIENT
                </p>
                <p className="secondLine">
                  turn your emissions into a source of positive energy.
                </p>{" "}
                <br />
                <ul>
                  <li className="smallRoboto">
                    Align your projects with the ESG goals of your client.
                  </li>
                  <li className="smallRoboto">
                    Display your ESG achievements.
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
                    Some of the lowest fees in the industry.
                  </li>
                  <li className="smallRoboto">
                    Other middlement take <b>10-30%</b> of the transaction
                    value.
                  </li>
                  <li className="smallRoboto">
                    More money flows directly to project development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
}

export default FocusEngergiesLanding;