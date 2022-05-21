import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/index.js";
import Navbar from "../Navbar";
import NewCase from "../Part1/NewCase";
import AtTheCrimeScene from "../Part1/AtTheCrimeScene";
import InsideTheBox from "../Part1/InsideTheBox";
import TheNextScene from "../Part1/TheNextScene";
import InsideTheHouse from "../Part1/InsideTheHouse";
import TheNextBody from "../Part1/TheNextBody";
import GoingHome from "../Part1/GoingHome";
import CodeKiller from "../Part1/CodeKiller";
import TheEnd from "../Part1/TheEnd";
import Hints from "../Hints";
import ReturnOfTheCodeKiller from "../Part2/ReturnOfTheCodeKiller";
import StageDoor from "../Part2/StageDoor";
import InsideTheTheatre from '../Part2/InsideTheTheatre';
import BeneathTheTrapDoor from "../Part2/BeneathTheTrapDoor";
import TheBoxOpens from "../Part2/TheBoxOpens";

function App() {
  const [part, setPart] = useState("Welcome, Detective");
  const [hintsUsed, setHintsUsed] = useState({ Nudge: 0, Help: 0, Answer: 0 });

  const [storyPartReachedPart1, setStoryPartReachedPart1] = useState({
    newcase: false,
    atthecrimescene: false,
    insidethebox: false,
    thenextcrimescene: false,
    insidethehouse: false,
    thenextbody: false,
    goinghome: false,
    thecodekiller: false,
  });

    const [storyPartReachedPart2, setStoryPartReachedPart2] = useState({
      returnofthecodekiller: false,
      stagedoor: false,
      insidethetheatre: false,
      beneaththetrapdoor: false,
    });
  
      const [storyPartReachedPart3, setStoryPartReachedPart3] = useState({
        page1: false,
        page2: false,
      });

  function changePart(text) {
    setPart(text);
  }

  function recordHints(button) {
    if (button.disabled === false) {
      setHintsUsed({
        ...hintsUsed,
        [button.innerText]: hintsUsed[button.innerText] + 1,
      });
      button.nextSibling.style.display = "block";
      button.disabled = true;
    }

    console.log(hintsUsed);
  }

  function moveOnStoryPart(pageName) {
    console.log(pageName)
    const pageReached = pageName.slice(1);
    if (part === "Part 1") { setStoryPartReachedPart1({ ...storyPartReachedPart1, [pageReached]: true }); }
    else if (part === "Part 2") { setStoryPartReachedPart2({ ...storyPartReachedPart2, [pageReached]: true }) }
    else if (part === "Part 3"){
      setStoryPartReachedPart3({
        ...storyPartReachedPart3,
        [pageReached]: true,
      });
    }

  }

  return (
    <div>
      <Navbar
        part={part}
        storyPartReachedPart1={storyPartReachedPart1}
        storyPartReachedPart2={storyPartReachedPart2}
        storyPartReachedPart3={storyPartReachedPart3}
      />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home changePart={changePart} />} />
          <Route
            path="newcase"
            element={
              <NewCase
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="atthecrimescene"
            element={
              <AtTheCrimeScene
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="insidethebox"
            element={
              <InsideTheBox
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="thenextcrimescene"
            element={
              <TheNextScene
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="insidethehouse"
            element={
              <InsideTheHouse
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="thenextbody"
            element={
              <TheNextBody
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="goinghome"
            element={
              <GoingHome
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="thecodekiller"
            element={
              <CodeKiller
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="theend"
            element={<TheEnd hintsUsed={hintsUsed} changePart={changePart} />}
          />
          <Route
            path="returnofthecodekiller"
            element={
              <ReturnOfTheCodeKiller
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="stagedoor"
            element={
              <StageDoor
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="insidethetheatre"
            element={
              <InsideTheTheatre
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="beneaththetrapdoor"
            element={
              <BeneathTheTrapDoor
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="theboxopens"
            element={
              <TheBoxOpens
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
              />
            }
          />
          <Route
            path="hints"
            element={
              <Hints
                recordHints={recordHints}
                storyPartReachedPart1={storyPartReachedPart1}
                storyPartReachedPart2={storyPartReachedPart2}
                storyPartReachedPart3={storyPartReachedPart3}
                part={part}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
