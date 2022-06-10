import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import brickImage from '../../../images/wallkeyboardriddle.jpg';
import answers from '../../../answers/answers'

function InTheLivingRoom({
  moveOnStoryPart,
  changePart,
  getUserInfo,
  displayTimer,
}) {
    useEffect(() => {
      window.scrollTo(0, 0);
      moveOnStoryPart(window.location.pathname);
      changePart("Part 2");
      getUserInfo();
      displayTimer(true);
    }, []);

    let navigate = useNavigate();

const [answer, setAnswer] = useState("");
const [hint, setHint] = useState("");

function checkAnswer(event) {
  event.preventDefault();
  const receivedAnswer = answer.toLowerCase().trim();
  if (
    receivedAnswer === answers.inTheLivingRoom ||
    receivedAnswer.includes(answers.inTheLivingRoom)
  ) {
    navigate("../inthegarden");
  } else {
    setHint("Nope, that's not correct, try again!");
    setTimeout(() => {
      setHint("");
      setAnswer("");
    }, 2000);
  }
}


    return (
      <div className="page">
        <h2>Inside the Living Room</h2>
        <p>
          Upon entering the room, you are surprised to find it empty, save for
          two sofas, a coffee table, a bookcase and a grandfather clock. There's
          nobody there, alive or dead.{" "}
        </p>
        <p>
          But then you look out of the patio doors, and see the body of a man
          lying in a pool of blood on the flagstones in the garden. You rush to
          open the patio doors, but find that they're locked, with the key
          nowhere to be found. Just above the lock, you see a picture of some
          coloured brickwork, with numbers on it. You presume it has something
          to do with the location of the key to the door, but you don't know
          what just yet.
        </p>
        <img className="puzzleImage" src={brickImage} alt="bricks puzzle" />
        <form onSubmit={checkAnswer}>
          <p className="centreText"> Where do you look for the key to the patio doors?</p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <p className="centreText hint">{hint}</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default InTheLivingRoom;
