import React, {useState, useEffect} from 'react';
import cipherNote from '../../../images/columncipher.png';
import answers from '../../../answers/answers';
import { useNavigate } from "react-router-dom";

function TheNextBody({moveOnStoryPart, changePart, getUserInfo, displayTimer}) {

     useEffect(() => {
       window.scrollTo(0, 0);
       moveOnStoryPart(window.location.pathname);
       changePart("Part 1");
              getUserInfo();
              displayTimer(true);
     }, []);

       let navigate = useNavigate();

    const [answer, setAnswer] = useState('')
    const [hint, setHint] = useState('')

    function checkAnswer(event) {
         event.preventDefault();
        const trimmedAnswer = answer.toLowerCase().trim();
        if (trimmedAnswer === answers.theNextBody) {
          navigate("../goinghome");
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
      <h2>The Next Body</h2>
      <p>
        Having successfully defused the bomb, you walk onwards towards the
        kitchen and find the body. Just above where it lies there is another
        note from the killer.
      </p>
      <img className="puzzleImage" src={cipherNote} alt="coded clue" />
      <form onSubmit={checkAnswer}>
        <p className="centreText"> What does the note say?</p>
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

export default TheNextBody