import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './stats.css'

function Stats({part,  url, resetDataForNewPart, changePart, currentPuzzle }) {
    


    const [userStats, setUserStats] = useState([
      {
        status: "Not yet complete",
        time: "-h -m -s",
        hints: { nudges: "-", helps: "-", answers: "-" },
      },
      {
        status: "Not yet complete",
        time: "-h -m -s",
        hints: { nudges: "-", helps: "-", answers: "-" },
      },
      {
        status: "Not yet complete",
        time: "-h -m -s",
        hints: { nudges: "-", helps: "-", answers: "-" },
      },
    ]);

  async function getUserInfo() {
    if (localStorage.codekillerUserId) {
      const userId = localStorage.getItem("codekillerUserId");
      const response = await fetch(`${url}/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
        const data = await response.json();
    
        const payload = data.payload[0];
        
        const userData = [
          {
            status: payload.part1_time ? "Complete" : "Not yet complete",
            time: payload.part1_time ? payload.part1_time : "-h -m -s",
            hints: payload.part1_hints
              ? JSON.parse(payload.part1_hints)
              : { nudges: "-", helps: "-", answers: "-" },
          },
          {
            status: payload.part2_time ? "Complete" : "Not yet complete",
            time: payload.part2_time ? payload.part2_time : "-h -m -s",
            hints: payload.part2_hints
              ? JSON.parse(payload.part2_hints)
              : { nudges: "-", helps: "-", answers: "-" },
          },
          {
            status: payload.part3_time ? "Complete" : "Not yet complete",
            time: payload.part3_time ? payload.part3_time : "-h -m -s",
            hints: payload.part3_hints
              ? JSON.parse(payload.part3_hints)
              : { nudges: "-", helps: "-", answers: "-" },
          },
        ];
        setUserStats(userData);
    }
    }
    useEffect(() => {
       getUserInfo()    
    }, [])
 

const newPage = `../${currentPuzzle}`

  return (
    <div className="page">
      <h2>Statistics</h2>
      <div className="allParts">
        <div className="partStats">
          <h3>Part 1 Summary</h3>
          <h4>Status</h4>
          <table>
            <tbody>
              <tr>
                <td>{userStats[0].status}</td>
              </tr>
            </tbody>
          </table>
          <h4>Time taken:</h4>
          <table>
            <tbody>
              <tr>
                <td>{userStats[0].time}</td>
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
                <td>{userStats[0].hints.nudges}</td>
                <td>{userStats[0].hints.helps}</td>
                <td> {userStats[0].hints.answers}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="partStats">
          <h3>Part 2 Summary</h3>
          <h4>Status</h4>
          <table>
            <tbody>
              <tr>
                <td>{userStats[1].status}</td>
              </tr>
            </tbody>
          </table>
          <h4>Time taken:</h4>
          <table>
            <tbody>
              <tr>
                <td>{userStats[1].time}</td>
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
                <td>{userStats[1].hints.nudges}</td>
                <td>{userStats[1].hints.helps}</td>
                <td> {userStats[1].hints.answers}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="partStats">
          <h3>Part 3 Summary</h3>
          <h4>Status</h4>
          <table>
            <tbody>
              <tr>
                <td>{userStats[2].status}</td>
              </tr>
            </tbody>
          </table>
          <h4>Time taken:</h4>
          <table>
            <tbody>
              <tr>
                <td>{userStats[2].time}</td>
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
                <td>{userStats[2].hints.nudges}</td>
                <td>{userStats[2].hints.helps}</td>
                <td> {userStats[2].hints.answers}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="filler"></p>

      {currentPuzzle && (
        <Link to={newPage}>
          <button>
            Continue current puzzle:  / {currentPuzzle}
          </button>
        </Link>
      )}

      {!currentPuzzle && userStats[0].status === "Not yet complete" && (
        <Link to="/newcase">
          <button
            onClick={(e) => {
              resetDataForNewPart();
              changePart("Part 1");
            }}
          >
            Begin hunting the serial killer:<br></br> Start part 1 now
          </button>
        </Link>
      )}

      {!currentPuzzle &&
        userStats[0].status === "Complete" &&
        userStats[1].status === "Not yet complete" && (
          <Link to="/returnofthecodekiller">
            <button
              onClick={(e) => {
                changePart("Part 2");
                resetDataForNewPart();
              }}
            >
              Continue hunting the serial killer:<br></br> Start part 2 now
            </button>
          </Link>
        )}

      {!currentPuzzle &&
        userStats[1].status === "Complete" &&
        userStats[2].status === "Not yet complete" && (
          <Link to="/part3">
            <button
              onClick={(e) => {
                changePart("Part 3");
                resetDataForNewPart();
              }}
            >
              Continue hunting the serial killer:<br></br> Start part 3 now
            </button>
          </Link>
              )}
          {!currentPuzzle &&
              userStats[0].status === "Complete" &&
              userStats[1].status === "Complete" &&
              userStats[2].status === "Complete" && (
                  <p className='centreText'>Congratulations on completing all three parts of the Hunting a Serial Killer virtual escape room!</p>)}
    </div>
  );
}

export default Stats