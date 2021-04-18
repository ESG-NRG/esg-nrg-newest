import React from 'react';
import babysprout from '../images/babysprout.png'

function LandingPage() {
    return (
        <div>
            <p className='marine'>MARINE OFFSET PLATFORM</p> <br/>
            <p>Averting CO<sub>2</sub> emissions and pulling them out of the atmospher in just <sub>3</sub> simple steps. </p> <br/>
            <div className= "flex flex-row">   
            <div> CALCULATE
            <p>Your ship's emissions across fuel types, with a purpose-built digital marine platform.</p></div>

            <div>VISUALIZE
            <p>The different routes, vessels and cargoes your fleet carries and show your esg colors.</p></div>

            <div>COMPENSATE
            <p>Your impact on the environment with a variety of verified carbon offset projects</p></div></div> <br/>

            <p className= 'marine'>REBUILD THE OCEAN + ENVIRONMENT</p> <br/>
            <p>The selection of the project It's 100% up to you!</p> <br/>

           <div className= 'flex flex-row'>
           <ul className='md:leading-normal list-inside'>
                <li>Find offsets that are additional, traceable, verifiable, performing and contributing to sustainable development.</li><br/> 
                <li>Filter and compare across different project types, standards, vintages, prices, proponents and country of origin.</li><br/> 
                <li>Weight the pros/cons of each project with your esg advisor...<br/>...and if you cant find what you like, we'll hunt it for you!</li><br/> 
                
            </ul>
            
           <img className='sprout' src={babysprout} alt='baby tree sprout' />
           </div>
           <button className='button' onClick >EXPLORE PROJECTS</button>
        </div>
    );
}

export default LandingPage;