
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from '../Home/index.js';
// import Navbar from "../Navbar";
import NewCase from "../Part1/NewCase";
import AtTheCrimeScene from '../Part1/AtTheCrimeScene';
import InsideTheBox from "../Part1/InsideTheBox";
import TheNextScene from "../Part1/TheNextScene";
import InsideTheHouse from "../Part1/InsideTheHouse";
import TheNextBody from '../Part1/TheNextBody';
import GoingHome from "../Part1/GoingHome";
import CodeKiller from "../Part1/CodeKiller";
import TheEnd from "../Part1/TheEnd";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newcase" element={<NewCase />} />
        <Route path="atthecrimescene" element={<AtTheCrimeScene />} />
        <Route path="insidethebox" element={<InsideTheBox />} />
        <Route path="thenextcrimescene" element={<TheNextScene />} />
        <Route path="insidethehouse" element={<InsideTheHouse />} />
        <Route path="thenextbody" element={<TheNextBody />} />
        <Route path="goinghome" element={<GoingHome />} />
        <Route path="thecodekiller" element={<CodeKiller />} />
        <Route path="theend" element={<TheEnd/>}/>
      </Routes>
    </div>
  );
}

export default App;
