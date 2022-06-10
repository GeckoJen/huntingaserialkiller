import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import childrensWard from "../../../images/childrensward.jpg";
import lockImage from '../../../images/sea land sky lock.jpg';
import answers from '../../../answers/answers';
import './atthehospital.css';

function AtTheHospital({
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

const [doorLockCode, setDoorLockCode] = useState([0, 0, 0, 0]);

function checkAnswer(e) {
  e.preventDefault();
  if (doorLockCode.join("") === answers.atTheHospital) {
    navigate("../thecodekillerrevealed");
  } else {
    setHint("Nope, that's not correct, try again!");
    setTimeout(() => {
      setHint("");
    }, 2000);
  }
}

function rotateDigits(button) {
  const id = Number(button.id);
  setDoorLockCode([
    ...doorLockCode.slice(0, id),
    (doorLockCode[id] + 1) % 10,
    ...doorLockCode.slice(id + 1),
  ]);
}


    return (
      <div className="page">
        <h2>At the Hospital</h2>
        <p>
          Your head whirling with possibilities, you head slowly to the
          hospital. You can't be sure what the truth of the matter is, but
          either way you need to keep a close eye on Richard Lambert. Either
          he's the Code Killer, or he's someone the Code Killer really wants
          dead. But how can you find out which?{" "}
        </p>
        <p>
          When you get to the hospital, Richard is just coming out of surgery.
          You suggest that they put him in a private room, where police guards
          can be posted outside to keep an eye on things. You then get to work
          on hatching your plan.
        </p>
        <p>
          You decide to lay a little trap for the Code Killer. You let it be
          known around the hospital that you've finally found some cast-iron,
          incriminating evidence that will be crucial in putting away the Code
          Killer for good. Until you have chance to log it at the station,
          you've locked it in a secure safe in the room next to Richard
          Lambert's.{" "}
        </p>
        <p>
          If the Code Killer comes to the hospital (or if the Code Killer is
          already in the hospital), he won't be able to resist trying to solve
          the clue to the lock and take a look at the evidence in the safe.
          Inside the safe is a camera, ready to record the face of anybody who
          opens the door. The camera is linked to your phone so you will
          immediately receive any photo it takes.
        </p>
        <p>
          This is the view of the wall outside Richard Lambert's hospital room:
        </p>
        <img
          className="puzzleImage hospitalImage"
          src={childrensWard}
          alt="tiled wall of the children's ward"
        />
        <p>
          And this is the safe where you have "hidden" the Code Killer evidence:
        </p>
        <img className="puzzleImage hospitalImage hospitalSafe" src={lockImage} alt="locked box" />
        <div className="safeLockNumbers">
          <button
            className="safeLockSquare"
            id="0"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[0]}
          </button>

          <button
            className="safeLockSquare"
            id="1"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[1]}
          </button>

          <button
            className="safeLockSquare"
            id="2"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[2]}
          </button>

          <button
            className="safeLockSquare"
            id="3"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[3]}
          </button>
        </div>
        <form onSubmit={checkAnswer}>
          <p className="centreText hint">{hint}</p>
          <p className="centreText">What code have you set the safe to?</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default AtTheHospital;
