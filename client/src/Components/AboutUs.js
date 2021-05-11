import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import useScreenSize from "./useScreenSize";
import NavBar from "./NavBar"
import globe from '../images/aboutUsGlobal.png'
import hero from '../images/aboutUsHero.png'
import logo from '../images/aboutUsLogo.png'
import par1 from '../images/AboutUsParagraph1.png'
import par2 from '../images/AboutUsParagraph2.png'
import par3 from '../images/AboutUsParagraph3.png'
import par4 from '../images/AboutUsParagraph4.png'
import arthur from '../images/arthurpic.jpeg'
import greg from '../images/gregpic.jpg'
import janek from '../images/janekpic.png'
import steph from '../images/stephpic.png'
import dayan from '../images/dayanpic.jpeg'
import '../AboutUs.css'
// import AssetsProfiles from './AssetsProfiles'


function AboutUs(props) {
    const screenSize = useScreenSize();
    const [isOpen, setOpen] = useState(false)
    // const [value, setValue] = useState(0)

    return (
        <div>
        <div>
            <NavBar/>
        </div>
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
                  
               
                        <div className='outerFrame'>
                            <div className="flex flex-row">
                                    <div style={{margin:'auto'}}>
                                        <p>Janek Ekeli - CEO</p><br/>
                                        <p>Janek started his journey in Oslo, Norway. He studied Shipping Management at BI Norwegian Business School and holds an MSc in International Maritime Business from Southampton Solent University. He has experience working for a market-leading Norwegian shipowner and until recently, was trading bunkers (marine fuel) for a Danish oil trading house in Dubai and New York.<br/>
                                        Email: jekeli@esg-nrg.com<br/>
                                        Phone: +47 9489 1870<br/>
                                        Linkedin</p><br/>     
                                    </div>
                                    <div>
                                        <img style={{width:'75%', margin:'auto'}} className='janekPic' src={janek} alt="Janek" />
                                    </div>
                            </div>
                        </div>

                            <div className='outerFrame'>
                                    <div className="flex flex-row">
                                        <div style={{margin:'auto'}}>
                                            <p>Arthur Pinault - CXO</p><br/>
                                            <p>Arthur started his journey in the south of France. He studied Criminal Justice at Miami Dade College and is a User Experience/User Interface graduate of Ironhack’s Miami bootcamp. He has experience in UX/UI design from a high-tech radio guide system provider and until recently, one of the world’s top-3 largest cruise lines.<br/>
                                            Email: apinault@esg-nrg.com<br/>
                                            Phone: 305-988-2442<br/>
                                            Linkedin<br/></p>    
                                        </div>
                                        <div>
                                            <img style={{width:'65%', margin:'auto'}} className='arthurPic' src={arthur} alt="Arthur" />
                                        </div>
                                    </div>
                            </div>

                            <div className='outerFrame'>
                                    <div className="flex flex-row">
                                        <div style={{margin:'auto'}}>
                                            <p>Jane Doe - CTO</p><br/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, curabitur eget feugiat tristique euismod. Donec cursus volutpat sed lacinia pulvinar. Felis, justo a, elit amet cras bibendum fermentum fusce. Pellentesque vel augue sit tincidunt.
                                            <br/>
                                            Email: johndoe@esg-nrg.com<br/>
                                            Phone: 399 999 9999<br/>
                                            Linkedin</p><br/>     
                                        </div>
                                        <div>
                                            <img style={{width:'55%', margin:'auto'}} className='ctoPic' src={janek} alt="CTO" />
                                        </div>
                                    </div>
                            </div>

                            <div className='outerFrame'>
                                    <div className="flex flex-row">
                                        <div style={{margin:'auto'}}>
                                            <p>Dayan Evora - UX/UI Designer </p><br/>
                                            <p>Dayan started his journey in Cuba. Background in Graphic Design and Photography. Associates of Arts Degree from Miami Dade College.<br/>
                                            Email: devora@esg-nrg.com<br/>
                                            Linkedin</p><br/>     
                                        </div>
                                        <div>
                                            <img style={{width:'25%', margin:'auto'}} className='dayanPic' src={dayan} alt="Dayan" />
                                        </div>
                                    </div>
                            </div>

                            <div className='outerFrame'>
                                    <div className="flex flex-row">
                                        <div style={{margin:'auto'}}>
                                            <p>Raul Doejo - UX/UI Designer</p><br/>
                                            <p>Raul started his journey in Venezuela. 
                                            Background in IT Sales, Banking, and Marketing. Bachelor's Degree in Business & Marketing from San Ignacio University.
                                            <br/>
                                            Email: rdoejo@esg-nrg.com<br/>
                                            Linkedin</p><br/>     
                                        </div>
                                        <div>
                                            <img style={{width:'45%', margin:'auto'}} className='janekPic' src={janek} alt="Raul" />
                                        </div>
                                    </div>
                            </div>


                            <div className='outerFrame'>
                                    <div className="flex flex-row">
                                        <div style={{margin:'auto'}}>
                                            <p>Stephanie Mitchell - Web Developer</p><br/>
                                            <p>Stephanie started her journey in...
                                            Stephanie started her journey in Miami. She studied Mechanical Engineering at Miami Dade College and is a Full-Stack Web Development graduate of Ironhack’s Miami Bootcamp. She comes from a background in retail and customer service management.<br/>
                                            Email: smitchell@esg-nrg.com,<br/>
                                            Linkedin</p><br/>     
                                        </div>
                                        <div>
                                            <img style={{width:'60%', margin:'auto'}} className='stephPic' src={steph} alt="Stephanie" />
                                        </div>
                                    </div>
                            </div>

                            <div className='outerFrame'>
                                    <div className="flex flex-row">
                                        <div style={{margin:'auto'}}>
                                            <p>Greg King - Web Developer</p><br/>
                                            <p>Greg started his journey in Central Pennsylvania. After a long and successful career in commercial flooring he turned a longtime hobby into a career in web development. He is a Full-Stack Web Development graduate of Ironhack’s Miami bootcamp. <br/>
                                            Email: gking@esg-nrg.com<br/>
                                            Linkedin</p><br/>     
                                        </div>
                                        <div>
                                            <img style={{width:'40%', margin:'auto'}} className='gregPic' src={greg} alt="Greg" />
                                        </div>
                                    </div>
                            </div>
                    
                </div>
            </div>
        )}
        
       
       </>
       </div>
    );
}

export default AboutUs;