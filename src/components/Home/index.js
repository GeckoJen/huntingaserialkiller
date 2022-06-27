import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Home({
  changePart,
  // updateUser,
  displayTimer,
  createUser,
  resetDataForNewPart,
  currentPuzzle,
  moveOnStoryPart
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    changePart("Welcome, Detective");
    if (!localStorage.codekillerUserId) {
      const id = uuidv4();
      localStorage.setItem("codekillerUserId", id);
    }
    createUser();
  }, []);

  async function reset() {
    localStorage.clear();
   const id = uuidv4();
    localStorage.setItem("codekillerUserId", id);
    await createUser();
    moveOnStoryPart('/');
    displayTimer(false);
    console.log(localStorage)
  }

  return (
    <div className="page">
      <h1>Hunting a Serial Killer</h1>
      <h2>A virtual escape room mystery in three parts</h2>

      <p>
        A serial killer is at large and the local police force is stumped.
        You've been brought in to share your expertise. But as you begin to
        investigate, you realise that this is no ordinary case.
      </p>
      <p>
        This killer likes to play games, and it seems that he thinks he's
        finally found a worthy opponent in you. You're drawn into a bizarre
        cat-and-mouse chase that might have deadly consequences for you and your
        family, unless you can stop him in time... Are you up to the challenge?
      </p>

      <h3 className="introAdviceh3">How to Play</h3>
      <p className="introAdvice">
        You will need a laptop or desktop to play this virtual escape room.
      </p>

      <p className="introAdvice">
        {" "}
        Each of the three parts of this virtual escape room will probably take
        you between 45mins and 1hr 30mins to solve. There is an in-built timer
        to record how long each part takes, and also how many hints you need
        along the way.{" "}
      </p>
      <p className="introAdvice">
        There is a story running through all three parts, so do complete them in
        order to ensure that it all makes sense.
      </p>
      <p className="introAdvice">
        Sometimes the answer to a puzzle will be right in front of you, if you
        look in the right place. At other times, you may need to look up extra
        bits of information, visit other webpages or even send an email to find
        the answers you need.
      </p>

      <p className="introAdvice">
        {" "}
        Keep a pen and paper handy to scribble notes on and work out clues, and
        if you get stuck at any point, click the "hints" button in the top right
        corner, where you can choose the level of help you require.
      </p>
      <p className="introAdvice">
        {" "}
        For typed answers, it doesn't matter if you use capitals or lower case,
        but do make sure you spell things correctly.
      </p>
      <p className="introAdvice">
        Your time starts when you select a part below. Good luck!
      </p>
      <div>
        {currentPuzzle && (
          <Link to={currentPuzzle}>
            <button>Continue current puzzle: / {currentPuzzle}</button>
          </Link>
        )}
      </div>
      <Link to="/newcase">
        <button
          onClick={() => {
            resetDataForNewPart();
            changePart("Part 1");
          }}
        >
          Begin Part 1
        </button>
      </Link>
      <Link to="/returnofthecodekiller">
        <button
          onClick={() => {
            changePart("Part 2");
            resetDataForNewPart();
          }}
        >
          Begin Part 2
        </button>
      </Link>
      <Link to="/part3">
        <button
          onClick={() => {
            changePart("Part 3");
            resetDataForNewPart();
          }}
        >
          Begin Part 3
        </button>
      </Link>

      <p className="introAdvice">
        If you've played before on this computer and you want to wipe all previous progress and records so you can play again, click below to start afresh:
      </p>
      <button onClick={reset}>Wipe previous progress</button>
    </div>
  );
}

export default Home;
