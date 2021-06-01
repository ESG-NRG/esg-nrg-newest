import React, { useState } from "react";
import useScreenSize from "./useScreenSize"
import rightship from "../images/rightship.png";
import leftship from "../images/leftship.png";
import focus from "../images/focusParagraph.png";
import flat from '../images/flatParagrah.png';
import arrow from "../images/subscriptionArrow.png";



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
            <div className='MOPsectionM'> 
              <div>
                <p className="marineM">
                  FOCUS YOUR ENERGY <br /> TOWARDS YOUR <br/>CLIENT
                </p><br/>
                <p className="smallRobotoM">
                  turn your emissions into a source of positive energy.
                </p>{" "}
                <br /><br/>
                <div>
                  <img className='focusParagraphM' src={focus} />
                </div>
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
              <div className='MOPsectionM'>
                <p className="marineM">
                  FLAT $<sub>1</sub>/MT COMMISION
                </p><br/>
                <p className="smallRobotoM">
                  only transparent transactions and incentives.
                </p><br/><br/>
                <div>
                  <img className='flatParagraphM' src={flat} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col place-items-center">
            
            <p className='smallRobotoM'>
              Join our weekly newsletter to hear the <br/>latest developments on sustainability in <br/>shipping.
            </p><br/>
            <div class='passwordContainer'>
              <input className='inputPW'  placeholder='' value='Your email here' />
              <img src={arrow} id="passwordView" />
            </div>
  
            </div>
            <br/><br/><br/>
        </div>
        ) : (
     
          <div>
            <div>
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
                <div>
                  <img className='focusParagraph' src={focus} />
                </div>
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
                <div>
                  <img className='flatParagraph' src={flat} />
                </div>
              </div>
              </div>
            </div>
          </div>
          <br/><br/><br/><br/>
          <div className="flex flex-col place-items-center">
            
            <p className='mdRoboto'>
              Join our weekly newsletter to hear the latest developments <br/> on sustainability in shipping.
            </p><br/>
            <div class='passwordContainer'>
              <input className='inputPW'  placeholder='' value='Your email here' />
              <img src={arrow} id="passwordView" />
            </div>
  
            </div>
            <br/><br/><br/>
        </div>
        )}
      </>
    );
}

export default FocusEngergiesLanding;