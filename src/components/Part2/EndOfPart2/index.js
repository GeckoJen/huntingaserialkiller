import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function EndOfPart2({ changePart, getUserInfo, resetDataForNewPart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    changePart("Congratulations, Detective");
    getUserInfo();
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

    setTimeTaken(user.part2_time);
    setHintsUsed(JSON.parse(user.part2_hints));
  }

  calculateFinalData();

  return (
    <div className="page">
      <h2>
        Congratulations!
      </h2>
      <p className="centreText">
        {" "}
        You have completed the second chapter of the Code Killer mystery.
      </p>
      <p className="centreText">
        The Code Killer will return for a thrilling final showdown.
      </p>
      <p className="centreText">Will you be able to catch him next time? </p>
      <div className="hintsSummary">
        <h3>Part 2 Summary</h3>
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
      <Link to="/part3">
        <button onClick={resetDataForNewPart}>Continue to Part 3</button>
      </Link>
    </div>
  );
}

export default EndOfPart2;
