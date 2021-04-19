import React from 'react'
import babysprout from '../images/babysprout.png'
import rightship from '../images/rightship.png'
import leftship from '../images/leftship.png'


function LandingPage() {
  return (
    <div>
      <p className='marine'>MARINE OFFSET PLATFORM</p> <br />
      <p> Averting CO<sub>2</sub> emissions and pulling them out of the atmosphere in just <sub>3</sub> simple steps.</p><br />
      <div className='flex flex-row'>
        <div> CALCULATE
          <p> Your ship's emissions across fuel types, with a purpose-built digital marine platform.</p>
        </div>

        <div>VISUALIZE
         <p>The different routes, vessels and cargoes your fleet carries and show your esg colors.</p>
        </div>

        <div>COMPENSATE
          <p> Your impact on the environment with a variety of verified carbon offset projects</p>
        </div>
      </div><br />
      
      <p className='marine'>REBUILD THE OCEAN + ENVIRONMENT</p> <br />
      <p>The selection of the project It's 100% up to you!</p> <br />
      <div className='flex flex-row'>
        <ul className='md:leading-normal list-inside'>
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
      </div>
      <div><img className='sprout' src={babysprout} alt='baby tree sprout' /></div>
      <button className='button' onClick>
        EXPLORE PROJECTS
      </button>


      <div className='flex flex-row'>
        <div><p className='marine'>FOCUS YOUR ENERGIES <br/> TOWARDS YOUR CLIENT</p>
      <p>turn your emissions into a source of positive energy.</p> <br/>
      <ul>
          <li>Align your projects with the ESG goals of your client.</li>
          <li>Display your ESG achievements.</li>
      </ul></div>
      <div><img className='rightship' src={rightship} alt='full cargo ship' /></div>
      </div>
     
      <div className='flex flex-row'>
      <div><img className='leftship' src={leftship} alt='empty cargo ship' /></div>
      <div><p className='marine'>FLAT $<sub>1</sub>/MT COMMISION</p>
      <p>only transparent transactions and incentives.</p>
      <ul>
          <li>Some of the lowest fees in the industry.</li>
          <li>Other middlement take <b>10-30%</b> of the transaction value.</li>
          <li>More money flows directly to project development.</li>
      </ul></div>
      </div>
    </div>
  );
}

export default LandingPage;