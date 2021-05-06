import React, { useState } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import placeholderpic from "../images/placeholderpic.png";
import arrow from "../images/subscriptionArrow.png";
import useScreenSize from "./useScreenSize";

function AssetsLanding(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false)
    const [value, setValue] = useState(0);
  
    return (
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
          <div className='MOPsectionM'>
            <p className="marineM">OUR ASSETS</p> <br/>
            <p className="smallRobotoM">
            people, experience and a little bit of code.
            </p><br/><br/>
          
          
            <Carousel plugins={['arrows']}>
              <img className='carousel' src={placeholderpic} />
              <img className='carousel' src={placeholderpic} />
              <img className='carousel' src={placeholderpic} />
              <img className='carousel' src={placeholderpic} />
              <img className='carousel' src={placeholderpic} />
              <img className='carousel' src={placeholderpic} />
              <img className='carousel' src={placeholderpic} />
            </Carousel>
            {/* <CarouselDots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} /> */}
        
        
            <br/><br/> <br/><br/> <br/><br/>
            <div className="flex flex-col place-items-center">
              
              <p className='smallRobotoM'>
                Join our weekly newsletter to hear<br/> the latest developments on<br/> sustainability in shipping.
              </p><br/>
                <div class='passwordContainer'>
                  <input className='inputPW'  placeholder='' value='Your email here' />
                  <img src={arrow} id="passwordView" />
                </div>
            </div>
          </div>
        ) : (
          <div className='MOPsection2'>
            <p className="marine">OUR ASSETS</p> <br/>
          <p className="smallRaleway">
            people, experience and a little bit of code.
          </p><br/><br/><br/><br/>
          <div className="bigBossMans">
            <div>
      
              <img className="teampic" src={placeholderpic} />
              CEO
            </div>
            <div>
       
              <img className="teampic" src={placeholderpic} />
              CTO
            </div>
            <div>
    
              <img className="teampic" src={placeholderpic} />
              CXO
            </div>
          </div>
          <div className="littleBossMans">
            <div className="flex flex-wrap flex-row">
              <img className="teampic" src={placeholderpic} />
              <br />
              <br />
              <img className="teampic" src={placeholderpic} /> <br />
              <br />
              <br />
              <br />
              WEB DEV
            </div>
            <br />

            <div className="flex flex-wrap flex-row">
              <img className="teampic" src={placeholderpic} />    
              <img className="teampic" src={placeholderpic} /> <br />
              <br />
              <br />
              <br />
              UX/UI
            </div>
          </div><br/><br/><br/><br/><br/>
          <div className="flex flex-col place-items-center">
            
          <p className='mdRoboto'>
            Join our weekly newsletter to hear the latest developments <br/> on sustainability in shipping.
          </p><br/>
          <div class='passwordContainer'>
            <input className='inputPW'  placeholder='' value='Your email here' />
            <img src={arrow} id="passwordView" />
          </div>

          </div>
        </div>
        )}
        
      </>
    );
}

export default AssetsLanding;