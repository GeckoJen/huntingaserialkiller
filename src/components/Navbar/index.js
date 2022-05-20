import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar({ part, storyPartReached }) {
  
const [latestPage, setLatestPage] = useState('/')

  function numPartsReached(obj) {
    let count = 0;
    for (let prop in obj) {
       if (obj[prop] === true) {
        count++;
      }
    }
    return count;
  }

  const pages = {
    0: '',
    1: "newcase",
    2: 'atthecrimescene',
    3: 'insidethebox',
    4: 'thenextcrimescene',
    5: 'insidethehouse',
    6: 'thenextbody',
    7: 'goinghome',
    8: 'thecodekiller',
  };

  useEffect(() => {
    const puzzlesComplete = numPartsReached(storyPartReached);
    console.log(puzzlesComplete);
    
    setLatestPage(`/${pages[puzzlesComplete]}`)
console.log(latestPage)
}, [storyPartReached])



  return (
    <div>
      <h3 className='partName'>{part}</h3>
      <nav className="navbar">
        <Link to="/">
          <button className="navbarButton">Home</button>{" "}
        </Link>
        <Link to="/hints">
          <button className="navbarButton">Hints</button>{" "}
        </Link>
        <Link to={latestPage}>
          <button className="navbarButton">Current puzzle</button>{" "}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar