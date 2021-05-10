import React, {useState} from 'react';
import '../AboutUs.css'
import useScreenSize from "./useScreenSize";
import arthur from '../images/arthurpic.jpeg'
import greg from '../images/gregpic.jpg'
import janek from '../images/janekpic.png'
import steph from '../images/stephpic.png'


function AssetsProfiles(props) {
    const screenSize = useScreenSize();
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {screenSize === "xs" || screenSize === "sm" ? (
            <div>
                
            </div>
        ) : (
            <div><br/><br/>
               <div>
               <div>
                    <div className="flex flex-row">
                        <div>
                        <p>Janek Ekeli - CEO</p><br/>
                        <p>Janek started his journey in Oslo, Norway. He studied Shipping Management at BI Norwegian Business School and holds an MSc in International Maritime Business from Southampton Solent University. He has experience working for a market-leading Norwegian shipowner and until recently, was trading bunkers (marine fuel) for a Danish oil trading house in Dubai and New York.<br/>
                        Email: jekeli@esg-nrg.com<br/>
                        Phone: +47 9489 1870<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img src={janek} alt="Janek" />
                        </div>
                    </div>
               </div>

               <div>
                    <div className="flex flex-row">
                        <div>
                        <p>Arthur Pinault - CXO</p><br/>
                        <p>Arthur started his journey in the south of France. He studied Criminal Justice at Miami Dade College and is a User Experience/User Interface graduate of Ironhack’s Miami bootcamp. He has experience in UX/UI design from a high-tech radio guide system provider and until recently, one of the world’s top-3 largest cruise lines.<br/>
                        Email: apinault@esg-nrg.com<br/>
                        Phone: 305-988-2442<br/>
                        Linkedin<br/></p>    
                        </div>
                        <div>
                        <img src={arthur} alt="Arthur" />
                        </div>
                    </div>
               </div>

               <div>
                    <div className="flex flex-row">
                        <div>
                        <p>Dayan Evora - UX/UI Designer </p><br/>
                        <p>Dayan started his journey in Cuba. Background in Graphic Design and Photography. Associates of Arts Degree from Miami Dade College.<br/>
                        Email: jekeli@esg-nrg.com<br/>
                        Phone: +47 9489 1870<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img src={janek} alt="Janek" />
                        </div>
                    </div>
               </div>

               <div>
                    <div className="flex flex-row">
                        <div>
                        <p>Stephanie Mitchell - Web Developer</p><br/>
                        <p>Stephanie started her journey in...
                        Background in Customer Service. 
                        Studied Mechanical Engineering at Miami Dade College.<br/>
                        Email: jekeli@esg-nrg.com<br/>
                        Phone: +47 9489 1870<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img src={steph} alt="Stephanie" />
                        </div>
                    </div>
               </div>

               <div>
                    <div className="flex flex-row">
                        <div>
                        <p>Janek Ekeli - CEO</p><br/>
                        <p>Janek started his journey in Oslo, Norway. He studied Shipping Management at BI Norwegian Business School and holds an MSc in International Maritime Business from Southampton Solent University. He has experience working for a market-leading Norwegian shipowner and until recently, was trading bunkers (marine fuel) for a Danish oil trading house in Dubai and New York.<br/>
                        Email: jekeli@esg-nrg.com<br/>
                        Phone: +47 9489 1870<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img src={janek} alt="Janek" />
                        </div>
                    </div>
               </div>


               <div>
                    <div className="flex flex-row">
                        <div>
                        <p>Janek Ekeli - CEO</p><br/>
                        <p>Janek started his journey in Oslo, Norway. He studied Shipping Management at BI Norwegian Business School and holds an MSc in International Maritime Business from Southampton Solent University. He has experience working for a market-leading Norwegian shipowner and until recently, was trading bunkers (marine fuel) for a Danish oil trading house in Dubai and New York.<br/>
                        Email: jekeli@esg-nrg.com<br/>
                        Phone: +47 9489 1870<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img src={janek} alt="Janek" />
                        </div>
                    </div>
               </div>
               </div> 

               
            </div>
        )}
            
        </>
    );
}

export default AssetsProfiles;