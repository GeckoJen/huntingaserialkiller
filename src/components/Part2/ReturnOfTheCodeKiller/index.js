import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import initialNote from '../../../images/initial note.jpg';
import answers from '../../../answers/answers'

function ReturnOfTheCodeKiller({ moveOnStoryPart, changePart, getUserInfo, displayTimer }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    moveOnStoryPart(window.location.pathname);
    changePart("Part 2");
    getUserInfo();
    displayTimer(true);
  }, []);


  let navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [hint, setHint] = useState("");

  function checkAnswer(event) {
    event.preventDefault();
    const receivedAnswer = answer.toLowerCase().trim();
    if (
      receivedAnswer === answers.returnOfCodeKiller ||
      receivedAnswer.includes(answers.returnOfCodeKiller)
    ) {
      navigate("../stagedoor");
    } else {
      setHint("Nope, that's not correct, try again!");
      setTimeout(() => {
        setHint("");
        setAnswer("");
      }, 2000);
    }
  }

  return (
    <div className="page">
      <h2>Part 2: The Return of the Code Killer</h2>
      <p>
        It's been 9 months since the last victim of the Code Killer was
        discovered. You've had a relatively quiet time of it since then. Oh
        sure, there have been a few dead bodies turn up in the meantime, but
        they've been straightforward; tragic, obviously, but no mystery to them.
        Gang violence, domestic disputes, traffic accidents. Your standard,
        run-of-the-mill, it's-obvious-who-dunnit deaths.{" "}
      </p>
      <p>
        But you've not been able to relax properly, in all that time. You've
        always known that the Code Killer wasn't finished yet. That he'd come
        back, to continue his killing spree, to taunt you with his ridiculous
        clues and puzzles, making you play his game. It isn't a game though. You
        have to stop him.
      </p>
      <p>
        And then, one morning, you get a letter from him. At first glance it
        appears to be nonsense, but you know the Code Killer. There'll be a
        message in there for you somewhere. Probably bragging about his latest
        kill. Possibly giving a location of the body. Whatever it says, you know
        you'll have to be quick. The Code Killer likes to stay just one step
        ahead of you, with new victims lined up before you've even got to the
        first crime scene. The longer you take to solve his puzzles, the more
        bodies will start piling up. You swallow the last mouthful of your
        coffee and scrutinise the note carefully. What is the Code Killer trying
        to tell you?
      </p>
      <img className="puzzleImage" src={initialNote} alt="coded note" />
      <form onSubmit={checkAnswer}>
        <p className="centreText"> Where should you go now?</p>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <p className="centreText hint">{hint}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReturnOfTheCodeKiller