import React, { useEffect, useState } from "react";
import puzzleBox from "../../images/puzzlebox.jpg";
import "./atTheCrimeScene.css";
import answers from '../../answers/answers';
import { useNavigate } from "react-router-dom";

function AtTheCrimeScene() {
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

        let navigate = useNavigate();

  const [hint, setHint] = useState("");
    
    const [puzzleBoxCode, setPuzzleBoxCode] = useState([0,0,0,0,0])
    
    
    function checkAnswer(e) {
        e.preventDefault();
        if (puzzleBoxCode.join('') === answers.atTheCrimeScene) {
            navigate("../insidethebox");
        } else {  setHint("Nope, that's not correct, try again!");
        setTimeout(() => {
          setHint("");
          
        }, 2000); }

  }

    function rotateDigits(button) {
        const id = Number(button.id);
        console.log(id);
        setPuzzleBoxCode([...puzzleBoxCode.slice(0, id), (puzzleBoxCode[id]+1)%10, ...puzzleBoxCode.slice(id+1)])
    }
    
    
    
  return (
    <div className="page">
      <h2>At The Crime Scene</h2>
      <p>
        You clap once as directed, and the sound triggers a spotlight to come
        on, illuminating a grey box on the dining table. The box appears to be
        locked - it looks like you'll need to enter a 5 digit code to open it.
      </p>

      <img
        className="puzzleImage puzzleBox"
        src={puzzleBox}
        alt="puzzle box"
      ></img>
      <div className="puzzleBoxNumbers">
        <div className="puzzleBoxCodeTopRow">
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxWhiteCircle"></div>
        </div>
        <div className="puzzleBoxCodeMiddleRow">
          <div className="puzzleBoxGreyCircle"></div>
          <button
            className="puzzleBoxSquare"
            id="0"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {puzzleBoxCode[0]}
          </button>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <button
            className="puzzleBoxSquare"
            id="1"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {puzzleBoxCode[1]}
          </button>
          <div className="puzzleBoxWhiteCircle"></div>
          <div className="puzzleBoxWhiteCircle"></div>
          <button
            className="puzzleBoxSquare"
            id="2"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {puzzleBoxCode[2]}
          </button>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <button
            className="puzzleBoxSquare"
            id="3"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {puzzleBoxCode[3]}
          </button>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <button
            className="puzzleBoxSquare"
            id="4"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {puzzleBoxCode[4]}
          </button>
          <div className="puzzleBoxGreyCircle"></div>
        </div>
        <div className="puzzleBoxCodeBottomRow">
          <div className="puzzleBoxWhiteCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
          <div className="puzzleBoxWhiteCircle"></div>
          <div className="puzzleBoxGreyCircle"></div>
        </div>
      </div>

      <form onSubmit={checkAnswer}>
        <p className="centreText">
          {" "}
          What is the code to unlock the box? Select the numbers by clicking on
          the code panel above, and then click submit when you are ready.
        </p>
        <p className="centreText hint">{hint}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AtTheCrimeScene;
