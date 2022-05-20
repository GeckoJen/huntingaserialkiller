import React, { useEffect } from 'react';
import './theEnd.css'

function TheEnd({hintsUsed, changePart}) {

     useEffect(() => {
       window.scrollTo(0, 0);
       changePart("Part 1");
     }, []);

  return (
    <div className="page">
      <h2>The End. For Now...</h2>
      <p className="centreText">Congratulations!</p>
      <p className="centreText">
        You have succeeded in getting your family out safely, and the Code
        Killer has gone to ground. You can relax for a little while.
      </p>
      <p className="centreText">But the Code Killer is sure to return. </p>
      <p className="centreText">Will you be able to catch him next time? </p>
      <div className="hintsSummary">
        <h3>Hints used in Part 1:</h3>
          <h4>Nudges: {hintsUsed.Nudge}</h4>
          <h4>Helps: {hintsUsed.Help}</h4>
          <h4>Answers: {hintsUsed.Answer}</h4> 
        </div>
      <button>Continue to Part 2</button>
    </div>
  );
}

export default TheEnd