import React, {useState} from 'react';
import './newcase.css';
import { useNavigate } from "react-router-dom";
import answers from '../../answers/answers';

function NewCase() {
    let navigate = useNavigate();

    const [answer, setAnswer] = useState('');
    const [hint, setHint] = useState('');

    function checkAnswer(event) {
        event.preventDefault();
        const receivedAnswer = answer.toLowerCase().trim();
        if (receivedAnswer === answers.newCase) {
            navigate("../atthecrimescene")
        } else {
            setHint("Nope, that's not correct, try again!")
            setTimeout(() => { setHint(''); setAnswer('') }, 2000);
        }
    }

  return (
    <div>
      <h2>Hunting a Serial Killer: Part 1</h2>
      <p>
        You are a detective who has just been transferred to a new town where a
        serial killer is at large. Seven bodies have been found so far, and the
        existing police force has no clue who the killer is or where or when he
        will strike next.
      </p>
      <p>
        One grim Tuesday evening, the call comes in that another body has been
        found. This is the view that greets you when you arrive at the scene.
      </p>
      <div className="image"></div>
      <form onSubmit={checkAnswer}>
          <p className="centreText"> What's your first course of action?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        
      />
      <button type="submit">Submit</button>
          <p className="centreText">{hint}</p>
          </form>
    </div>
  );
}

export default NewCase