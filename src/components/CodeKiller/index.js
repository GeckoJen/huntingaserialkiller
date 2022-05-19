import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import panicRoom from '../../images/panic room clues.jpg';
import answers from '../../answers/answers';
import arrow from '../../images/right-arrow.png'
import dot from '../../images/black-circle.png'
import './codekiller.css'

function CodeKiller() {

 useEffect(() => {
   window.scrollTo(0, 0);
 }, []);

let navigate = useNavigate();

const [hint, setHint] = useState("");

const [houseCode, setHouseCode] = useState([]);
const [attemptLights, setAttemptLights] = useState([
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
  if (houseCode.join("") === answers.codeKiller) {
    setAttemptLights([
      "attemptCorrect",
      "attemptCorrect",
      "attemptCorrect",
      "attemptCorrect",

    ]);
    setTimeout(() => {
      navigate("../theend");
    }, 1000);
    console.log(true);
  } else {
    setAttemptLights([
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
      <h2>The Code Killer</h2>
      <p>
        “The Code Killer?” you call to him, playing for time. “Is that all I
        get? Didn't you promise to give me your real name if I solved your
        riddle?”
      </p>
      <p>
        “And you trusted me?” he replies, with a smirk. “I'm not going to give
        you that, Detective, I'm not stupid. I'm impressed, though. It seems I
        may have found a worthy opponent at last. Now I know what I'm up
        against, I may have to rethink my game plan. Until next time,
        Detective...”
      </p>
      <p>
        And with that, the Code Killer waves and leaves. You now manage to call
        for back up, but by the time they arrive there's no trace of the Code
        Killer or his van. You have a sneaking suspicion that the Code Killer
        may have gone for a while, but he'll definitely be back at some point.
      </p>
      <p>
        Sighing with relief that the immediate danger is over, you call to your
        family that it's safe to come out of the panic room, only to discover
        that nobody can remember the security code to get out again! You can't
        remember it either, but you do remember that there are clues written on
        the wall under the clock. Your family takes a photo and sends it to you
        so you can figure out the code.
      </p>
      <img className="puzzleImage" src={panicRoom} alt="panic room" />
      <p className="centreText">
        What is the code to get out of the panic room?
      </p>
      <div className="houseCodePad">
        <div className="houseCodePadRow">
          <div className={attemptLights[0]}></div>
          <div className={attemptLights[1]}></div>
          <div className={attemptLights[2]}></div>
          <div className={attemptLights[3]}></div>
        </div>
        <div className="houseCodePadRow">
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            1<div className="keySpacer"></div>
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            2
            <img className="arrow no2arrow" src={arrow} alt="arrow" />
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            3<div className="keySpacer"></div>
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
            <img className="arrow no4arrow" src={arrow} alt="arrow" />
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            5
            <img className="dot" src={dot} alt="dot" />
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            6
            <img className="arrow no6arrow" src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="houseCodePadRow">
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            7<div className="keySpacer"></div>
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            8
            <img className="arrow no8arrow" src={arrow} alt="arrow" />
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            9<div className="keySpacer"></div>
          </div>
        </div>
        <div className="houseCodePadRow">
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            *<div className="keySpacer"></div>
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            0<div className="keySpacer"></div>
          </div>
          <div
            className="houseCodeNumber panicRoomKey"
            onClick={(e) => {
              handleClick(e.target);
            }}
          >
            #<div className="keySpacer"></div>
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
          <p className='filler'></p>
    </div>
  );
}

export default CodeKiller;
