import React, { useState } from "react";
import useScreenSize from "./useScreenSize";
import footerLogo from "../images/footerLogo.png";
import Instagram from "../images/Instagram.png";
import Facebook from "../images/Facebook.png";
import Twitter from "../images/Twitter.png";
import LinkedIn from "../images/Linkedin.png";

function Footer() {
  //gradient
  const top = "#464646";
  const bottom = "#464646";
  //responsive layout
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {screenSize === "xs" || screenSize === "sm" ? (
        //mobile

        <div
          className="footerM"
          style={{
            background: `linear-gradient(to bottom,  ${top} 80%,${bottom} 100%)`,
          }}
        >
          <div className=" flex flex-col">
            <ul>
              <li className="smallRoboto">
                <a href="/">
                  <img
                    className="footerLogoTopM"
                    src={footerLogo}
                    alt="esg-nrg logo"
                  />
                </a>
              </li>
              <br />
              <li className="smallRoboto">
                <a href="/about-us">About</a>
              </li>
              <br />
              <li className="smallRoboto">
                <a href="/faq">FAQ</a>
              </li>
              <br />
              <li className="smallRoboto">
                <a href="/projects">Projects</a>
              </li>
              <br />
              <li className="smallRoboto">
                <a href="/our-impact">Our Impact</a>
              </li>
              <br />
              <li className="smallRoboto">
                <a href="/contact-us">Contact Us</a>
              </li>
              <br />
              <li className="smallRoboto">
                <a href="/legal">Legal</a>
              </li>
            </ul>
          </div>

          <hr style={{ margin: "75px" }}></hr>

          <div className="alignFooterM">
            <a href="/">
              <img
                className="footerLogoM"
                src={LinkedIn}
                alt="esg-nrg linkedin"
              />
            </a>
            <a href="/">
              <img
                className="footerLogoM"
                src={Twitter}
                alt="esg-nrg twitter"
              />
            </a>
            <a href="/">
              <img
                className="footerLogoM"
                src={Facebook}
                alt="esg-nrg facebook"
              />
            </a>
            <a href="/">
              <img
                className="footerLogoM"
                src={Instagram}
                alt="esg-nrg instagram"
              />
            </a>
          </div>
          <br />

          <div className="copyrightM">
            <em>&copy; ESG-NRG. 2021. Saving the earth one ton at a time!</em>
          </div>
        </div>
      ) : (
        <div className="illTryAnything"
          style={{
            background: `linear-gradient(to bottom,  ${top} 60%,${bottom} 100%)`
          }}
        >
          <div className="footer">
            <ul className="flex flex-row" style={{ listStyleType: "none" }}>
              <li className="smallRoboto">
                <a href="/about-us">About</a>
              </li>
              <li className="smallRoboto">
                <a href="/faq">FAQ</a>
              </li>
              <li className="smallRoboto">
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/">
                  <img
                    style={{ margin: "5%" }}
                    className="footerLogoTop"
                    src={footerLogo}
                    alt="esg-nrg logo"
                  />
                </a>
              </li>
              <li className="smallRoboto">
                <a href="/our-impact">Our Impact</a>
              </li>
              <li className="smallRoboto">
                <a href="/contact-us">Contact Us</a>
              </li>
              <li className="smallRoboto">
                <a href="/legal">Legal</a>
              </li>
            </ul>
          </div>

          <hr style={{ margin: "75px" }}></hr>
          <div className="alignFooter">
            <a href="/">
              <img
                className="footerLogo"
                src={LinkedIn}
                alt="esg-nrg linkedin"
              />
            </a>
            <a href="/">
              <img className="footerLogo" src={Twitter} alt="esg-nrg twitter" />
            </a>
            <a href="/">
              <img
                className="footerLogo"
                src={Facebook}
                alt="esg-nrg facebook"
              />
            </a>
            <a href="/">
              <img
                className="footerLogo"
                src={Instagram}
                alt="esg-nrg instagram"
              />
            </a>
          </div>
          <br />

          <div className="copyright">
            <em>&copy; ESG-NRG. 2021. Saving the earth one ton at a time!</em>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
