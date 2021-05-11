import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useScreenSize from "./useScreenSize";
import actions from "../api/index";
import TheContext from "../TheContext";
import loginPic from "../images/loginPic.png";
import largeEicon from "../images/largeEicon.svg";
import xIcon from "../images/xIcon.png";
import pwView from "../images/IconArtwork.png";
import Login from "./Login";
import "../signUpIn.css";
import { backgroundColor } from "tailwindcss/defaultTheme";

export default function Signup() {
  const { history, user, setUser } = useContext(TheContext);
  const [viewPassword0, setViewPassword0] = useState(false);
  const [viewPassword1, setViewPassword1] = useState(false);


  const togglePasswordVisibility0 = () => {
    setViewPassword0(viewPassword0 ? false : true)
  };

  const togglePasswordVisibility1 = () => {
    setViewPassword1(viewPassword1 ? false : true)
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const screenSize = useScreenSize();
  let phone = false;
  screenSize === "xs" || screenSize === "sm" ? (phone = true) : (phone = false);

  const signupUser = (e) => {
    e.preventDefault();
    actions
      .signUp(userData)
      .then((user) => {
        setUser({ ...user?.data });
        history.push("/profile");
      })
      .catch((error) => {
        const { data } = error.response;
        console.log(error.response);
        console.log(data.message);
      });
  };

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <section class={phone ? "nothing" : "flex flex-row ..."}>
        {screenSize !== "xs" && screenSize !== "sm" ? (
          <div class="relative z-0 justify-items-center ...">
            <img src={loginPic} alt="Tanker on Water" width="317"></img>
            <img
              class="largeE"
              src={largeEicon}
              alt="Large E Icon Logo"
              width="58.8"
            ></img>
            <p class="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              turpis neque, volutpat ac.
            </p>
          </div>
        ) : (
          <div>
            {/* <img
              class="largeEMobile"
              src={largeEicon}
              alt="Large E Icon Logo"
              width="58.8"
            ></img> */}
          </div>
        )}

        <div class={phone ? "rightDivMobile" : "rightDiv"}>
          <div>
            {" "}
            {phone ? (
              <div>
                <img
                  class="largeEMobile"
                  src={largeEicon}
                  alt="Large E Icon Logo"
                  width="58.8"
                ></img>
              </div>
            ) : (
              <div></div>
            )}
            <Link class={phone ? "xMobile" : "x"} to="/">
              <img src={xIcon} alt="X to cancel" width="20"></img>
            </Link>
          </div>

          <h1 class={phone ? "welcomeMobile" : "welcome"}>
            Welcome to ESG-NRG!
          </h1>
          <div
            class={
              phone
                ? "flex flex-row alreadyDivMobile ..."
                : "flex flex-row alreadyDiv ..."
            }
          >
            <p class="already">Already have an account? &nbsp;&nbsp;</p>
            <Link class="signIn" to="/login">
              <p> Sign In</p>
            </Link>
          </div>
          <form class={phone ? "formMobile" : "form"} onSubmit={signupUser}>
            <br></br>
            <p class="formName">Name</p>
            <input
              // className="hover:border-blue-500"
              name="name"
              type="string"
              onChange={handleChange}
              placeholder=""
              value={userData.name}
            />{" "}
            <br />
            <br></br>
            <div class="flex flex-row ...">
              <p class="formName">Email</p>
              {/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                userData.email
              ) ? (
                <p className="emailvalidate">{"  "}</p>
              ) : (
                <p className="emailValidate">
                  &nbsp;&nbsp;&nbsp;&nbsp;Please enter valid email
                </p>
              )}
            </div>
            <input
              // className="hover:border-blue-500"
              name="email"
              type="string"
              onChange={handleChange}
              placeholder=""
              value={userData.email}
            />{" "}
            <br />
            <br></br>
            <p class="formName">Password</p>
            <div class="passwordContainer">
              <input
                className="inputPW"
                name="password"
                id="firstPassword"
                type={viewPassword0 ? "text" : "password"}
                onChange={handleChange}
                placeholder=""
                value={userData.password}
              />
<img src={pwView} alt="view password" onClick={togglePasswordVisibility0} id="passwordView"></img>
{/* <i onClick={togglePasswordVisibility0}>VIEW PASSWORD</i> */}
              <br />
              <br></br>
            </div>
            <div class="flex flex-row ...">
              <p class="formName">Re-Enter Password</p>
              {userData.password === userData.password2 ? (
                <p></p>
              ) : (
                <p className="emailValidate">
                  &nbsp;&nbsp;&nbsp;&nbsp;Passwords must match
                </p>
              )}
            </div>

            <div class="passwordContainer">
              <input
                className="inputPW"
                name="password2"
                type={viewPassword1 ? "text" : "password"}
                onChange={handleChange}
                placeholder=""
                value={userData.password2}
              />
              <img src={pwView} alt="view password" onClick={togglePasswordVisibility1} id="passwordView"></img>
              {/* <i onClick={togglePasswordVisibility1}>VIEW PASSWORD</i> */}
              
              <br />
              <br></br>
            </div>
            {userData.password === userData.password2 &&
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              userData.email
            ) ? (
              <button class="createBtn" type="submit">
                Create Your Account
              </button>
            ) : (
              <button class="noCreateBtn">Create Your Account</button>
            )}
            {/* <button class="createBtn" type="submit">
              Create your account
            </button> */}
          </form>


          <br></br>
          <p class={phone ? "termsMobile" : "terms"}>
            By creating an account, you agree to our Privacy Policy and our
            Terms and Conditions.{" "}
          </p>
        </div>
      </section>
    </>
  );
}
