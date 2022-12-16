import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Gagan Saini</h1>
      </Link>
      <div className="menubar">
        <Link to="/feed">
          <h1 className="about">Feed</h1>
        </Link>
        <Link to="/about">
          <h1 className="about">About</h1>
        </Link>
        <Link to="/contact">
          <h1 className="about">Contact</h1>
        </Link>
        <Link to="/signup">
          <h1 className="about">Signup</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
