import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './SignUp';

function NavBar(props) {
  return (
    <div>
      <nav className="container mx-auto border-4 border-indigo-600">
      
          <Link to="/">Home</Link>
          {/* <li>{!user.email ? <Link to="/auth">Log in</Link> : <Link to="/profile">Profile</Link>}</li> */}

        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
    
    
  );
}

export default NavBar;
