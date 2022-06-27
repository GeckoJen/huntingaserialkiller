import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import bikeshed from "../../../images/bikeshed.jpg";
import './grandfinale.css'
import chevronDouble from '../../../images/chevrondouble.png';
import chevronSingle from '../../../images/chevronsingle.png'

function GrandFinale({
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

    const [hint, setHint] = useState("");
    
    const [frequency, dispatch] = useReducer(frequencyReducer, 240.5);

    function frequencyReducer(state, action) {
        console.log(state, action)
        
        switch (action.type) {
          case "singleIncrement":
            return (Number(state) + 0.1).toFixed(1);
          case "doubleIncrement":
            return (Number(state) + 1).toFixed(1);
          case "singleDecrement":
            return (Number(state) - 0.1).toFixed(1);
          case "doubleDecrement":
                return (Number(state) - 1).toFixed(1);
            default: return Number(state);
        }

    }

  function checkAnswer(event) {
    event.preventDefault();
        if (frequency === answers.radioFrequency) {
      navigate("../finish");
    } else {
      setHint("Nope, that's not correct, try again!");
      setTimeout(() => {
        setHint("");
        
      }, 2000);
    }
  }

  return (
    <div className="page">
      <h2>The Grand Finale</h2>
      <p>
        Just as you disconnect the final wire and the timer display goes blank,
        a shout from behind you makes you turn round. It's the Code Killer, who,
        as you suspected, had been watching from close by.
      </p>
      <p>
        "You think you're so clever, don't you?" he yells at the group of police
        officers standing around the bomb. "But I'm still one step ahead of
        you!" And he pulls out a gun from his pocket and aims it towards the
        head of the police officer standing closest to him, his hand shaking.
        Contrary to his usual calm, aloof demeanour, he appears distinctly
        agitated, and you think that, for once, maybe he isn't one step ahead
        after all.
      </p>
      <p>
        You think quickly. He's standing right in front of the bike shed, and
        you know that the station's current "high alert" status means that there
        is a sniper positioned over the cell block. You need to attract the
        attention of the sniper by using the emergency frequency on your radio.
        Stupidly, they just changed what the emergency frequency is - again! -
        and you can't remember it. You know they wrote a clue to it on the bike
        shed - just behind where the Code Killer is standing. Without moving, so
        as not to attract his attention, you look over to the bike shed.
      </p>
      <img className="puzzleImage" src={bikeshed} alt="Bike shed" />
      <form onSubmit={checkAnswer}>
        <p className="centreText">
          {" "}
          What frequency do you need to set your radio to?
        </p>
        <div className="radioHousing">
          <div className="radioDisplay">{frequency} MHz</div>
          <div className="radioControls">
            <div className="doubleLeft">
              <img
                className="chevron"
                src={chevronDouble}
                alt="double left"
                onClick={() => dispatch({ type: "doubleDecrement" })}
              />
            </div>
            <div className="singleLeft">
              <img
                className="chevron"
                src={chevronSingle}
                alt="left"
                onClick={() => dispatch({ type: "singleDecrement" })}
              />
            </div>
            <div className="knob"></div>
            <div className="singleRight">
              <img
                className="chevron"
                src={chevronSingle}
                alt="right"
                onClick={() => dispatch({ type: "singleIncrement" })}
              />
            </div>
            <div className="doubleRight">
              <img
                className="chevron"
                src={chevronDouble}
                alt="double right"
                onClick={() => dispatch({ type: "doubleIncrement" })}
              />
            </div>
          </div>
        </div>

        <p className="centreText hint">{hint}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GrandFinale;
