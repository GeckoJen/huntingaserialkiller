import React, { useState, useEffect } from "react";
import "./magnetBoard.css";
import magnetIcon from "../../images/magnet.png";
import { useNavigate } from "react-router-dom";

function MagnetBoard() {
  let navigate = useNavigate();
  const [boardClass, setBoardClass] = useState("board");

  // prettier-ignore
  const initialGameBoard = [
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'S', 'E', 'E', 'E'],
      ['E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'X', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'B', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'S', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]

  // prettier-ignore
  const losingGameBoard = [
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'S', 'E', 'E', 'E'],
      ['E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'X', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      ['E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'S', 'E', 'E', 'E'],
      ['E', 'E', 'E', 'E', 'E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ]

  //E = empty square, S = a stop, B = the ball, X = the exit/hole

  const [gameboard, setGameboard] = useState(initialGameBoard);

  function resetGameboard() {
    setBoardClass("board");
    setGameboard(initialGameBoard);
  }

  function findBallPosition() {
    let row;
    let column;
    for (let i = 0; i < 20; i++) {
      if (gameboard[i].includes("B")) {
        row = i;
        column = gameboard[i].findIndex((element) => element === "B");
        break;
      }
    }
    const ballStartPosition = [row, column];
    console.log({ ballStartPosition });
    return ballStartPosition;
  }

  function findRowAndColumnStoppers(row, column) {
    let rowStoppers = [];
    let columnStoppers = [];

    for (let i = 0; i < 20; i++) {
      if (gameboard[row][i] === "S") {
        rowStoppers.push(i);
      }
    }

    for (let i = 0; i < 20; i++) {
      if (gameboard[i][column] === "S") {
        columnStoppers.push(i);
      }
    }

    rowStoppers.push(column);
    rowStoppers.sort((a, b) => a - b);
    columnStoppers.push(row);
    columnStoppers.sort((a, b) => a - b);
    console.log({ rowStoppers });
    console.log({ columnStoppers });
    return [rowStoppers, columnStoppers];
  }

  function checkIfWon() {
    const [row, column] = findBallPosition();
    if (row === 9 && column === 10) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const won = checkIfWon();
    if (won) {
      setBoardClass("boardWin");
      setTimeout(() => {
        navigate("../thenextbody");
      }, 1500);
    }
  }, [gameboard]);

  function magnetClick(magnet) {
    console.log(magnet.id);

    const [row, column] = findBallPosition();
    const [rowStoppers, columnStoppers] = findRowAndColumnStoppers(row, column);

    const rowIndex = rowStoppers.findIndex((element) => element === column);
    const columnIndex = columnStoppers.findIndex((element) => element === row);

    console.log({ rowIndex });
    console.log({ columnIndex });

    if (magnet.id === "left" && rowIndex === 0) {
      setGameboard(losingGameBoard);
      setBoardClass("boardFail");
      setTimeout(() => {
        resetGameboard();
      }, 2000);
      return;
    } else if (
      magnet.id === "left" &&
      rowStoppers[rowIndex - 1] + 1 === column
    ) {
      return;
    } else if (magnet.id === "left") {
      setGameboard([
        ...gameboard.slice(0, row),
        [
          ...gameboard[row].slice(0, rowStoppers[rowIndex - 1] + 1),
          "B",
          ...gameboard[row].slice(rowStoppers[rowIndex - 1] + 2, column),
          "E",
          ...gameboard[row].slice(column + 1),
        ],
        ...gameboard.slice(row + 1),
      ]);

      return;
    }

    if (magnet.id === "right" && rowIndex === rowStoppers.length - 1) {
      setGameboard(losingGameBoard);
      setBoardClass("boardFail");
      setTimeout(() => {
        resetGameboard();
      }, 2000);
      return;
    } else if (
      magnet.id === "right" &&
      rowStoppers[rowIndex + 1] - 1 === column
    ) {
      return;
    } else if (magnet.id === "right") {
      setGameboard([
        ...gameboard.slice(0, row),
        [
          ...gameboard[row].slice(0, column),
          "E",
          ...gameboard[row].slice(column + 1, rowStoppers[rowIndex + 1] - 1),
          "B",
          ...gameboard[row].slice(rowStoppers[rowIndex + 1]),
        ],
        ...gameboard.slice(row + 1),
      ]);

      return;
    }

    if (magnet.id === "down" && columnIndex === columnStoppers.length - 1) {
      setGameboard(losingGameBoard);
      setBoardClass("boardFail");
      setTimeout(() => {
        resetGameboard();
      }, 2000);
      return;
    } else if (
      magnet.id === "down" &&
      columnStoppers[columnIndex + 1] - 1 === row
    ) {
      return;
    } else if (magnet.id === "down") {
      setGameboard([
        ...gameboard.slice(0, row),
        [
          ...gameboard[row].slice(0, column),
          "E",
          ...gameboard[row].slice(column + 1),
        ],
        ...gameboard.slice(row + 1, columnStoppers[columnIndex + 1] - 1),
        [
          ...gameboard[columnStoppers[columnIndex + 1] - 1].slice(0, column),
          "B",
          ...gameboard[columnStoppers[columnIndex + 1] - 1].slice(column + 1),
        ],
        ...gameboard.slice(columnStoppers[columnIndex + 1]),
      ]);

      return;
    }

    if (magnet.id === "up" && columnIndex === 0) {
      setGameboard(losingGameBoard);
      setBoardClass("boardFail");
      setTimeout(() => {
        resetGameboard();
      }, 2000);

      return;
    } else if (
      magnet.id === "up" &&
      columnStoppers[columnIndex - 1] + 1 === row
    ) {
      return;
    } else if (magnet.id === "up") {
      setGameboard([
        ...gameboard.slice(0, columnStoppers[columnIndex - 1] + 1),
        [
          ...gameboard[columnStoppers[columnIndex - 1] + 1].slice(0, column),
          "B",
          ...gameboard[columnStoppers[columnIndex - 1] + 1].slice(column + 1),
        ],
        ...gameboard.slice(columnStoppers[columnIndex - 1] + 2, row),
        [
          ...gameboard[row].slice(0, column),
          "E",
          ...gameboard[row].slice(column + 1),
        ],
        ...gameboard.slice(row + 1),
      ]);

      return;
    }
  }

  return (
    <div>
      <div id="magnetGameWhole">
        <div className="topMagnet">
          <img
            className="magnetIcon"
            id="up"
            onClick={(e) => {
              magnetClick(e.target);
            }}
            src={magnetIcon}
            alt="magnet"
          />
        </div>
        <div className="middleSection">
          <div className="leftMagnet">
            <img
              className="magnetIcon"
              id="left"
              onClick={(e) => {
                magnetClick(e.target);
              }}
              src={magnetIcon}
              alt="magnet"
            />
          </div>
          <div className={boardClass}>
            {gameboard.map((row, index) => {
              return (
                <div className="boardRow" key={index}>
                  {row.map((cell, index) => {
                    return <div className={cell} key={index}></div>;
                  })}
                </div>
              );
            })}
          </div>
          <div className="rightMagnet">
            <img
              className="magnetIcon"
              id="right"
              onClick={(e) => {
                magnetClick(e.target);
              }}
              src={magnetIcon}
              alt="magnet"
            />
          </div>
        </div>
        <div className="bottomMagnet">
          <img
            className="magnetIcon"
            id="down"
            onClick={(e) => {
              magnetClick(e.target);
            }}
            src={magnetIcon}
            alt="magnet"
          />
        </div>
      </div>
      <button id="magnetGameRestartButton" onClick={resetGameboard}>
        start over
      </button>
    </div>
  );
}

export default MagnetBoard;
