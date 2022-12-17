import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function expandNavbar() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="-my-name">Gagan Saini</h1>
      </Link>
      <div className="expand-icon" onClick={expandNavbar}>
        E
      </div>
      <div className={showMenu ? "show-menubar" : "menubar"}>
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
