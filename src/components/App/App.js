
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from '../Home/index.js';
import About from "../About";
import Navbar from "../Navbar";
import NewCase from "../NewCase";
import AtTheCrimeScene from '../AtTheCrimeScene';
import InsideTheBox from "../InsideTheBox";
import TheNextScene from "../TheNextScene";
import InsideTheHouse from "../InsideTheHouse";
import TheNextBody from '../TheNextBody';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="newcase" element={<NewCase />} />
        <Route path="atthecrimescene" element={<AtTheCrimeScene />} />
        <Route path="insidethebox" element={<InsideTheBox />} />
        <Route path="thenextcrimescene" element={<TheNextScene />} />
        <Route path="insidethehouse" element={<InsideTheHouse />} />
        <Route path="thenextbody" element={<TheNextBody/>}/>
      </Routes>
    </div>
  );
}

export default App;
