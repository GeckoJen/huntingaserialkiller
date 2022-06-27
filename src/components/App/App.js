import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import useInterval from "../../hooks/useInterval";
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
import InsideTheTheatre from "../Part2/InsideTheTheatre";
import BeneathTheTrapDoor from "../Part2/BeneathTheTrapDoor";
import TheBoxOpens from "../Part2/TheBoxOpens";
import FriarsRoad from "../Part2/FriarsRoad";
import InsideFriarsRoad from "../Part2/InsideFriarsRoad";
import InTheLivingRoom from "../Part2/InTheLivingRoom";
import InTheGarden from "../Part2/InTheGarden";

import ExaminingTheBody from "../Part2/ExaminingTheBody";
import ATwistInTheTale from "../Part2/ATwistInTheTale";
import AtTheHospital from "../Part2/AtTheHospital";
import CodeKillerRevealed from "../Part2/CodeKillerRevealed";
import EndOfPart2 from "../Part2/EndOfPart2";
import TheAftermath from "../Part3/TheAftermath";
import TheVictims from "../Part3/TheVictims";
import CalumHoddle from "../Part3/CalumHoddle";
import DecodingTheMotive from "../Part3/DecodingTheMotive";
import MotiveRevealed from "../Part3/MotiveRevealed";
import CodeKillerIdentity from "../Part3/CodeKillerIdentity";
import ItsABomb from "../Part3/ItsABomb";
import Kaboom from "../Part3/Kaboom";
import GrandFinale from "../Part3/GrandFinale";
import Finish from "../Part3/Finish";
import EndOfPart3 from "../Part3/EndOfPart3";
import Stats from "../Stats";

