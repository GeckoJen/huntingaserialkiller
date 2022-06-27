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

  const storageItems = [
    "codekillerUserId",
    "Nudge11",
    "Help11",
    "Answer11",
    "Nudge12",
    "Help12",
    "Answer12",
    "Nudge13",
    "Help13",
    "Answer13",
    "Nudge14",
    "Help14",
    "Answer14",
    "Nudge15",
    "Help15",
    "Answer15",
    "Nudge16",
    "Help16",
    "Answer16",
    "Nudge17",
    "Help17",
    "Answer17",
    "Nudge18",
    "Help18",
    "Answer18",
    "Nudge21",
    "Help21",
    "Answer21",
    "Nudge22",
    "Help22",
    "Answer22",
    "Nudge23",
    "Help23",
    "Answer23",
    "Nudge24",
    "Help24",
    "Answer24",
    "Nudge25",
    "Help25",
    "Answer25",
    "Nudge26",
    "Help26",
    "Answer26",
    "Nudge27",
    "Help27",
    "Answer27",
    "Nudge28",
    "Help28",
    "Answer28",
    "Nudge29",
    "Help29",
    "Answer29",
    "Nudge210",
    "Help210",
    "Answer210",
    "Nudge31",
    "Help31",
    "Answer31",
    "Nudge32",
    "Help32",
    "Answer32",
    "Nudge33",
    "Help33",
    "Answer33",
    "Nudge34",
    "Help34",
    "Answer34",
    "Nudge35",
    "Help35",
    "Answer35",
    "Nudge36",
    "Help36",
    "Answer36",
    "Nudge37",
    "Help37",
    "Answer37",
    "Nudge38",
    "Help38",
    "Answer38",
  ];

  async function reset() {
    storageItems.forEach((item) => {
      if(localStorage[item]){localStorage.removeItem(item)}
    })
   const id = uuidv4();
    localStorage.setItem("codekillerUserId", id);
    await createUser();
    moveOnStoryPart('/');
    displayTimer(false);

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
