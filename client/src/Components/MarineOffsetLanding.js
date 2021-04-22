import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import calculate from "../images/calculate.png";
import visualize from "../images/visualize.png";
import compensate from "../images/compensate.png";


function MarineOffsetLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false)
    return (
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
        <div>
              <p className="marineM">MARINE <br/>OFFSET <br/>PLATFORM</p> <br />
            <p className="smallRobotoM">
              Averting CO<sub>2</sub> emissions and pulling them out of the
              atmosphere in just <sub>3</sub> simple steps.
            </p>
            <br />
            <div className="flex flex-col">
              <div>
                <img className="calculateIcon" src={calculate} />
                <p className="smallerTitles">CALCULATE</p>
                <p className="smallRoboto">
                  Your ship's emissions across fuel types, with a purpose-built
                  digital marine platform.
                </p>
              </div>

              <div>
                <img className="visualizeIcon" src={visualize} />
                <p className="smallerTitles"> VISUALIZE</p>
                <p className="smallRoboto">
                  The different routes, vessels and cargoes your fleet carries and
                  show your esg colors.
                </p>
              </div>

              <div>
                <img className="compensateIcon" src={compensate} />
                <p className="smallerTitles"> COMPENSATE</p>

                <p className="smallRoboto">
                  Your impact on the environment with a variety of verified carbon
                  offset projects
                </p>
              </div>
            </div>
            <br />
          </div>
        ) : (
          <div>
              <p className="marine">MARINE OFFSET PLATFORM</p> <br />
            <p className="secondLine">
              Averting CO<sub>2</sub> emissions and pulling them out of the
              atmosphere in just <sub>3</sub> simple steps.
            </p>
            <br />
            <div className="flex flex-row">
              <div>
                <img className="calculateIcon" src={calculate} />
                <p className="smallerTitles">CALCULATE</p>
                <p className="smallRoboto">
                  Your ship's emissions across fuel types, with a purpose-built
                  digital marine platform.
                </p>
              </div>

              <div>
                <img className="visualizeIcon" src={visualize} />
                <p className="smallerTitles"> VISUALIZE</p>
                <p className="smallRoboto">
                  The different routes, vessels and cargoes your fleet carries and
                  show your esg colors.
                </p>
              </div>

              <div>
                <img className="compensateIcon" src={compensate} />
                <p className="smallerTitles"> COMPENSATE</p>

                <p className="smallRoboto">
                  Your impact on the environment with a variety of verified carbon
                  offset projects
                </p>
              </div>
            </div>
            <br />
          </div>
        )}
      </>
    
    );
}

export default MarineOffsetLanding;