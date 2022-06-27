import React, { useState } from "react";
import compass from "../../../images/compass.png";
import "./policemap.css";

function PoliceMap({ updateSquare }) {
  const gridRow = new Array(12).fill("square");
  const initialGrid = new Array(12).fill(gridRow);

  const [grid, setGrid] = useState(initialGrid);

  const [timedOut, setTimedOut] = useState(false);
  const [message, setMessage] = useState("");

  function alertMessage() {
    setMessage("Please wait 10 seconds before selecting another square");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  function selectSquare(square) {
    let coordinates = square.id.split(",");
    coordinates = [Number(coordinates[0]), Number(coordinates[1])];


    if (!timedOut) {
      updateSquare(coordinates);
      const rowIndex = coordinates[1];
      const columnIndex = coordinates[0];
      setGrid([
        ...initialGrid.slice(0, rowIndex),
        [
          ...initialGrid[rowIndex].slice(0, columnIndex),
          "selected",
          ...initialGrid[rowIndex].slice(columnIndex + 1),
        ],
        ...initialGrid.slice(rowIndex + 1),
      ]);
      setTimedOut(true);
      setTimeout(() => {
        setTimedOut(false);
      }, 10000);
    }
    else {
        alertMessage();
    }
  }

  return (
    <div className="wholePaper">
      <div className="mapHeader">
        <h2>Swinbourne Police Station</h2>
        <img className="compass" src={compass} alt="compass"></img>
      </div>
      <div className="mapGrid">
        {grid.map((row, indexR) => {
          return (
            <div className="gridRow" key={indexR}>
              {row.map((square, indexS) => {
                return (
                  <div
                    className={square}
                    key={indexS * 10}
                    id={[indexS, indexR]}
                    onClick={(e) => selectSquare(e.target)}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
      <p className="message">{message}</p>
    </div>
  );
}

export default PoliceMap;
