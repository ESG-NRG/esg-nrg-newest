import React, {useState} from 'react';
import '../AboutUs.css'
import useScreenSize from "./useScreenSize";
import arthur from '../images/arthurpic.jpeg'
import greg from '../images/gregpic.jpg'
import janek from '../images/janekpic.png'
import steph from '../images/stephpic.png'
import dayan from '../images/dayanpic.jpeg'


function AssetsProfiles(props) {
    const screenSize = useScreenSize();
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {screenSize === "xs" || screenSize === "sm" ? (
            <div>
                
            </div>
        ) : (
            {/* <div><br/><br/>
               
               <div className='outerFrame'>
                    <div className="flex flex-row">
                        <div>
                        <p>Janek Ekeli - CEO</p><br/>
                        <p>Janek started his journey in Oslo, Norway. He studied Shipping Management at BI Norwegian Business School and holds an MSc in International Maritime Business from Southampton Solent University. He has experience working for a market-leading Norwegian shipowner and until recently, was trading bunkers (marine fuel) for a Danish oil trading house in Dubai and New York.<br/>
                        Email: jekeli@esg-nrg.com<br/>
                        Phone: +47 9489 1870<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img style={{width:'75%'}} className='janekPic' src={janek} alt="Janek" />
                        </div>
                    </div>
               </div>

               <div className='outerFrame'>
                    <div className="flex flex-row">
                        <div>
                        <p>Arthur Pinault - CXO</p><br/>
                        <p>Arthur started his journey in the south of France. He studied Criminal Justice at Miami Dade College and is a User Experience/User Interface graduate of Ironhack’s Miami bootcamp. He has experience in UX/UI design from a high-tech radio guide system provider and until recently, one of the world’s top-3 largest cruise lines.<br/>
                        Email: apinault@esg-nrg.com<br/>
                        Phone: 305-988-2442<br/>
                        Linkedin<br/></p>    
                        </div>
                        <div>
                        <img style={{width:'65%'}} className='arthurPic' src={arthur} alt="Arthur" />
                        </div>
                    </div>
               </div>

               <div className='outerFrame'>
                    <div className="flex flex-row">
                        <div>
                        <p>Jane Doe - CTO</p><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, curabitur eget feugiat tristique euismod. Donec cursus volutpat sed lacinia pulvinar. Felis, justo a, elit amet cras bibendum fermentum fusce. Pellentesque vel augue sit tincidunt.
                        <br/>
                        Email: johndoe@esg-nrg.com<br/>
                        Phone: 399 999 9999<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img style={{width:'55%'}} className='ctoPic' src={janek} alt="CTO" />
                        </div>
                    </div>
               </div>

               <div className='outerFrame'>
                    <div className="flex flex-row">
                        <div>
                        <p>Dayan Evora - UX/UI Designer </p><br/>
                        <p>Dayan started his journey in Cuba. Background in Graphic Design and Photography. Associates of Arts Degree from Miami Dade College.<br/>
                        Email: devora@esg-nrg.com<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img style={{width:'25%'}} className='dayanPic' src={dayan} alt="Dayan" />
                        </div>
                    </div>
               </div>

               <div className='outerFrame'>
                    <div className="flex flex-row">
                        <div>
                        <p>Raul Doejo - UX/UI Designer</p><br/>
                        <p>Raul started his journey in Venezuela. 
                        Background in IT Sales, Banking, and Marketing. Bachelor's Degree in Business & Marketing from San Ignacio University.
                        <br/>
                        Email: rdoejo@esg-nrg.com<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img style={{width:'45%'}} className='janekPic' src={janek} alt="Raul" />
                        </div>
                    </div>
               </div>


               <div className='outerFrame'>
                    <div className="flex flex-row">
                        <div>
                        <p>Stephanie Mitchell - Web Developer</p><br/>
                        <p>Stephanie started her journey in...
                        Background in Customer Service. 
                        Studied Mechanical Engineering at Miami Dade College.<br/>
                        Email: smitchell@esg-nrg.com,<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img style={{width:'40%'}} className='stephPic' src={steph} alt="Stephanie" />
                        </div>
                    </div>
               </div>

               <div className='outerFrame'>
                    <div className="flex flex-row">
                        <div>
                        <p>Greg King - Web Developer</p><br/>
                        <p>Greg started his journey in Central Pennsylvania. After a long and successful career in commercial flooring he turned a longtime hobby into a career in web development. He is a Full-Stack Web Development graduate of Ironhack’s Miami bootcamp. <br/>
                        Email: gking@esg-nrg.com<br/>
                        Linkedin</p><br/>     
                        </div>
                        <div>
                        <img style={{width:'40%'}} className='gregPic' src={greg} alt="Janek" />
                        </div>
                    </div>
               </div>
               

               
            </div> */}
        )}
            
        </>
    );
}

export default AssetsProfiles;