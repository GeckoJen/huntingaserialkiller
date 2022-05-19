import React, { useState, useEffect } from "react";
import answers from "../../../answers/answers";
import { useNavigate } from "react-router-dom";
import './insideTheBox.css'

function InsideTheBox() {

     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);

    let navigate = useNavigate();
    
    const [hint, setHint] = useState("");
    const [answer, setAnswer] = useState("");

    function checkAnswer(event) {
        event.preventDefault();
        const trimmedAnswer = answer.toLowerCase().trim()
        if (trimmedAnswer === answers.insideTheBox) {
            navigate("../thenextcrimescene");
        }
        else {
            setHint("Nope, that's not correct, try again!");
            setTimeout(() => {
              setHint("");
              setAnswer("");
            }, 2000);
        }
    }

  return (
    <div className="page">
      <h2>Inside the Box</h2>
      <p>
        Inside the box is nothing but a note taped to the lid. It seems to be
        addressed to you, from the killer. He is challenging you to find his
        latest victim.
      </p>

      <p className="puzzleImage boxNote">
        -So#hot.shot.detective.I.hear#you.are#new-in.town#What.do#you-think.of.my-latest#masterpiece-it#is-quite-the#work.of.art-even#if.I-do.say#so-myself.I.don't#rate.your#chances.of-solving.this#murder.before-I-find#my.next.victim#None.of-the.others.have#shown.the-least.spark.of#ingenuity-in.trying.to.track#me.down#Why.do-you#think-you#will.fare.any.better-lets-see#how-clever-you.really.are.can#you.work-out#where.to-go.to#find-my.next-victim#you.don't.have.much#time-left#to.figure-it.out#so.catch#me.if#you-can#
      </p>

      <form onSubmit={checkAnswer}>
        <p>
          {" "}
          The killer is taunting you. But can you keep a clear head and work out
          the address where the next victim will be found? Enter the address below and then click submit.
        </p>
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

export default InsideTheBox;
