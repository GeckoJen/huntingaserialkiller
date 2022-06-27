import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import christies from '../../../images/christie tea stained records.jpg';

function MotiveRevealed({
  moveOnStoryPart,
  changePart,
  getUserInfo,
  displayTimer,
}) {
     useEffect(() => {
       window.scrollTo(0, 0);
       moveOnStoryPart(window.location.pathname);
       changePart("Part 3");
       getUserInfo();
       displayTimer(true);
     }, []);

    let navigate = useNavigate();

    const [answer, setAnswer] = useState("");
    const [hint, setHint] = useState("");

    function checkAnswer(event) {
      event.preventDefault();
      const receivedAnswer = answer.toLowerCase().trim();
      if (receivedAnswer === answers.mingvase) {
        navigate("../codekilleridentity");
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
        <h2>The Code Killer's Motive</h2>
        <h3>
          "We have all lost love and purpose. I am freeing us from torment."
        </h3>
        <p>
          It sounds like the Code Killer thinks he's doing his victims a favour.
          They were all either widowed or divorced, as you noted before. Strange
          use of "we" and "us" though. Is he including himself in the category
          of men who have lost love and purpose, and are living in torment? It
          seems likely, but unfortunately isn't enough to go on, without any
          clue as to his true identity.
        </p>
        <p>
          You drum your fingers on the table, as you stare again at the crime
          scene photos, hunting for inspiration.
        </p>
        <p>
          You look again at Calum Hoddle's file. The newspaper refers to two
          Ming Dynasty vases going up for auction at Christie's. It looks like
          one of them was broken during the murder. What happened to the other?
          You hurriedly look through the file and at the inventory of items
          found at the house. The other vase was not there.
        </p>
        <p>
          Maybe the Code Killer, realising how valuable it was, took it and sold
          it himself? He would have had to provide his real name to the auction
          house, due to money laundering regulations. You quickly call up
          Christie's and ask if they have records of a Ming Dynasty vase being
          auctioned off around the time of Calum Hoddle's murder.
        </p>
        <p>
          The lady you speak to at Christie's confirms that yes, indeed, there
          was a Ming Dynasty vase auctioned around that time, but that
          unfortunately, she can't tell you the details of the seller, because a
          tea stain is obliterating the transaction ID number, which is required
          to access the seller details. She invites you over to have a look.
        </p>
        <img className="puzzleImage" src={christies} alt="Christie's records" />
        <form onSubmit={checkAnswer}>
          <p className="centreText">
            {" "}
            What is the transaction ID number for the Ming Dynasty Vase?
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

export default MotiveRevealed;
