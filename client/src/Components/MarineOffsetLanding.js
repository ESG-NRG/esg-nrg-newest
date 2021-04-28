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
          <div className='MOPsectionM'>
          <p className="marineM">MARINE OFFSET <br/>PLATFORM (MOP)</p> <br />
            <p className="smallRobotoM">
            designed by shipping professionals for the maritime transportation industry.
            </p>
            <br />
            <div className="flex flex-col">
              <div>
                <img className="calculateIcon" src={calculate} /><br />
                <p className="smallerTitles">CALCULATE</p>
                <p className="smallRobotoM2">
                Your ship emissions across different fuel types <br/>(fuel oils, distillates, bio-fuels, LNG, ammonia, <br/>methanol)
                </p>
              </div><br /><br />
              <div>
                <img className="visualizeIcon" src={visualize} /><br />
                <p className="smallerTitles"> VISUALIZE</p>
                <p className="smallRobotoM2">
                  The different voyages, vessels and cargoes your <br/>fleet carry and show your true ESG colors.
                </p>
              </div><br /><br />

              <div>
                <img className="compensateIcon" src={compensate} /><br />
                <p className="smallerTitles"> COMPENSATE</p>

                <p className="smallRobotoM2">
                  Your impact on the environment with a variety of <br/>verified carbon offset projects.
                </p>
              </div>
            </div>
            <br /><br />
          </div>
              
          </div>
        ) : (
          <div>
          <div className='MOPsection'>
              <p className="marine">MARINE OFFSET PLATFORM (MOP)</p> <br />
            <p className="smallRaleway">
              designed by shipping professionals for the maritime transportation industry.
            </p>
            <br /> <br /><br /> <br />
            <div class='MOP'>
              <div>
                <img className="calculateIcon" src={calculate} /><br />
                <p className="smallerTitles">CALCULATE</p><br />
                <p className="smallRoboto">
                Your ship emissions across <br/> different fuel types (fuel oils, <br/> distillates, bio-fuels, LNG,<br/> ammonia, methanol)
                </p>
              </div>

              <div>
                <img className="visualizeIcon" src={visualize} /><br />
                <p className="smallerTitles"> VISUALIZE</p><br />
                <p className="smallRoboto">
                The different voyages, vessels <br/>and cargoes your fleet carry and <br/>show your true ESG colors.
                </p>
              </div>

              <div>
                <img className="compensateIcon" src={compensate} /><br />
                <p className="smallerTitles"> COMPENSATE</p><br />

                <p className="smallRoboto">
                  Your impact on the environment <br/> with a variety of verified carbon <br/>offset projects
                </p>
              </div>
            </div>
            <br />
            </div>
          </div>
        )}
      </>
    
    );
}

export default MarineOffsetLanding;