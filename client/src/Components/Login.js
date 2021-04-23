import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import actions from '../api/index';
import TheContext from '../TheContext';
import loginPic from "../images/loginPic.png";
import largeEicon from "../images/largeEicon.svg";
import xIcon from "../images/xIcon.png";
import pwView from "../images/IconArtwork.png";
import signUp from "./SignUp";
import "../signUpIn.css";

export default function Login() {
  const { history, user, setUser } = useContext(TheContext);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const signupUser = (e) => {
    e.preventDefault();
    console.log("here we are at signupUser function")
    actions
      .logIn(userData)
      .then((user) => {
        setUser({ ...user?.data }); //user info --> profile.js
        history.push('/profile');
      })
      .catch((error) => {
        const { data } = error.response;
        console.log(data.message);
      });
  };
  function handleChange(event) {
    setUserData({...userData, [event.target.name]: event.target.value,});
  }

  function passwordsView(e) {
    console.log("vewPwType before ternary", viewPwType)
      viewPwType[e] !== "password" ? viewPwType[e] = "password" : viewPwType[e] = "text"
  }

  let viewPwType=["password", "password"]

  return (
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
          <h1 class="welcome">Welcome Back!</h1>
          <div class="flex flex-row alreadyDiv ...">
            <p class="already">Don't have an account? &nbsp;&nbsp;</p>
            <Link class="signIn" to="/SignUp">
              <p> Sign Up</p>
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
              <br></br>
              <br></br>
               <p class="forgot">
            Forgot Password?{" "}
          </p>
              <button type="image" src={pwView} id="passwordView" onclick={passwordsView(0)}></button>
              {/* <img src={pwView} id="passwordView" onclick={passwordsView(0)} alt="view password"></img> */}
              
              <br />
              <br></br>
            </div>
           
              
            
              <button class="createBtn" type="submit">
                Sign In
              </button>
            
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


    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={signupUser}>
    //     <input className="border focus:border-blue-500"
    //       name="email"
    //       type="string"
    //       onChange={handleChange}
    //       placeholder="email"
    //       value={userData.email}
    //     /><br/>
    //     <input className="border focus:border-blue-500"
    //       name="password"
    //       type="password"
    //       onChange={handleChange}
    //       placeholder="password"
    //       value={userData.password}
    //     /><br/>
    //     <button className="border-2 border-blue-500 hover:border-gray-500 rounded-lg" type="submit">Login</button>
    //   </form>
    // </div>
  );
}
