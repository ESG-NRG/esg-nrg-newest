import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import actions from "../api/index";
import TheContext from "../TheContext";
import loginPic from "../images/loginPic.png";
import largeEicon from "../images/largeEicon.svg";
import xIcon from "../images/xIcon.png";
import pwView from "../images/IconArtwork.png";
import Login from "./Login";
import "../signUpIn.css";

export default function Signup() {
  const { history, user, setUser } = useContext(TheContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

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
  


  // const passwordView = (e) => {
   
  //   console.log("vewPwType before ternary", viewPwType)
  //     viewPwType[e] !== "password" ? viewPwType[e] = "password" : viewPwType[e] = "text"
  // }

  function passwordsView(e) {
    console.log("vewPwType before ternary", viewPwType)
      viewPwType[e] !== "password" ? viewPwType[e] = "password" : viewPwType[e] = "text"
  }

  let viewPwType=["text", "text"]

  return (
    <>
      <section class="flex flex-row ...">
        <div class="relative z-0 justify-items-center ...">
          <img src={loginPic} alt="Tanker on Water" width="317"></img>
          <img
            class="largeE"
            src={largeEicon}
            alt="Large E Icon Logo"
            width="58.8"
          ></img>
          <p class="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis
            neque, volutpat ac.
          </p>
        </div>

        <div class="rightDiv">
          <Link class="x" to="/">
            <img src={xIcon} alt="X to cancel" width="20"></img>
          </Link>
          <h1 class="welcome">Welcome to ESG-NRG!</h1>
          <div class="flex flex-row alreadyDiv ...">
            <p class="already">Already have an account? &nbsp;&nbsp;</p>
            <Link class="signIn" to="/login">
              <p> Sign In</p>
            </Link>
          </div>
          <form class="form" onSubmit={signupUser}>
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
            <p class="formName">Email</p>
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
                type={viewPwType[1]}
                onChange={handleChange}
                placeholder=""
                value={userData.password}
              />
              {/* <input
                type="image"
                name="passwordView1"
                id="passwordView"
                onclick={passwordsView(0)}
                src={pwView}
                alt="View Password"
              ></input> */}
              <img src={pwView} id="passwordView" onclick={passwordsView(0)} alt="view password"></img>
              
              <br />
              <br></br>
            </div>
            <p class="formName">Re-Enter Password</p>
            {/* {userData.password === userData.password2 ? (
              <input
                className="hover:border-blue-500"
                name="password2"
                type="password"
                onChange={handleChange}
                placeholder=""
                value={userData.password2}
              />
            ) : (
              <input
                className="borderBad hover:border-blue-500"
                name="password2"
                type="password"
                onChange={handleChange}
                placeholder=""
                value={userData.password2}
              />
            )} */}
            <div class="passwordContainer">
              <input
                className="inputPW"
                name="password2"
                type="password"
                onChange={handleChange}
                placeholder=""
                value={userData.password2}
              />
              <img src={pwView} id="passwordView"></img>
              <br />
              <br></br>
            </div>
            {userData.password === userData.password2 ? (
              <button class="createBtn" type="submit">
                Create your account
              </button>
            ) : (
              <button class="createBtn">Passwords Must Match</button>
            )}
            {/* <button class="createBtn" type="submit">
              Create your account
            </button> */}
          </form>
          <br></br>
          <p class="terms">
            By creating an account, you agree to our Privacy Policy and our
            Terms and Conditions.{" "}
          </p>
        </div>
      </section>
    </>
  );
}
