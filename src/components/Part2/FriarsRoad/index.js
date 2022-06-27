import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import houseImage from '../../../images/friarsroadhouse.png'
import answers from "../../../answers/answers";

function FriarsRoad({
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

  const [hint, setHint] = useState("");

  const [houseCode, setHouseCode] = useState([]);
  const [attemptLights, setAttemptLights] = useState([
    "attempt",
    "attempt",
    "attempt",
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

  async function checkAnswer(e) {
    e.preventDefault();
    if (houseCode.join("") === answers.friarsRoad) {
      setAttemptLights([
        "attemptCorrect",
        "attemptCorrect",
        "attemptCorrect",
        "attemptCorrect",
        "attemptCorrect",
        "attemptCorrect",
        "attemptCorrect",
        "attemptCorrect",
        "attemptCorrect",
      ]);

      setTimeout(() => {
        navigate("../insidefriarsroad");
      }, 1000);
    } else {
      setAttemptLights([
        "attemptIncorrect",
        "attemptIncorrect",
        "attemptIncorrect",
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
      <h2>Friar's Road</h2>
      <p>
        You arrive at 307 Friar's Road to find a pleasant, suburban house.
        There's no answer when you knock on the door, but then you weren't
        really expecting one.
      </p>
      <p>
        The door is locked, but there's a key safe just to the left of the door
        which is locked with a 9 digit combination lock. Can you figure out what
        code will unlock the key safe?
      </p>

      <img className="puzzleImage" src={houseImage} alt="307 Friar's Road" />
      <p className="centreText">
        What code will you enter to access the house?
      </p>
      <div className="houseCodePad">
        <div className="houseCodePadRow">
          <div className={attemptLights[0]}></div>
          <div className={attemptLights[1]}></div>
          <div className={attemptLights[2]}></div>
          <div className={attemptLights[3]}></div>
          <div className={attemptLights[4]}></div>
          <div className={attemptLights[5]}></div>
          <div className={attemptLights[6]}></div>
          <div className={attemptLights[7]}></div>
          <div className={attemptLights[8]}></div>
        </div>
        <div className="houseCodePadRow">
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            1
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            2
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            3
          </div>
        </div>
        <div className="houseCodePadRow">
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            4
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            5
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            6
          </div>
        </div>
        <div className="houseCodePadRow">
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            7
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            8
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            9
          </div>
        </div>
        <div className="houseCodePadRow">
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            *
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            0
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            #
          </div>
        </div>
        <div className="houseCodePadRow">
          <div className="houseCodeEnter" onClick={checkAnswer}>
            ENTER
          </div>
          <div className="houseCodeClear" onClick={clearAnswer}>
            CLEAR
          </div>
        </div>
      </div>
      <p className="filler"></p>
      <p className="filler"></p>
    </div>
  );
}

export default FriarsRoad;