function App() {
  // const url = `http://localhost:3001/codekiller`;
  const url = `https://escaperoomsdata.herokuapp.com/codekiller`;

  const [part, setPart] = useState("Welcome, Detective");

  function changePart(text) {
    setPart(text);
  }

  const [startTime, setStartTime] = useState("0");
  const [timeElapsed, setTimeElapsed] = useState("");

  useInterval(function () {
    if (startTime !== "0") {
      const currentDate = new Date();
      const timeNow = Number(currentDate.getTime());
      const lengthOfTime = Math.floor((timeNow - startTime) / 1000);
      const hours = Math.floor(lengthOfTime / 3600);
      const minutes = Math.floor((lengthOfTime % 3600) / 60);
      const seconds = Math.floor(lengthOfTime % 60);
      setTimeElapsed(`${hours}h ${minutes}m ${seconds}s`);
    }
  }, 1000);

  async function updateUser(columnName, info) {
    const userId = localStorage.getItem("codekillerUserId");
    const data = { column: columnName, update: info };

    if (data.column === "start_time" && startTime === "0") {
      const response = await fetch(`${url}/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } else if (data.column !== "start_time") {
      const response = await fetch(`${url}/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }
  }

  async function getUserInfo() {
    if (localStorage.codekillerUserId) {
      const userId = localStorage.getItem("codekillerUserId");
      const response = await fetch(`${url}/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setStartTime(data.payload[0].start_time);
setCurrentPuzzle(data.payload[0].current_page)
      return data;
    }
  }

  const [showTimer, setShowTimer] = useState(false);

  function displayTimer(value) {
    setShowTimer(value);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  async function recordHints(button, puzzleNumber) {
    if (button.disabled === false) {
      if (
        button.innerText === "Nudge" &&
        !localStorage[`Nudge${puzzleNumber}`]
      ) {
        await updateUser("nudges", "plus 1");
      } else if (
        button.innerText === "Help" &&
        !localStorage[`Help${puzzleNumber}`]
      ) {
        await updateUser("helps", "plus 1");
      } else if (
        button.innerText === "Answer" &&
        !localStorage[`Answer${puzzleNumber}`]
      ) {
        await updateUser("answers", "plus 1");
      }
      localStorage.setItem(`${button.innerText}${puzzleNumber}`, true);
      button.nextSibling.style.display = "block";
      button.disabled = true;
    }
  }

  const [currentPuzzle, setCurrentPuzzle] = useState("");

  async function moveOnStoryPart(pageName) {
    const pageReached = pageName.slice(1);
    await updateUser("current_page", pageReached);
    setCurrentPuzzle(pageReached);
  }

  async function storePartData(partNumber) {
    const data = await getUserInfo();
    const userData = data.payload[0];
    const timeColumn = `part${partNumber}_time`;
    const hintsColumn = `part${partNumber}_hints`;
    const timeTaken = (userData.end_time - userData.start_time) / 1000;
    const timeInfo = `${Math.floor(timeTaken / 3600)}h ${Math.floor(
      (timeTaken % 3600) / 60
    )}m ${Math.floor(timeTaken % 60)}s`;
    const hintsInfo = {
      nudges: userData.nudges,
      helps: userData.helps,
      answers: userData.answers,
    };
    await updateUser(timeColumn, timeInfo);
    await updateUser(hintsColumn, hintsInfo);
  }

  async function createUser() {
    const data = { userId: localStorage.getItem("codekillerUserId") };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async function resetDataForNewPart() {
    let userId;
    if (!localStorage.codekillerUserId) {
      userId = uuidv4();
      localStorage.setItem("codekillerUserId", userId);
      createUser();
    } else {
      userId = localStorage.getItem("codekillerUserId");
    }

    const data = { column: "start_time", update: new Date().getTime() };

    await fetch(`${url}/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await updateUser("end_time", 0);
    await updateUser("nudges", 0);
    await updateUser("helps", 0);
    await updateUser("answers", 0);
  }

  return (
    <div>
      <Navbar
        part={part}
        timeElapsed={timeElapsed}
        showTimer={showTimer}
        currentPuzzle={currentPuzzle}
      />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                changePart={changePart}
                url={url}
                updateUser={updateUser}
                displayTimer={displayTimer}
                createUser={createUser}
                resetDataForNewPart={resetDataForNewPart}
                currentPuzzle={currentPuzzle}
                moveOnStoryPart={moveOnStoryPart}
              />
            }
          />
          <Route
            path="stats"
            element={
              <Stats
                url={url}
                currentPuzzle={currentPuzzle}
                resetDataForNewPart={resetDataForNewPart}
                changePart={changePart}
                part={part}
              />
            }
          />
          <Route
            path="newcase"
            element={
              <NewCase
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="atthecrimescene"
            element={
              <AtTheCrimeScene
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="insidethebox"
            element={
              <InsideTheBox
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="thenextcrimescene"
            element={
              <TheNextScene
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="insidethehouse"
            element={
              <InsideTheHouse
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="thenextbody"
            element={
              <TheNextBody
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="goinghome"
            element={
              <GoingHome
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="thecodekiller"
            element={
              <CodeKiller
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                updateUser={updateUser}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
                storePartData={storePartData}
              />
            }
          />
          <Route
            path="theend"
            element={
              <TheEnd
                changePart={changePart}
                moveOnStoryPart={moveOnStoryPart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
                storePartData={storePartData}
                resetDataForNewPart={resetDataForNewPart}
              />
            }
          />
          <Route
            path="returnofthecodekiller"
            element={
              <ReturnOfTheCodeKiller
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="stagedoor"
            element={
              <StageDoor
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="insidethetheatre"
            element={
              <InsideTheTheatre
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="beneaththetrapdoor"
            element={
              <BeneathTheTrapDoor
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="theboxopens"
            element={
              <TheBoxOpens
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="friarsroad"
            element={
              <FriarsRoad
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="insidefriarsroad"
            element={
              <InsideFriarsRoad
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />

          <Route
            path="inthelivingroom"
            element={
              <InTheLivingRoom
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="inthegarden"
            element={
              <InTheGarden
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="examiningthebody"
            element={
              <ExaminingTheBody
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="atwistinthetale"
            element={
              <ATwistInTheTale
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="atthehospital"
            element={
              <AtTheHospital
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="thecodekillerrevealed"
            element={
              <CodeKillerRevealed
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                updateUser={updateUser}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
                storePartData={storePartData}
              />
            }
          />

          <Route
            path="endofpart2"
            element={
              <EndOfPart2
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                updateUser={updateUser}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
                storePartData={storePartData}
                resetDataForNewPart={resetDataForNewPart}
              />
            }
          />

          <Route
            path="part3"
            element={
              <TheAftermath
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="thevictims"
            element={
              <TheVictims
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="calumhoddle"
            element={
              <CalumHoddle
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="decodingthemotive"
            element={
              <DecodingTheMotive
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="motiverevealed"
            element={
              <MotiveRevealed
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="codekilleridentity"
            element={
              <CodeKillerIdentity
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />

          <Route
            path="itsabomb"
            element={
              <ItsABomb
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="kaboom"
            element={
              <Kaboom
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="grandfinale"
            element={
              <GrandFinale
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
          <Route
            path="finish"
            element={
              <Finish
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                updateUser={updateUser}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
                storePartData={storePartData}
              />
            }
          />
          <Route
            path="endofpart3"
            element={
              <EndOfPart3
                moveOnStoryPart={moveOnStoryPart}
                changePart={changePart}
                updateUser={updateUser}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
                storePartData={storePartData}
                resetDataForNewPart={resetDataForNewPart}
              />
            }
          />
          <Route
            path="hints"
            element={
              <Hints
                recordHints={recordHints}
                getUserInfo={getUserInfo}
                displayTimer={displayTimer}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
