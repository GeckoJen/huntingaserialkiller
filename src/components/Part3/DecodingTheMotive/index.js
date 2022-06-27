import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import victimNotes from '../../../images/victimnotes.png'

function DecodingTheMotive({
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
      if (
        receivedAnswer === answers.decodingTheMotive ||
        receivedAnswer.includes(answers.decodingTheMotive)
      ) {
        navigate("../motiverevealed");
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
        <h2>Decoding the Motive</h2>
        <p>
          You lay out the summary of all the information you have on the
          victims, which is now complete, and you notice that each of them was
          either divorced or widowed. Is that a coincidence? Or is that part of
          how he selects his victims?
        </p>
        <img
          className="puzzleImage"
          src={victimNotes}
          alt="Notes on the victims"
        />
        <p>
          You turn your focus to the series of letters left with each of the
          bodies. Now that you know what order the bodies were found in, can you
          make sense of the message?
        </p>

        <form onSubmit={checkAnswer}>
          <p className="centreText">
            {" "}
            What are the last 6 words of the message?
          </p>
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

export default DecodingTheMotive;
