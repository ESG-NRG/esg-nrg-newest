import React from 'react'
import useScreenSize from "./useScreenSize";
import babysprout from '../images/babysprout.png'
import rightship from '../images/rightship.png'
import leftship from '../images/leftship.png'
import calculate from '../images/calculate.png'
import visualize from '../images/visualize.png'
import compensate from '../images/compensate.png'
import heropic from '../images/heropic.png'
import placeholderpic from '../images/placeholderpic.png'
import arrow from '../images/subscriptionArrow.png'



function LandingPage() {

  // const screenSize = useScreenSize();
  // const [isOpen, setOpen] = useState(false)
  return (
     <>
     {/* Ternary for screen optimization
    {screenSize === "xs" || screenSize === "sm" ? ()  : ()} */}

    

    <div>
      <img className='heroz' src={heropic} alt='hero pic'/>
      <div className='centered'>
        <p className='hero'>HELPING YOU OFFSET YOUR CHARTER'S <br/> CARBON FOOTPRINT</p> <br/>
        <p className='heroSmall'>Ships are responsible for 2-3% of the worlds CO<sub>2</sub> emissions. We need to avert emissions and pull CO<sub>2</sub> from the atmosphere.</p>
        <button className='button getStarted'>GET STARTED</button>
          
      </div>


      <p className='marine'>MARINE OFFSET PLATFORM</p> <br />
      <p className='secondLine'> Averting CO<sub>2</sub> emissions and pulling them out of the atmosphere in just <sub>3</sub> simple steps.</p><br />
      <div className='flex flex-row'>
        <div> <img className='calculateIcon' src={calculate} />
          CALCULATE
          <p className='smallRoboto'> Your ship's emissions across fuel types, with a purpose-built digital marine platform.</p>
        </div>

        <div> <img className='visualizeIcon' src={visualize} />
          VISUALIZE
         <p className='smallRoboto'>The different routes, vessels and cargoes your fleet carries and show your esg colors.</p>
        </div>

        <div> <img className='compensateIcon' src={compensate} />
          COMPENSATE
          <p className='smallRoboto'> Your impact on the environment with a letiety of verified carbon offset projects</p>
        </div>
      </div><br />
      
      
      <div className='flex flex-row my-10'>
        <div>
          <ul className='md:leading-normal list-outside'>
            <p className='marine'>REBUILD THE OCEAN + ENVIRONMENT</p> <br />
            <p className='secondLine'>The selection of the project It's 100% up to you!</p> <br />
              <li>
                Find offsets that are additional, traceable, verifiable, performing
                and contributing to sustainable development.
              </li>
              <br />
              <li>
                Filter and compare across different project types, standards,
                vintages, prices, proponents and country of origin.
              </li>
              <br />
              <li>
                Weight the pros/cons of each project with your esg advisor...
                <br />
                ...and if you cant find what you like, we'll hunt it for you!
              </li>
              <br />
          </ul>
            <button className='button' onClick>
              EXPLORE PROJECTS
            </button>
        </div>
        <div><img className='sprout' src={babysprout} alt='baby tree sprout' /></div>
      </div>
      
     
      <div className='my-10'>
          <div className='flex flex-row'>
            <div><p className='marine'>FOCUS YOUR ENERGIES <br/> TOWARDS YOUR CLIENT</p>
              <p className='secondLine'>turn your emissions into a source of positive energy.</p> <br/>
                <ul>
                  <li className='smallRoboto'>Align your projects with the ESG goals of your client.</li>
                  <li className='smallRoboto'>Display your ESG achievements.</li>
                </ul>
            </div>
            <div><img className='rightship' src={rightship} alt='full cargo ship' /></div>
          </div>
        
          <div className='flex flex-row'>
            <div><img className='leftship' src={leftship} alt='empty cargo ship' /></div>
            <div><p className='marine'>FLAT $<sub>1</sub>/MT COMMISION</p>
              <p  className='smallRaleway'>only transparent transactions and incentives.</p>
                <ul>
                  <li className='smallRoboto'>Some of the lowest fees in the industry.</li>
                  <li className='smallRoboto'>Other middlement take <b>10-30%</b> of the transaction value.</li>
                  <li className='smallRoboto'>More money flows directly to project development.</li>
                </ul>
            </div>
          </div>
      </div>

      <p className='marine'>OUR ASSETS</p>
      <p className='smallRaleway'>are people, experience and a little bit of code.</p>
      
      <div className='bigBossMans'>
        <div> <img className='teampic' src={placeholderpic} />
          CEO
        </div>
        <div> <img className='teampic' src={placeholderpic} />
          CTO
        </div>
        <div> <img className='teampic' src={placeholderpic} />
          CXO
        </div>
      </div>

      <div className='littleBossMans'>
          <div className='flex flex-wrap flex-row'>
            <img className='teampic' src={placeholderpic} /><br/><br/>
            <img className='teampic' src={placeholderpic} /> <br/><br/><br/><br/>WEB DEV
            
          </div><br/>

          
          <div className='flex flex-wrap flex-row'>
            <img className='teampic' src={placeholderpic} />
            <img className='teampic' src={placeholderpic} /> <br/><br/><br/><br/>UX/UI
          </div>
         
      </div>


      
      <p>Join our Newsletter to get the latest news on environmental sustainability.</p> 
        
  </div>

    
    </>
  )  
}

export default LandingPage;
