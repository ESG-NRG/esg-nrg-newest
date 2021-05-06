import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import useScreenSize from "./useScreenSize";
import global from '../images/aboutUsGlobal.png'
import hero from '../images/aboutUsHero.png'
import logo from '../images/aboutUsLogo.png'

function AboutUs(props) {
    const screenSize = useScreenSize();
    const [isOpen, setOpen] = useState(false)
    // const [value, setValue] = useState(0)

    return (
        <>
        {screenSize === "xs" || screenSize === "sm" ? (
            <div>
                MOBILE
                <div className="bg-local ">
                    <img src={hero} alt="hero pic" />
                </div>
                <div className='MOPsectionM'>
                <p className="marineM">OUR MISSION</p> <br />
                <p className="smallRobotoM">
                    Put a price on carbon and maximise shipping's positive impact on the planet.
                </p>
            <br />
            </div>
            </div>
        ) : (
            <div>
            DESKTOP
            </div>
        )}
        

       </>
    );
}

export default AboutUs;