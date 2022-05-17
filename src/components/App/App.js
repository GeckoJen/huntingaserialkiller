
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from '../Home/index.js';
import About from "../About";
import Navbar from "../Navbar";
import NewCase from "../NewCase";
import AtTheCrimeScene from '../AtTheCrimeScene'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="newcase" element={<NewCase />} />
        <Route path="atthecrimescene" element={<AtTheCrimeScene/>}/>
      </Routes>
    </div>
  );
}

export default App;
