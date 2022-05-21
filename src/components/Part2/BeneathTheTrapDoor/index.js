import React, {useState, useEffect} from 'react'
import bodyImage from '../../../images/undertrapdoorbody.jpg'
import triangleBoxPuzzle from '../../../images/trinagleboxpuzzle.png';
import './beneathTheTrapDoor.css';
import answers from '../../../answers/answers';
import { useNavigate } from "react-router-dom";


function BeneathTheTrapDoor({moveOnStoryPart, changePart}) {
      useEffect(() => {
        window.scrollTo(0, 0);
        moveOnStoryPart(window.location.pathname);
        changePart("Part 2");
      }, []);

      let navigate = useNavigate();

    const [triangleBoxDigits, setTriangleBoxDigits] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [hint, setHint] = useState("");
  
    function rotateDigits(button) {
        const index = Number(button.id);
        setTriangleBoxDigits([...triangleBoxDigits.slice(0, index), (triangleBoxDigits[index]+1)%10, ...triangleBoxDigits.slice(index+1)])
    }

  function checkAnswer(event) {
    event.preventDefault();

        if (triangleBoxDigits.join("") === answers.beneathTheTrapdoor) {
          navigate("../theboxopens");
        } else {
          setHint("Nope, that's not correct, try again!");
          setTimeout(() => {
            setHint("");
          }, 2000);
        }
    }

  return (
    <div className="page">
      <h2>Beneath the Trap Door</h2>
      <p>
        You make your way to the main theatre auditorium and hunt on the stage
        for a trapdoor. You find it, open it, and shine your torch down into the
        space below.
      </p>
      <p>
        A body is lying on the floorboards underneath you. It looks like he's
        been dead for some time. You wonder if he was still alive when the Code
        Killer sent you the letter, or if he was already dead by then.
      </p>
      <img
        className="puzzleImage"
        src={bodyImage}
        alt="crime scene under the trap door"
      />
      <p>
        Jumping down carefully through the trapdoor, you examine the area around
        the body for clues. As you suspected, there's a locked box on the ground
        a short distance from the body.
      </p>
      <img
        className="puzzleImage"
        id="triangleBoxImage"
        src={triangleBoxPuzzle}
        alt="box puzzle"
      />
      <div className="triangleBoxLock">
        <button
          className="triangleBoxNumber"
          id="0"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[0]}
        </button>
        <button
          className="triangleBoxNumber"
          id="1"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[1]}
        </button>
        <button
          className="triangleBoxNumber"
          id="2"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[2]}
        </button>
        <button
          className="triangleBoxNumber"
          id="3"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[3]}
        </button>
        <button
          className="triangleBoxNumber"
          id="4"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[4]}
        </button>
        <button
          className="triangleBoxNumber"
          id="5"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[5]}
        </button>
        <button
          className="triangleBoxNumber"
          id="6"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[6]}
        </button>
        <button
          className="triangleBoxNumber"
          id="7"
          onClick={(e) => {
            rotateDigits(e.target);
          }}
        >
          {triangleBoxDigits[7]}
        </button>
        <button className="triangleBoxEnterButton" onClick={checkAnswer}>
          Enter
        </button>
      </div>
      <p className="centreText hint">{hint}</p>
      <p className="centreText">What's the code to unlock the box?</p>
      <p className="filler"></p>
    </div>
  );
}

export default BeneathTheTrapDoor