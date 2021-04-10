import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
}

export default NavBar;
