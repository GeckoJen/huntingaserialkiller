import React, { useState } from "react";
import puzzleBox from "../../images/arkstreet.png";
import "./theNextScene.css";
import answers from "../../answers/answers";
import { useNavigate } from "react-router-dom";

function TheNextScene() {
  let navigate = useNavigate();

  const [hint, setHint] = useState("");

  const [houseCode, setHouseCode] = useState([]);
  const [attemptLights, setAttemptLights] = useState([
    "attempt",
    "attempt",
    "attempt",
    "attempt",
    "attempt",
    "attempt",
  ]);

    function clearAnswer() {
       
        setHouseCode([]);
        setAttemptLights([
          "attempt",
          "attempt",
          "attempt",
          "attempt",
          "attempt",
          "attempt",
        ]);
    }
    
  function handleClick(button) {
    const index = attemptLights.findIndex((element) => {
      return element === "attempt";
    });

    if (index === -1) {
        clearAnswer();
    } else {
      setAttemptLights([
        ...attemptLights.slice(0, index),
        "attemptMade",
        ...attemptLights.slice(index + 1),
      ]);
      const newDigit = button.innerText;
      setHouseCode([...houseCode, newDigit]);
    }
  }

  function checkAnswer(e) {
    e.preventDefault();
    console.log(houseCode);
      if (houseCode.join("") === answers.theNextScene) {
        setAttemptLights([
          "attemptCorrect",
          "attemptCorrect",
          "attemptCorrect",
          "attemptCorrect",
          "attemptCorrect",
          "attemptCorrect",
        ]);
          setTimeout(() => {
            navigate("../insidethehouse");  
          }, 1000)
            console.log(true);
      } else {
          setAttemptLights([
            "attemptIncorrect",
            "attemptIncorrect",
            "attemptIncorrect",
            "attemptIncorrect",
            "attemptIncorrect",
            "attemptIncorrect",
          ]);
      setHint("Nope, that's not correct, try again!");
      setTimeout(() => {
          setHint("");
          clearAnswer();
      }, 2000);
    }
  }

  return (
    <div className="page">
      <h2>The Next Scene</h2>
      <p>
        Arriving at 37 Ark Street you fear that you are already too late. There
        is a broken window in the attic and the shutter doors are hanging askew.
      </p>

      <img
        className="puzzleImage puzzleHouse"
        src={puzzleBox}
        alt="puzzle box"
      ></img>
      <p>
        The front door is still securely locked, however. Next to it, there is a
        number keypad.{" "}
      </p>
      <div className="houseCodePad">
        <div className="houseCodePadRow0">
          <div className={attemptLights[0]}></div>
          <div className={attemptLights[1]}></div>
          <div className={attemptLights[2]}></div>
          <div className={attemptLights[3]}></div>
          <div className={attemptLights[4]}></div>
          <div className={attemptLights[5]}></div>
        </div>
        <div className="houseCodePadRow1">
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            1
          </div>
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            2
          </div>
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            3
          </div>
        </div>
        <div className="houseCodePadRow2">
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            4
          </div>
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            5
          </div>
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            6
          </div>
        </div>
        <div className="houseCodePadRow3">
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            7
          </div>
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            8
          </div>
          <div
            className="houseCodeNumber"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            9
          </div>
        </div>
        <div className="houseCodePadRow4">
          <div className="houseCodeEnter" onClick={checkAnswer}>
            ENTER
                  </div>
                  <div className="houseCodeClear" onClick={clearAnswer}>CLEAR</div>
        </div>
      </div>

      <p className="centreText hint">{hint}</p>
      <p >
        {" "}
        What code do you need to put in to gain access to the house? Insert the
        code into the panel above and then press enter.
      </p>
    </div>
  );
}

export default TheNextScene;
