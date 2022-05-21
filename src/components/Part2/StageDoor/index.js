import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import stageDoor from "../../../images/graffiti wall.jpg";
import answers from "../../../answers/answers";
import './stageDoor.css'

function StageDoor({ moveOnStoryPart, changePart }) {
useEffect(() => {
  window.scrollTo(0, 0);
  moveOnStoryPart(window.location.pathname);
  changePart("Part 2");
}, []);

let navigate = useNavigate();

    const [stageDoorCode, setStageDoorCode] = useState(["A", "A", "A", "A", "A", "A", 'A', 'A',]);
    // const [hint, setHint] = useState("");
    
    function moveLetterUp(button) {
        let id = Number(button.id);
        let char = button.innerText.charCodeAt(0)
        console.log(char, id)
        let newChar;
        if (char < 90) { newChar = char + 1 } else { newChar = 65 };
        setStageDoorCode([...stageDoorCode.slice(0, id), String.fromCharCode(newChar), ...stageDoorCode.slice(id + 1)])
        console.log(stageDoorCode)
    }

    function moveLetterDown(button) {
        let id = Number(button.id);
        let char = button.innerText.charCodeAt(0);
        console.log(char, id);
        let newChar;
        if (char >65) {
          newChar = char - 1;
        } else {
          newChar = 90;
        }
        setStageDoorCode([
          ...stageDoorCode.slice(0, id),
          String.fromCharCode(newChar),
          ...stageDoorCode.slice(id + 1),
        ]);
        console.log(stageDoorCode);
    }

function checkAnswer(event) {
    event.preventDefault();
    if (stageDoorCode.join('') === answers.stageDoor) {
        console.log(true)
       navigate("../insidethetheatre"); 
    }

}

return (
  <div className="page">
    <h2>The Stage Door</h2>
    <p>
      You arrive at the theatre but at 9.30 on a Monday morning it's all closed
      up. There's no show today, nobody is working. You've tried to get hold of
      a keyholder but they're not answering. You don't have any time to waste.
      You need to find a way inside ASAP.
    </p>
    <p>
      You go round the back to the stage door. There's a combination lock
      fastening the doors shut. Maybe you can work out what the code is to
      unlock it?
    </p>

    <img className="puzzleImage" src={stageDoor} alt="stage door" />

    <div className="stageDoorLock">
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="0">
          {stageDoorCode[0]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
      </div>
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="1">
          {stageDoorCode[1]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
      </div>
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="2">
          {stageDoorCode[2]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
      </div>
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="3">
          {stageDoorCode[3]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
      </div>
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="4">
          {stageDoorCode[4]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
      </div>
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="5">
          {stageDoorCode[5]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
      </div>
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="6">
          {stageDoorCode[6]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
      </div>
      <div className="stageDoorBlock">
        <div
          className="stageDoorUp"
          onClick={(e) => {
            moveLetterUp(e.target.nextSibling);
          }}
        >
          ^
        </div>
        <div className="stageDoorLetter" id="7">
          {stageDoorCode[7]}
        </div>
        <div
          className="stageDoorDown"
          onClick={(e) => {
            moveLetterDown(e.target.previousSibling);
          }}
        >
          ^
        </div>
            </div>
            <button className="stageDoorEnter" onClick={checkAnswer}>Enter</button>
    </div>
    <p className="filler"></p>
  </div>
);
}

export default StageDoor;
