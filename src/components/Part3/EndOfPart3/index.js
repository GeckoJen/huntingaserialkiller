import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EndOfPart3({ moveOnStoryPart, changePart, getUserInfo, resetDataForNewPart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    changePart("Congratulations, Detective");
    getUserInfo();
    moveOnStoryPart("");
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

    setTimeTaken(user.part3_time);
      setHintsUsed(JSON.parse(user.part3_hints));
      resetDataForNewPart();
  }

  calculateFinalData();

  return (
    <div className="page">
      <h2>Congratulations!</h2>
      <p className="centreText">
        {" "}
        You have completed the third and final chapter of the Code Killer
        mystery.
      </p>

      <div className="hintsSummary">
        <h3>Part 3 Summary</h3>
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
      <p className="centreText">Thank you for playing!</p>
      <Link to="/stats">
        <button>See your stats for all parts</button>
      </Link>
    </div>
  );
}

export default EndOfPart3;
