import React, { useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import useScreenSize from "./useScreenSize";
import NavBar from "./NavBar";
import globe from "../images/aboutUsGlobal.png";
import hero from "../images/aboutUsHero.png";
import heroz from "../images/aboutusheroz.png";
import logo from "../images/aboutUsLogo.png";
import par1 from "../images/AboutUsParagraph1.png";
import par2 from "../images/AboutUsParagraph2.png";
import par3 from "../images/AboutUsParagraph3.png";
import par4 from "../images/AboutUsParagraph4.png";
import arthur from "../images/arthurpicC.jpg";
import greg from "../images/gregpicC.jpg";
import janek from "../images/janekpicC.png";
import steph from "../images/stephpicC.png";
import dayan from "../images/dayanpicC.jpg";
import "../AboutUs.css";
import Footer from './Footer'


function AboutUs(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);
  // const [value, setValue] = useState(0)

  return (
    <div className="aboutUsTotalHeight">
      <div>
        <NavBar />
      </div>
      <>
        {screenSize === "xs" || screenSize === "sm" ? (
          <div>
            <div className="bg-local ">
              <img src={hero} alt="hero pic" />
            </div>
            <div className="MOPsectionM">
              <p className="marineM">OUR MISSION</p> <br />
              <p className="smallRalewayM">
                Put a price on carbon and maximise shipping's positive impact on
                the planet.
              </p>
              <br />
              <p className="smallRobotoMo">
                The world desperately needs to reduce CO2 emissions to avert
                global warming. Paying for the hidden costs of fossil-fuel use
                such as pollution (including from extraction, refining and
                transportation) is the easiest way to phase out dirty fuels -
                and advance clean energy alternatives.
                <br />
                <br />
                Maritime shipping is the lifeblood of global economic
                development. Commodities need to flow and products be
                manufactured for us to continue driving innovation and raising
                living standards across the world. Shipping is the most
                environmentally friendly mode of transportation - yet it still
                runs on some of the dirtiest fuel produced by humankind. How can
                we begin to solve that paradox?
              </p>
              <br />
            </div>
            <div className="MOPsectionM">
              <p className="marineM">WHAT IS ESG-NRG?</p> <br />
              <p className="smallRalewayM">
                The energy created by making decisions above the bottom line.
              </p>
              <br />
              <p className="smallRobotoMo">
                As society puts greater emphasis on ‘doing good’, we
                increasingly see people and companies being rewarded for the
                decisions they make that go above ‘pure-profit’. By factoring in
                the Environmental, Social and Governance (ESG) implications of
                their actions they show honesty, responsibility and respect for
                the common earth we inhabit together. <br />
                <br />
                The world is demanding positive action on climate, equality and
                development for less-advantaged communities. It doesn’t seem
                wrong that the emissions that are emitted globally are
                compensated for in some of the communities worst affected by
                climate change. All actions transfer a form of energy. Can you
                afford not to harness ESG-NRG?
              </p>
            </div>
            <br />
            <div>
              <img src={logo} className="midLogoM" alt="esg-nrg logo" />
            </div>
            <br />
            <div className="MOPsectionM">
              <p className="marineM">OUR STORY</p> <br />
              <p className="smallRalewayM">
                A perfect storm in a rising ‘green’ tide.
              </p>
              <br />
              <p className="smallRobotoMo">
                We come from all over the world, and all walks of life, but we
                all believe in making choices above the bottom line. We were
                brought together by our common belief in doing good, and the
                realization that by combining our individual capabilities we
                could make a positive impact exponentially greater than by going
                at it alone. <br />
                <br />
                Together we created the Marine Offset Platform (MOP). <br />
                <br />
                The MOP is dedicated to the shipping community and it’s clients.
                We strive to make the purchasing and retiring of carbon offset
                credits the ‘upside’ - to fixing and burning bunkers (marine
                fuel). Together we help support real projects that generate
                tangible positive development across the globe. While at the
                same time putting a price on carbon, accelerating the transition
                towards a cleaner energy future for everyone.
              </p>
            </div>

            <div className="MOPsectionM">
              <p className="marineM">OUR LOCATIONS</p> <br />
              <p className="smallRalewayM">Emissions know no borders.</p>
              <br />
              <p className="smallRobotoMo">
                But to be close to our clients, suppliers and stakeholders; you
                can find our head office located in Oslo, Norway and our
                representative office in the United States in Miami, FL.
              </p>
              <br />
              <p className="smallBlueM">
                We like working together. Drop us a message if you would like to
                meet and tal-k sustainability and shipping - physically or
                remotely.
              </p>
            </div>
            <div>
              <img src={globe} alt="global map" />
            </div>

            <div className="MOPsectionM">
              <p className="marineM">OUR ASSETS</p> <br />
              <p className="smallRalewayM">
                People, experience and a little bit of code.
              </p>
              {/* ALL PICTURES WITH TEXT */}
              <Carousel itemWidth={230} plugins={["arrows"]}>
                <div className="outerFrameM carousel">
                  <img
                    // style={{ width: "100%" }}
                    className="picsM"
                    
                    src={janek}
                    alt="Janek"
                  />
                  <br />

                  <p className="titleM">Janek Ekeli - CEO</p>
                  <br />
                  <p className="aboutM">
                    Janek started his journey in Oslo, Norway. He studied
                    Shipping Management at BI Norwegian Business School and
                    holds an MSc in International Maritime Business from
                    Southampton Solent University. He has experience working for
                    a market-leading Norwegian shipowner and until recently, was
                    trading bunkers (marine fuel) for a Danish oil trading house
                    in Dubai and New York.
                    <br />
                    <br />
                    <br />
                    <b>
                      Email: jekeli@esg-nrg.com
                      <br />
                    </b>
                    <b>Phone: +47 9489 1870</b>
                    <br />
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/janek-ekeli-336953b3/"
                    >
                      Linkedin
                    </a>
                  </p>
                  <br />
                </div>
                <div className="outerFrameM carousel">
                  <img
                    // style={{ width: "100%" }}
                    className="picsM"
                    src={arthur}
                    alt="Arthur"
                  />
                  <br />

                  <p className="titleM">Arthur Pinault - CXO</p>
                  <br />
                  <p className="aboutM">
                    Arthur started his journey in the south of France. He
                    studied Criminal Justice at Miami Dade College and is a User
                    Experience/User Interface graduate of Ironhack’s Miami
                    bootcamp. He has experience in UX/UI design from a high-tech
                    radio guide system provider and until recently, one of the
                    world’s top-3 largest cruise lines.
                    <br />
                    <br />
                    <br />
                    <b>
                      Email: apinault@esg-nrg.com
                      <br />
                    </b>
                    <b>
                      Phone: 305-988-2442
                      <br />
                    </b>
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/apinault/"
                    >
                      Linkedin
                    </a>
                  </p>
                  <br />
                </div>
                <div className="outerFrameM carousel">
                  <img
                    // style={{ width: "100%" }}
                    className="picsM"
                    src={janek}
                    alt="Jane Doe"
                  />
                  <br />

                  <p className="titleM">Jane Doe - CTO</p>
                  <br />
                  <p className="aboutM">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                    curabitur eget feugiat tristique euismod. Donec cursus
                    volutpat sed lacinia pulvinar. Felis, justo a, elit amet
                    cras bibendum fermentum fusce. Pellentesque vel augue sit
                    tincidunt.
                    <br />
                    <br />
                    <br />
                    <b>
                      Email: johndoe@esg-nrg.com
                      <br />
                    </b>
                    <b>
                      Phone: 399 999 9999
                      <br />
                    </b>
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/stephanie--mitchell/"
                    >
                      Linkedin
                    </a>
                  </p>
                  <br />
                </div>
                <div  className="outerFrameM carousel">
                  <img id='dayan'
                    // style={{ width: "100%" }}
                    className="picsM"
                    src={dayan}
                    alt="Dayan"
                  />
                  <br />

                  <p className="titleM">Dayan Evora - UX/UI Designer</p>
                  <br />
                  <p className="aboutM">
                    Dayan started his journey in Cuba. Background in Graphic
                    Design and Photography. Associates of Arts Degree from Miami
                    Dade College.
                    <br />
                    <br />
                    <br />
                    <b>
                      Email: devora@esg-nrg.com
                      <br />
                    </b>
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/dayanevora/"
                    >
                      Linkedin
                    </a>
                  </p>
                  <br />
                </div>
                <div className="outerFrameM carousel">
                  <img
                    // style={{ width: "100%" }}
                    className="picsM"
                    src={janek}
                    Alt="Raul"
                  />
                  <br />

                  <p className="titleM">Raul Doejo - UX/UI Designer</p>
                  <br />
                  <p className="aboutM">
                    Raul started his journey in Venezuela. Background in IT
                    Sales, Banking, and Marketing. Bachelor's Degree in Business
                    & Marketing from San Ignacio University.
                    <br />
                    <br />
                    <br />
                    <b>
                      Email: rdoejo@esg-nrg.com
                      <br />
                    </b>
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/rauldoejod/"
                    >
                      Linkedin
                    </a>
                  </p>
                  <br />
                </div>
                <div className="outerFrameM carousel">
                  <img
                    // style={{ width: "100%" }}
                    className="picsM"
                    src={steph}
                    alt="Steph"
                  />
                  <br />

                  <p className="titleM">Stephanie Mitchell - Web Developer</p>
                  <br />
                  <p className="aboutM">
                    Stephanie started her journey in... Stephanie started her
                    journey in Miami. She studied Mechanical Engineering at
                    Miami Dade College and is a Full-Stack Web Development
                    graduate of Ironhack’s Miami Bootcamp. She comes from a
                    background in retail and customer service management.
                    <br />
                    <br />
                    <br />
                    <b>
                      Email: smitchell@esg-nrg.com,
                      <br />
                    </b>
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/stephanie--mitchell/"
                    >
                      Linkedin
                    </a>
                  </p>
                  <br />
                </div>
                <div className="outerFrameM carousel">
                  <img
                    // style={{ width: "100%" }}
                    className="picsM"
                    src={greg}
                    alt="Greg"
                  />
                  <br />

                  <p className="titleM">Greg King - Web Developer</p>
                  <br />
                  <p className="aboutM">
                    Greg started his journey in Central Pennsylvania. After a
                    long and successful career in commercial flooring he turned
                    a longtime hobby into a career in web development. He is a
                    Full-Stack Web Development graduate of Ironhack’s Miami
                    bootcamp. <br />
                    <br />
                    <br />
                    <b>
                      Email: gking@esg-nrg.com
                      <br />
                    </b>
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/gregorykingwd/"
                    >
                      Linkedin
                    </a>
                  </p>
                  <br />
                </div>
              </Carousel>
            </div>
          </div>
        ) : (
          <div className="aboutUsDesktopWrapperDiv">
            <div className="bg-local">
              <img className="heroAboutUs" src={heroz} alt="hero pic" />
            </div>
            <div className="MOPsection">
              <p className="marine">OUR MISSION</p> <br />
              <br />
              <p className="smallRaleway">
                Put a price on carbon and maximise shipping's positive impact on
                the <br />
                planet.
              </p>
              <br />
              <br />
              <img className="paragraph1" src={par1} alt="paragraph icon" />
              <br />
            </div>
            <div className="MOPsection">
              <p className="marine">WHAT IS ESG-NRG?</p> <br />
              <br />
              <p className="smallRaleway">
                The energy created by making decisions above the bottom line.
              </p>
              <br />
              <br />
              <div className="flex flex-row">
                <div>
                  <br />
                  <div>
                    <img className="paragraph2" src={par2} />
                  </div>
                  <br />
                  <br />
                </div>
                <div>
                  <br />
                  <br />
                  <br />
                  <img src={logo} className="midLogo" alt="esg-nrg logo" />
                </div>
              </div>
            </div>
            <br />

            <div className="MOPsection">
              <p className="marine">OUR STORY</p> <br />
              <br />
              <p className="smallRaleway">
                A perfect storm in a rising ‘green’ tide.
              </p>
              <br />
              <br />
              <img className="paragraph3" src={par3} />
            </div>

            <div className="MOPsection">
              <p className="marine">OUR LOCATIONS</p> <br />
              <br />
              <p className="smallRaleway">Emissions know no borders.</p>
              <br />
              <br />
              <img className="paragraph4" src={par4} />
            </div>
            <div>
              <img className="globalmap" src={globe} alt="global map" />
            </div>


            <div className="MOPsection">
              <p className="marine">OUR ASSETS</p> <br />
              <br />
              <p className="smallRaleway">
                People, experience and a little bit of code.
              </p>
              
              <div>
                <div className="outerFrameAbout">
                  <div className="innerContent">
                    <p className='teamTitle'><b>Janek Ekeli - CEO</b></p>
                    <br />
                    <p className='teamCaption'>
                      Janek started his journey in Oslo, Norway. He studied
                      Shipping Management at BI Norwegian Business School and
                      holds an MSc in International Maritime Business from
                      Southampton Solent University. He has experience working
                      for a market-leading Norwegian shipowner and until
                      recently, was trading bunkers (marine fuel) for a Danish
                      oil trading house in Dubai and New York.
                      <br />
                    <br />
                    <br /><br /><br /><br /><br /><br />
                    <b>
                    Email:</b> jekeli@esg-nrg.com
                      <br />
                   
                    <b>Phone:</b> +47 9489 1870
                    <br />
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/janek-ekeli-336953b3/"
                    >
                      Linkedin
                    </a>
                    </p>
                    <br />
                  </div>
                  <div className="aboutPic">
                    <img className='teamPics' src={janek} alt="Janek" />
                  </div>
                </div>
              </div>
              <div>
                <div className="outerFrameAbout">
                  <div className="innerContent">
                    <p className='teamTitle'><b>Arthur Pinault - CXO</b></p>
                    <br />
                    <p className='teamCaption'>
                      Arthur started his journey in the south of France. He
                      studied Criminal Justice at Miami Dade College and is a
                      User Experience/User Interface graduate of Ironhack’s
                      Miami bootcamp. He has experience in UX/UI design from a
                      high-tech radio guide system provider and until recently,
                      one of the world’s top-3 largest cruise lines.
                      <br />
                    <br />
                    <br /><br /><br /><br /><br /><br />
                    <b>
                    Email:</b> apinault@esg-nrg.com
                      <br />
                   
                    <b>
                      Phone:</b> 305-988-2442
                      <br />
                    
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/apinault/"
                    >
                      Linkedin
                    </a>
                    </p>
                  </div>
                  <div className="aboutPic">
                    <img className='teamPics' src={arthur} alt="Arthur" />
                  </div>
                </div>
              </div>
              <div>
                <div className="outerFrameAbout">
                  <div className="innerContent">
                    <p className='teamTitle'><b>Jane Doe - CTO</b></p>
                    <br />
                    <p className='teamCaption'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      A, curabitur eget feugiat tristique euismod. Donec cursus
                      volutpat sed lacinia pulvinar. Felis, justo a, elit amet
                      cras bibendum fermentum fusce. Pellentesque vel augue sit
                      tincidunt.
                      <br />
                    <br />
                    <br /><br /><br /><br /><br /><br />
                    <b>
                    Email:</b> jekeli@esg-nrg.com
                      <br />
                   
                    <b>Phone:</b> +47 9489 1870
                    <br />
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/janek-ekeli-336953b3/"
                    >
                      Linkedin
                    </a>
                    </p>
                    <br />
                  </div>
                  <div className="aboutPic">
                    <img className='teamPics' src={janek} alt="CTO" />
                  </div>
                </div>
              </div>
              <div>
                <div className="outerFrameAbout">
                  <div className="innerContent">
                    <p className='teamTitle'><b>Dayan Evora - UX/UI Designer</b></p>
                    <br />
                    <p className='teamCaption'>
                      Dayan started his journey in Cuba. Background in Graphic
                      Design and Photography. Associates of Arts Degree from
                      Miami Dade College.
                      <br />
                    <br />
                    <br /><br /><br /><br /><br /><br />
                    <b>
                    Email:</b> devora@esg-nrg.com
                      <br />
                    
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/dayanevora/"
                    >
                      Linkedin
                    </a>
                    </p>
                    <br />
                  </div>
                  <div className="aboutPic">
                    <img className='teamPics' src={dayan} alt="Dayan" />
                  </div>
                </div>
              </div>
              <div>
                <div className="outerFrameAbout">
                  <div className="innerContent">
                    <p className='teamTitle'><b>Raul Doejo - UX/UI Designer</b></p>
                    <br />
                    <p className='teamCaption'>
                      Raul started his journey in Venezuela. Background in IT
                      Sales, Banking, and Marketing. Bachelor's Degree in
                      Business & Marketing from San Ignacio University.
                      <br />
                    <br />
                    <br /><br /><br /><br /><br /><br />
                    <b>
                    Email:</b> rdoejo@esg-nrg.com
                      <br />
                    
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/rauldoejod/"
                    >
                      Linkedin
                    </a>
                    </p>
                    <br />
                  </div>
                  <div className="aboutPic">
                    <img className='teamPics' src={janek} alt="Raul" />
                  </div>
                </div>
              </div>
              <div>
                <div className="outerFrameAbout">
                  <div className="innerContent">
                    <p className='teamTitle'><b>Stephanie Mitchell - Web Developer</b></p>
                    <br />
                    <p className='teamCaption'>
                      Stephanie started her journey in... Stephanie started her
                      journey in Miami. She studied Mechanical Engineering at
                      Miami Dade College and is a Full-Stack Web Development
                      graduate of Ironhack’s Miami Bootcamp. She comes from a
                      background in retail and customer service management.
                      <br />
                    <br />
                    <br /><br /><br /><br /><br /><br />
                    <b>
                    Email:</b> smitchell@esg-nrg.com,
                      <br />
                  
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/stephanie--mitchell/"
                    >
                      Linkedin
                    </a>
                    </p>
                    <br />
                  </div>
                  <div className="aboutPic">
                    <img className='teamPics' src={steph} alt="Stephanie" />
                  </div>
                </div>
              </div>
              <div>
                <div className="outerFrameAbout"> 
                  <div className="innerContent">
                    <p className='teamTitle'><b>Greg King - Web Developer</b></p>
                    <br />
                    <p className='teamCaption'>
                      Greg started his journey in Central Pennsylvania. After a
                      long and successful career in commercial flooring he
                      turned a longtime hobby into a career in web development.
                      He is a Full-Stack Web Development graduate of Ironhack’s
                      Miami bootcamp. 
                      <br />
                      <br />
                    <br /><br /><br /><br /><br /><br /><br />
                    <b>
                      Email:</b> gking@esg-nrg.com
                      <br />
                    
                    <a
                      style={{ color: "blue", textDecoration: "underline" }}
                      href="https://www.linkedin.com/in/gregorykingwd/"
                    >
                      Linkedin
                    </a>
                    </p>
                    <br />
                  </div>
                  <div className="aboutPic">
                    <img className='teamPics' src={greg} alt="Greg" />
                  </div>
                  
                </div> 
              </div>
            </div>
            
          </div>
          
        )}
        {/* <Footer /> */}
      </>
      {/* <Footer />
      <Footer /> */}
    </div>
    
  );
}

export default AboutUs;
