import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import useScreenSize from "./useScreenSize";
// import NavBar from "./NavBar"
import globe from '../images/aboutUsGlobal.png'
import hero from '../images/aboutUsHero.png'
import logo from '../images/aboutUsLogo.png'
import par1 from '../images/AboutUsParagraph1.png'
import par2 from '../images/AboutUsParagraph2.png'
import par3 from '../images/AboutUsParagraph3.png'
import par4 from '../images/AboutUsParagraph4.png'
import '../AboutUs.css'
import AssetsProfiles from './AssetsProfiles'


function AboutUs(props) {
    const screenSize = useScreenSize();
    const [isOpen, setOpen] = useState(false)
    // const [value, setValue] = useState(0)

    return (
        
        <>
        
        {screenSize === "xs" || screenSize === "sm" ? (
            <div>
                <div className="bg-local ">
                    <img src={hero} alt="hero pic" />
                </div>
                <div className='MOPsectionM'>
                    <p className="marineM">OUR MISSION</p> <br />
                    <p className="smallRalewayM">
                        Put a price on carbon and maximise shipping's positive impact on the planet.
                    </p><br />
                    <p className='smallRobotoMo'>The world desperately needs to reduce CO2 emissions to avert global warming. Paying for the hidden costs of fossil-fuel use such as pollution (including from extraction, refining and transportation) is the easiest way to phase out dirty fuels - and advance clean energy alternatives.   
                    <br /><br />

                    Maritime shipping is the lifeblood of global economic development. Commodities need to flow and products be manufactured for us to continue driving innovation and raising living standards across the world. Shipping is the most environmentally friendly mode of transportation - yet it still runs on some of the dirtiest fuel produced by humankind.  How can we begin to solve that paradox?
                    </p>
                    <br />
                </div>
                <div className='MOPsectionM'>
                    <p className="marineM">WHAT IS ESG-NRG?</p> <br />
                    <p className="smallRalewayM">
                    The energy created by making decisions above the bottom line. 
                    </p><br />
                    <p className="smallRobotoMo">
                        As society puts greater emphasis on ‘doing good’, we increasingly see people and companies being rewarded for the decisions they make that go above ‘pure-profit’. By factoring in the Environmental, Social and Governance (ESG) implications of their actions they show honesty, responsibility and respect for the common earth we inhabit together.  <br /><br />

                        The world is demanding positive action on climate, equality and development for less-advantaged communities. It doesn’t seem wrong that the emissions that are emitted globally are compensated for in some of the communities worst affected by climate change.  

                        All actions transfer a form of energy. Can you afford not to harness ESG-NRG?
                    </p>
                </div><br />
                        <div>
                            <img src={logo} className='midLogoM' alt='esg-nrg logo'/>
                        </div><br />
                <div className='MOPsectionM'>
                    <p className="marineM">OUR STORY</p> <br />
                    <p className="smallRalewayM">
                        A perfect storm in a rising ‘green’ tide.
                    </p><br />
                    <p className="smallRobotoMo">
                        We come from all over the world, and all walks of life, but we all believe in making choices above the bottom line. We were brought together by our common belief in doing good, and the realization that by combining our individual capabilities we could make a positive impact exponentially greater than by going at it alone.  <br /><br />

                        Together we created the Marine Offset Platform (MOP).   <br /><br />

                        The MOP is dedicated to the shipping community and it’s clients. We strive to make the purchasing and retiring of carbon offset credits the ‘upside’ - to fixing and burning bunkers (marine fuel). Together we help support real projects that generate tangible positive development across the globe. While at the same time putting a price on carbon, accelerating the transition towards a cleaner energy future for everyone.
                    </p>
                </div>

                <div className='MOPsectionM'>
                    <p className="marineM">OUR LOCATIONS</p> <br />
                    <p className="smallRalewayM">
                            Emissions know no borders.
                    </p><br />
                    <p className="smallRobotoMo">
                        But to be close to our clients, suppliers and stakeholders; you can find our head office located in Oslo, Norway and our representative office in the United States in Miami, FL.    
                    </p><br />
                    <p className='smallBlueM'>We like working together. Drop us a message if you would like to meet and tal-k sustainability and shipping - physically or remotely.</p>
                </div>
                <div>
                    <img src={globe} alt='global map' />
                </div>

                <div className='MOPsectionM'>
                    <p className="marineM">OUR ASSETS</p> <br />
                    <p className="smallRalewayM">
                        People, experience and a little bit of code.
                    </p>
                    {/* ALL PICTURES WITH TEXT */}
                </div>
            </div>
        ) : (
            <div>
                <div className="bg-local">
                    <img className='heroAboutUs' src={hero} alt="hero pic" />
                </div>
                <div className='MOPsection'>
                    <p className="marine">OUR MISSION</p> <br /><br />
                    <p className="smallRaleway">
                        Put a price on carbon and maximise shipping's positive impact on the <br />planet.
                    </p><br /><br />
                    <img className='paragraph1' src={par1} />
                    <br />
                </div>
                <div className='MOPsection'>
                    <p className="marine">WHAT IS ESG-NRG?</p> <br /><br />
                    <p className="smallRaleway">
                    The energy created by making decisions above the bottom line. 
                    </p><br /><br />
                    <div className="flex flex-row">
                        <div>
                            <br />
                            <div>
                            <img className='paragraph2' src={par2} />
                            </div> 
                            <br /><br />
                        </div>
                        <div><br /><br /><br />
                        <img src={logo} className='midLogo' alt='esg-nrg logo'/>
                        </div>
                    </div>
                </div><br />
                    
                <div className='MOPsection'>
                    <p className="marine">OUR STORY</p> <br /><br />
                    <p className="smallRaleway">
                        A perfect storm in a rising ‘green’ tide.
                    </p><br /><br />
                    <img className='paragraph3' src={par3} />
              
                </div>

                <div className='MOPsection'>
                    <p className="marine">OUR LOCATIONS</p> <br /><br />
                    <p className="smallRaleway">
                            Emissions know no borders.
                    </p><br /><br />
                    <img className='paragraph4'src={par4} />
                </div>
                <div>
                    <img className='globalmap' src={globe} alt='global map' />
                </div>

                <div className='MOPsection'>
                    <p className="marine">OUR ASSETS</p> <br /><br />
                    <p className="smallRaleway">
                        People, experience and a little bit of code.
                    </p>
                    {/* ALL PICTURES WITH TEXT */}
                    <AssetsProfiles />
                </div>
            </div>
        )}
        

       </>
    );
}

export default AboutUs;