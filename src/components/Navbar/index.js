import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({
  part,
  timeElapsed,
  showTimer,
  
currentPuzzle
}) {


  const page = window.location.pathname


  return (
    <div className="wholeNavBar">
      {showTimer && (
        <div className="partName">
          <h3>{part}</h3>
          <p>The clock is ticking...</p>
          <h4> {timeElapsed}</h4>
        </div>
      )}

      {!showTimer && <h3 className="partName">{part}</h3>}

      <nav className="navbar">
        {page !== "/" && (
          <Link to="/">
            <button className="navbarButton">Home</button>{" "}
          </Link>
        )}

        <Link to="/stats">
          <button className="navbarButton">Stats </button>{" "}
        </Link>

        {currentPuzzle && (
          <Link to={currentPuzzle}>
            <button className="navbarButton">Current Puzzle</button>{" "}
          </Link>
        )}
        <Link to="/hints">
          <button className="navbarButton">Hints</button>{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
