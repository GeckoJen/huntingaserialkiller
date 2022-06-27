import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./theEnd.css";

function TheEnd({ changePart, getUserInfo, resetDataForNewPart, moveOnStoryPart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    changePart("Congratulations, Detective");
    getUserInfo();
moveOnStoryPart('/');
    
     }, []);

  const [timeTaken, setTimeTaken] = useState();

  const [hintsUsed, setHintsUsed] = useState({
    nudges: 0,
    helps: 0,
    answers: 0,
  });

  async function calculateFinalData() {
    const results = await getUserInfo();
    const user = results.payload[0];
    setTimeTaken(user.part1_time)
    setHintsUsed(JSON.parse(user.part1_hints));
  }

     calculateFinalData();


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
        <h3>Part 1 Summary</h3>
        <h4>Time taken:</h4>
        <table>
          <tbody>
            <tr>
              <td>{timeTaken}</td>
            </tr>
          </tbody>
        </table>
        <h4>Hints used:</h4>
        <table>
          <tbody>
            <tr>
              <th scope="column">Nudges</th>
              <th scope="column">Helps</th>
              <th scope="column">Answers</th>
            </tr>
            <tr>
              <td>{hintsUsed.nudges}</td>
              <td>{hintsUsed.helps}</td>
              <td> {hintsUsed.answers}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/returnofthecodekiller">
        <button onClick={resetDataForNewPart}>Continue to Part 2</button>
      </Link>
    </div>
  );
}

export default TheEnd;
