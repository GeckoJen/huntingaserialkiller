import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import newspaper from '../../../images/newspaper calum hoddle.png';
import crimeScene from '../../../images/crimescene.jpg';

function CalumHoddle({
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
       if (receivedAnswer === answers.calumHoddle) {
         navigate("../decodingthemotive");
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
      <h2>The Calum Hoddle Crime Scene</h2>
      <p>
        You next turn your attention to the Calum Hoddle crime scene. This was
        your first introduction to the Code Killer, when you had just arrived.
      </p>
      <img
        className="puzzleImage"
        src={crimeScene}
        alt="Calum Hoddle crime scene"
      />
      <p>
        There's not much to see here. Just a broken vase and a newspaper. You
        look to see if the newspaper is in the file - maybe it contains
        something relevant?
      </p>
      <img
        className="puzzleImage"
        src={newspaper}
        alt="Newspaper found at crime scene"
      />
      <form onSubmit={checkAnswer}>
        <p className="centreText">
          {" "}
          Is there a 5 letter message hidden in the newspaper? What is it?
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

export default CalumHoddle;
