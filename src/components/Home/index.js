import React, {useEffect} from 'react';
import './home.css';
import { Link } from "react-router-dom";

function Home({changePart}) {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        changePart('Welcome, Detective')
    }, [])
    


  return (
    <div className="page">
      <h1>Hunting a Serial Killer</h1>
      <h2>A virtual escape room mystery in three parts</h2>

      <p>
        A serial killer is at large and the local police force is stumped.
        You've been brought in to share your expertise. But as you begin to
        investigate, you realise that this is no ordinary case.
      </p>
      <p>
        This killer likes to play games, and it seems that he thinks he's
        finally found a worthy opponent in you. You're drawn into a bizarre
        cat-and-mouse chase that might have deadly consequences for you and your
        family, unless you can stop him in time...
      </p>
<h3>Don't refresh the page during the game or you might lose your progress</h3>
      <Link to="/newcase">
        <button
          onClick={(e) => {
            changePart(e.target.innerText);
          }}
        >
          Part 1
        </button>
      </Link>
      <Link to="/returnofthecodekiller">
        <button
          onClick={(e) => {
            changePart(e.target.innerText);
          }}
        >
          Part 2
        </button>
      </Link>
      <Link to="/part3">
        <button
          onClick={(e) => {
            changePart(e.target.innerText);
          }}
        >
          Part 3
        </button>
      </Link>
    </div>
  );
}

export default Home