import React, {useState} from 'react';
import useScreenSize from "./useScreenSize"
import footerLogo from '../images/footerLogo.png'
import Instagram from '../images/Instagram.png'
import Facebook from '../images/Facebook.png'
import Twitter from '../images/Twitter.png'
import LinkedIn from '../images/Linkedin.png'


function Footer() {
    //gradient
    const top = '#464646'
    const bottom = '#464646'
    //responsive layout
    const screenSize = useScreenSize();
    const [isOpen, setOpen] = useState(false)
    
    return (
        <>
            {screenSize === "xs" || screenSize === "sm" ? (
                //mobile
        <div style={{background:`linear-gradient(to bottom,  ${top} 80%,${bottom} 100%)`}}>
            <ul style={{lineHeight:'26px', textAlign:'left', verticalAlign:'top'}}>
                <li className='smallRoboto'><a href="/">LOGO</a></li>
                <li className='smallRoboto'><a href="/about-us">About</a></li>
                <li className='smallRoboto'><a href="/faq">FAQ</a></li>
                <li className='smallRoboto'><a href="/projects">Projects</a></li>
                <li className='smallRoboto'><a href="/our-impact">Our Impact</a></li>
                <li className='smallRoboto'><a href="/contact-us">Contact Us</a></li>
                <li className='smallRoboto'><a href="/legal">Legal</a></li>
            </ul>
        </div>
                   
                ) : (
                <div className='footer' style={{background:`linear-gradient(to bottom,  ${top} 80%,${bottom} 100%)`}}>
                        <ul className='py-4 flex space-x-10'>
                            <li className='smallRoboto'><a href="/about-us">About</a></li>
                            <li className='smallRoboto'><a href="/faq">FAQ</a></li>
                            <li className='smallRoboto'><a href="/projects">Projects</a></li>
                            <li><a href='/'><img className='footerLogoTop' src={footerLogo} alt='esg-nrg logo' /></a></li>
                            <li className='smallRoboto'><a href="/our-impact">Our Impact</a></li>
                            <li className='smallRoboto'><a href="/contact-us">Contact Us</a></li>
                            <li className='smallRoboto'><a href="/legal">Legal</a></li>
                        </ul>
                                
                                <hr style={{margin: '55px'}}></hr>
                            <div className='alignFooter'>
                                <a href='/'><img className='footerLogo' src={LinkedIn} alt='esg-nrg linkedin' /></a>
                                <a href='/'><img className='footerLogo' src={Twitter} alt='esg-nrg twitter' /></a>
                                <a href='/'><img className='footerLogo' src={Facebook} alt='esg-nrg facebook' /></a>
                                <a href='/'><img className='footerLogo' src={Instagram} alt='esg-nrg instagram' /></a>
                            </div>
                            
                            <div className='copyright'><em>&copy; ESG-NRG. 2021. Saving the earth one ton at a time!</em></div>
                </div>
                )}
                
        </>
    );
}

export default Footer;