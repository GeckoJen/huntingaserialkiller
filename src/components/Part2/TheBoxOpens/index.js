import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noteImage from '../../../images/come alone.jpg'
import answers from "../../../answers/answers";

function TheBoxOpens({
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
      receivedAnswer === answers.theBoxOpens 
      )
     {
      navigate("../friarsroad");
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
      <h2>The Box Opens</h2>
      <p>
        Inside the box is another note from the Code Killer. As you suspected,
        he's got another victim lined up already. You call the crime scene guys
        to get started on sweeping the theatre, then head on out to the next
        location.
      </p>
      <img className="puzzleImage" src={noteImage} alt="coded note" />
      <form onSubmit={checkAnswer}>
        <p className="centreText"> What house number are you heading to on Friar's Road?</p>
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

export default TheBoxOpens;
