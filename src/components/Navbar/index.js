import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({
  part,
  timeElapsed,
  showTimer
}) {


  return (
    <div>
      {showTimer && (
        <div className="partName">
          <h3>{part}</h3>
          <p>The clock is ticking...</p>
          <h4> {timeElapsed}</h4>
        </div>
      )}

      {!showTimer && <h3 className="partName">{part}</h3>}

      <nav className="navbar">
        <Link to="/">
          <button className="navbarButton">Home</button>{" "}
        </Link>
        <Link to="/hints">
          <button className="navbarButton">Hints</button>{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
