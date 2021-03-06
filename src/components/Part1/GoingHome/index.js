import React, {useState, useEffect} from 'react';
import radioCrypticClue from '../../../images/radiocrypticclue.png';
import answers from "../../../answers/answers";
import { useNavigate } from "react-router-dom";

function GoingHome({moveOnStoryPart, changePart, getUserInfo, displayTimer}) {

     useEffect(() => {
       window.scrollTo(0, 0);
       moveOnStoryPart(window.location.pathname);
       changePart("Part 1");
       getUserInfo();
       displayTimer(true);
     }, []);

           let navigate = useNavigate();

           const [answer, setAnswer] = useState("");
           const [hint, setHint] = useState("");

    function checkAnswer(event) {
                event.preventDefault();
             const trimmedAnswer = answer.toLowerCase().trim().split(' ').join('');
             if (trimmedAnswer === answers.goingHome) {
               navigate("../thecodekiller");
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
      <h2>Going Home</h2>
      <p>"See you at home detective"? That sounds ominous.</p>
      <p>
        Alarmed for the safety of your family, you immediately head to your
        house. Arriving at a run, you are relieved to find that everything
        appears to be quiet and undisturbed. Your family is safe inside. You are
        in the process of preparing to move them to a safe house, when a dark
        van pulls up outside, with a masked figure inside. You decide instead to
        shut your family safely in the panic room, while you deal with the
        killer.
      </p>
      <p>
        You take out your radio to call for back up, only to discover that it
        doesn't seem to be working. You look out of the window and see the
        masked killer, still sitting in his van, slowly waving a signal jammer.
      </p>
      <p>
        Suddenly your radio crackles into life. It's receiving a message from
        the killer.
      </p>
      <img className="puzzleImage" src={radioCrypticClue} alt="cryptic clue" />
      <form onSubmit={checkAnswer}>
        <p className="centreText"> What is the answer to the riddle?</p>
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

export default GoingHome