import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import victimList from '../../../images/victimlist2.png';
import stuartTaylorCS from '../../../images/undertrapdoorbody.jpg';
import bloodyNote from '../../../images/bloodstained note stuart taylor.jpg';

function TheVictims({
  moveOnStoryPart,
  changePart,
  getUserInfo,
  displayTimer,
}) {
    useEffect(() => {
      window.scrollTo(0, 0);
      moveOnStoryPart(window.location.pathname);
      changePart("Part 3");
      getUserInfo();
      displayTimer(true);
    }, []);

    let navigate = useNavigate();

    
    const [answer, setAnswer] = useState("");
    const [hint, setHint] = useState("");

    function checkAnswer(event) {
      event.preventDefault();
      const receivedAnswer = answer.toLowerCase().trim();
      if (receivedAnswer === answers.stuartTaylor) {
        navigate("../calumhoddle");
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
        <h2>The Victims</h2>
        <p>
          Now that you know the order the victims were killed in, you take a
          look at the summary information in the files.
        </p>
        <img className="puzzleImage" src={victimList} alt="List of victims" />
        <p>
          You notice that there appears to have been a 5 letter message left
          with each body - except for Stuart Taylor and Calum Hoddle, where
          apparently no message was discovered (or at least, no message was
          decoded).
        </p>
        <p>
          You look for the crime scene photos and evidence logs for these two
          victims, to see if you can work out what the message might have been.
        </p>
        <p>
          Firstly you look at Stuart Taylor's file. This was the most recent
          body you found - underneath the trap door in the theatre. It appears
          that there is a piece of paper lying under the body. You hunt through
          the file to find it.
        </p>
        <img
          className="puzzleImage"
          src={stuartTaylorCS}
          alt="Stuart Taylor crime scene"
        />
        <p>
          No wonder this was just ignored at the time, written off as another
          peculiar message from the Code Killer. But maybe it hides a secret
          message? Remember, you're looking for 5 letters.{" "}
        </p>
        <img className="puzzleImage" src={bloodyNote} alt="bloodstained note" />
        <form onSubmit={checkAnswer}>
          <p className="centreText"> What are the 5 letters?</p>
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

export default TheVictims;
