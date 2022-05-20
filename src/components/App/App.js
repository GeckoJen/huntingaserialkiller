import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from '../Home/index.js';
import Navbar from "../Navbar";
import NewCase from "../Part1/NewCase";
import AtTheCrimeScene from '../Part1/AtTheCrimeScene';
import InsideTheBox from "../Part1/InsideTheBox";
import TheNextScene from "../Part1/TheNextScene";
import InsideTheHouse from "../Part1/InsideTheHouse";
import TheNextBody from '../Part1/TheNextBody';
import GoingHome from "../Part1/GoingHome";
import CodeKiller from "../Part1/CodeKiller";
import TheEnd from "../Part1/TheEnd";
import Hints from '../Hints';

function App() {

  const [part, setPart] = useState("Welcome, Detective");
  const [hintsUsed, setHintsUsed] = useState({ Nudge: 0, Help: 0, Answer: 0 })
  
  const [storyPartReached, setStoryPartReached] = useState({
    "newcase": false,
    "atthecrimescene": false,
    "insidethebox": false,
    "thenextcrimescene": false,
    "insidethehouse": false,
    "thenextbody": false,
    "goinghome": false,
    "thecodekiller": false,
  });

  function changePart(text) {
    setPart(text);
  }

  function recordHints(button) {
    if (button.disabled === false) {
      setHintsUsed({ ...hintsUsed, [button.innerText]: hintsUsed[button.innerText] + 1 });
      button.nextSibling.style.display = "block";
      button.disabled = true;
    };
    
    console.log(hintsUsed)
  }

  function moveOnStoryPart(pageName) {
    const pageReached = pageName.slice(1)
    setStoryPartReached({ ...storyPartReached, [pageReached]: true });
  }

  return (
    <div>
      <Navbar part={part} storyPartReached={storyPartReached} />
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
            path="hints"
            element={
              <Hints
                recordHints={recordHints}
                storyPartReached={storyPartReached}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
