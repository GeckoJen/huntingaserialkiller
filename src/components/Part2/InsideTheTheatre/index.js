import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import plantsImage from '../../../images/topiary quote wall.jpg'
import "./insideTheTheatre.css";

function InsideTheTheatre({ moveOnStoryPart, changePart, getUserInfo, displayTimer }) {

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
      const receivedAnswer = answer.toLowerCase().trim().split(' ').join('');
      if (
        receivedAnswer === answers.insideTheTheatre ||
        receivedAnswer.includes(answers.insideTheTheatre)
      ) {
        navigate("../beneaththetrapdoor");
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
        <h2>Inside the Theatre</h2>
        <p>
          You step inside the theatre through the stage door and carefully have
          a look around. At first glance, nothing seems to be amiss.
        </p>
        <p>
          The only things that look a little out of place are a collection of
          potted shrubs, that are standing in a rather crooked line in front of
          a wall. You move forward to take a closer look.
        </p>
        <img className="puzzleImage" src={plantsImage} alt="theatre wall" />
        <form onSubmit={checkAnswer}>
          <p className="centreText"> Where should you look next?</p>
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

export default InsideTheTheatre;
