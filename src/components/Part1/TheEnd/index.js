import React, { useEffect, useState } from "react";
import "./theEnd.css";

function TheEnd({changePart,  getUserInfo }) {


  useEffect(() => {
    window.scrollTo(0, 0);
    changePart("Part 1");
    calculateFinalData();
  }, []);

  
  const [timeTaken, setTimeTaken] = useState({ hours: 0, minutes: 0, seconds: 0 })
  
  const [hintsUsed, setHintsUsed] = useState({nudges: 0, helps: 0, answers: 0})

  async function calculateFinalData() {
    const results = await getUserInfo();
    const user = results.payload[0]
    console.log(user);
    
  const startTime = Number(user.start_time);
  const endTime = Number(user.end_time);
  const lengthOfTime = Math.ceil((endTime - startTime) / 1000);

    setTimeTaken({hours: Math.floor(lengthOfTime / 3600), minutes: Math.floor(lengthOfTime / 60), seconds: Math.floor(lengthOfTime % 60)})
  
setHintsUsed({nudges: user.nudges, helps: user.helps, answers: user.answers})

}
  
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
        <h4>Nudges: {hintsUsed.nudges}</h4>
        <h4>Helps: {hintsUsed.helps}</h4>
        <h4>Answers: {hintsUsed.answers}</h4>
        <h3>Time taken to complete Part 1:</h3>
        <h4>
          {timeTaken.hours}h {timeTaken.minutes}m {timeTaken.seconds}s
        </h4>
      </div>
      <button>Continue to Part 2</button>
    </div>
  );
}

export default TheEnd;
