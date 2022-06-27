import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import kaboom from '../../../images/kaboom.png';
import './kaboom.css';
import explosion from '../../../images/Grenade-SoundBible.com-1891951294.mp3'

function Kaboom({ moveOnStoryPart, changePart, getUserInfo, displayTimer }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    moveOnStoryPart(window.location.pathname);
    changePart("Part 3");
    getUserInfo();
    displayTimer(true);
  }, []);

  const audio = new Audio(explosion);
  audio.loop = false;

  const [playSound, setPlaySound] = useState(true);

  setTimeout(() => {
    if (playSound) { audio.play() }
    setPlaySound(false);
  }, 1000);

 

  return (
    <div className="page">

      <div className="fillerKaboom"></div>
      <img className="kaboom" src={kaboom} alt="kaboom" />

      <p className="centreText">
        Oops! You failed to correctly defuse the bomb in time.{" "}
      </p>
      <Link to="/itsabomb">
        <button>Try again</button>
      </Link>
    </div>
  );
}

export default Kaboom