import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noteImage from "../../../images/house note.jpg";
import answers from "../../../answers/answers";
import sudoku0 from "../../../images/sudoku0.png";
import sudoku1 from "../../../images/sudoku1.png";
import sudoku2 from "../../../images/sudoku2.png";
import sudoku3 from "../../../images/sudoku3.png";
import sudoku4 from "../../../images/sudoku4.png";
import sudoku5 from "../../../images/sudoku5.png";
import sudoku6 from "../../../images/sudoku6.png";
import sudoku7 from "../../../images/sudoku7.png";
import sudoku8 from "../../../images/sudoku8.png";
import sudoku9 from "../../../images/sudoku9.png";
import upTriangle from "../../../images/triangleup.png";
import upTriangleChange from "../../../images/triangleupchange.png";
import downTriangle from "../../../images/triangledown.png";
import downTriangleChange from "../../../images/triangledownchange.png";
import allSymbols from '../../../images/sudoku1-9.png';
import sudokuArrows from '../../../images/sudokuarrows.png'
import "./insidefriarsroad.css";

function InsideFriarsRoad({
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

  const symbols = [
    { num: 0, name: sudoku0 },
    { num: 1, name: sudoku1 },
    { num: 2, name: sudoku2 },
    { num: 3, name: sudoku3 },
    { num: 4, name: sudoku4 },
    { num: 5, name: sudoku5 },
    { num: 6, name: sudoku6 },
    { num: 7, name: sudoku7 },
    { num: 8, name: sudoku8 },
    { num: 9, name: sudoku9 },

  ];

  const [sudokuTriangles, setSudokuTriangles] = useState([
    symbols[0],
    symbols[0],
    symbols[0],
    symbols[0],
    symbols[0],
    symbols[0],
    symbols[0],
    symbols[0],
    symbols[0],
  ]);

  function rotateSymbols(image) {
     let sudokuTrianglesIndex = Number(image.id);
        let currentSymbol = sudokuTriangles[sudokuTrianglesIndex];
        let symbolsIndex = Number(currentSymbol.num);
        let nextSymbolsElement = symbols.find(element => element.num === (symbolsIndex+1)%10)

       setSudokuTriangles([
         ...sudokuTriangles.slice(0, sudokuTrianglesIndex),
         nextSymbolsElement,
         ...sudokuTriangles.slice(sudokuTrianglesIndex + 1),
       ]);
  }

    const [hint, setHint] = useState("");

  const [doorLockCode, setDoorLockCode] = useState([0, 0, 0, 0, 0]);
  
      function checkAnswer(e) {
        e.preventDefault();
        if (doorLockCode.join("") === answers.insideFriarsRoad) {
          navigate("../inthelivingroom");
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
      <h2>Inside 307 Friar's Road</h2>
      <p>
        Remembering what happened last time you entered a house where the Code
        Killer had left a body for you, you enter the house exceedingly warily,
        keeping an eye out for bombs, traps and anything suspicious.
      </p>
      <p>
        You find a note attached to another lock on the door leading to a room
        at the back of the house.{" "}
      </p>
      <img className="puzzleImage" src={noteImage} alt="Note" />
      <p>
        Turning the note over, you find a curious triangular puzzle printed on
        the back.
      </p>

      <div className="triangleSudokuPuzzle">
        <div className="sudokuInstructions">
          <p>
            Click the <span className="query">?</span> to loop through the options.<br></br> Don't repeat symbols on any
            row or diagonal.
          </p>
          <img className="sudokuArrows" src={sudokuArrows} alt="arrows" />
        </div>
        <div className="sudokuRow">
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="0"
              src={sudokuTriangles[0].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
        </div>
        <div className="sudokuRow">
          <div className="upTriangle fixedImg">
            <img className="triangle" src={upTriangle} alt="triangle" />
            <img className="sudokuSymbolUp" src={sudoku8} alt="symbol" />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku9} alt="symbol" />
          </div>
          <div className="upTriangle fixedImg">
            <img className="triangle" src={upTriangle} alt="triangle" />
            <img className="sudokuSymbolUp" src={sudoku3} alt="symbol" />
          </div>
        </div>
        <div className="sudokuRow">
          <div className="upTriangle fixedImg">
            <img className="triangle" src={upTriangle} alt="triangle" />
            <img className="sudokuSymbolUp" src={sudoku7} alt="symbol" />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku1} alt="symbol" />
          </div>
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="1"
              src={sudokuTriangles[1].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku5} alt="symbol" />
          </div>
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="2"
              src={sudokuTriangles[2].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
        </div>
        <div className="sudokuRow">
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="3"
              src={sudokuTriangles[3].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku5} alt="symbol" />
          </div>
          <div className="upTriangle fixedImg">
            <img className="triangle" src={upTriangle} alt="triangle" />
            <img className="sudokuSymbolUp" src={sudoku2} alt="symbol" />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku6} alt="symbol" />
          </div>
          <div className="upTriangle fixedImg">
            <img className="triangle" src={upTriangle} alt="triangle" />
            <img className="sudokuSymbolUp" src={sudoku7} alt="symbol" />
          </div>
          <div className="downTriangle changeImg">
            <img className="triangle" src={downTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolDown"
              id="4"
              src={sudokuTriangles[4].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>

          <div className="upTriangle fixedImg">
            <img className="triangle" src={upTriangle} alt="triangle" />
            <img className="sudokuSymbolUp" src={sudoku4} alt="symbol" />
          </div>
        </div>
        <div className="sudokuRow">
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="5"
              src={sudokuTriangles[5].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku6} alt="symbol" />
          </div>
          <div className="upTriangle fixedImg">
            <img className="triangle" src={upTriangle} alt="triangle" />
            <img className="sudokuSymbolUp" src={sudoku1} alt="symbol" />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku9} alt="symbol" />
          </div>
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="6"
              src={sudokuTriangles[6].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku2} alt="symbol" />
          </div>
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="7"
              src={sudokuTriangles[7].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
          <div className="downTriangle fixedImg">
            <img className="triangle" src={downTriangle} alt="triangle" />
            <img className="sudokuSymbolDown" src={sudoku8} alt="symbol" />
          </div>
          <div className="upTriangle changeImg">
            <img className="triangle" src={upTriangleChange} alt="triangle" />
            <img
              className="sudokuSymbolUp"
              id="8"
              src={sudokuTriangles[8].name}
              alt="symbol"
              onClick={(e) => {
                rotateSymbols(e.target);
              }}
            />
          </div>
        </div>
        <img className="allsymbols" src={allSymbols} alt="all symbols" />
      </div>
      <p>
        You gaze at the puzzle for a minute, frowning. How is this going to help
        you work out the 5-digit code to unlock the padlock on the door? You'd
        better get to work.
      </p>
      <div className="doorLock">
        <div className="lockBar"></div>
        <div className="doorLockNumbers">
          <button
            className="doorLockSquare"
            id="0"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[0]}
          </button>

          <button
            className="doorLockSquare"
            id="1"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[1]}
          </button>

          <button
            className="doorLockSquare"
            id="2"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[2]}
          </button>

          <button
            className="doorLockSquare"
            id="3"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[3]}
          </button>

          <button
            className="doorLockSquare"
            id="4"
            onClick={(e) => {
              rotateDigits(e.target);
            }}
          >
            {doorLockCode[4]}
          </button>
        </div>
      </div>

      <form onSubmit={checkAnswer}>
        <p className="centreText hint">{hint}</p>
        <p className="centreText">
          What is the code to unlock the padlock into the living room?
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InsideFriarsRoad;
