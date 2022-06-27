import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import realId from '../../../images/real identity revealed christie records.jpg';
import motiveArticle from '../../../images/newspaper revealing twycross motive.jpg';
import bitly1 from '../../../images/bitly letter.jpg';
import bitly2 from '../../../images/bitly letter part 2.jpg';
import PoliceMap from "../policemap";

function CodeKillerIdentity({
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

    const [squareSelected, setSquareSelected] = useState([0, 0]);
        const [hint, setHint] = useState("");

    function updateSquare(newSelection) {
        setSquareSelected(newSelection)
    }

    function checkAnswer(event) {
      event.preventDefault();
        const receivedAnswer = squareSelected.join('');
        console.log(receivedAnswer)
      if (receivedAnswer === answers.policeMap) {
        navigate("../itsabomb");
      } else {
        setHint("Nope, that's not correct, try again!");
        setTimeout(() => {
          setHint("");
          
        }, 2000);
      }
    }

    return (
      <div className="page">
        <h2>Discovering the Code Killer's True Identity</h2>
        <p>
          Finding the transaction ID number for the Ming Dynasty vase allows
          Christie's to give you the full seller details.
        </p>
        <img
          className="puzzleImage"
          src={realId}
          alt="Records revealing true identity"
        />
        <p>
          Your heart starts to beat faster. You finally have a name for this
          bastard! You start searching for details on Martin Twycross, and come
          across this old newspaper article.
        </p>
        <img
          className="puzzleImage"
          src={motiveArticle}
          alt="Newspaper article"
        />
        <p>
          This explains his "torment" then, and also provides a reason as to why
          he's plagued the police so much, playing cat and mouse games and
          daring you to catch him. He obviously blames the police for the death
          of his wife and children.
        </p>
        <p>
          You think back to the message he left with the bodies. It finished
          with the tenth body. Maybe he's not planning any more? But he said he
          was "freeing *us* from torment" - does that mean he's planning on
          killing himself next? And what are the chances of that happening
          without him having exacted revenge on the police for the deaths of his
          family?
        </p>
        <p>
          Even more unnerved than before, you continue your search of Martin
          Twycross's records, and come across a second home he purchased shortly
          after the sale of the Ming Dynasty vase. It looks like a nice house
          (well it would be, at £1.5m), and you immediately head over there,
          with a full armed SWAT team, to find and arrest him.{" "}
        </p>
        <p>
          Disappointingly, he's not at home, so you set four teams on
          surveillance duty and head back to the station. When you get there,
          you find a note addressed to you, waiting for you on your desk.
        </p>
        <img
          className="puzzleImage"
          src={bitly1}
          alt="Letter from the Code Killer"
        />
        <img
          className="puzzleImage"
          src={bitly2}
          alt="Letter from the Code Killer"
        />
        <p>
          {" "}
          You don't like the sound of that note. It sounds ominous. Like he has
          something big planned. And you don't like the fact that he enclosed in
          the envelope a map of your police station.
        </p>
        <PoliceMap
          updateSquare={updateSquare}

        />

        <form onSubmit={checkAnswer}>
          <p className="centreText">
            {" "}
            Select the grid reference you think you need to go to, and then
            click submit below. You can only change your selected square once
            every 10 seconds, so think carefully before you choose!
          </p>
          <p className="centreText hint">{hint}</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default CodeKillerIdentity;
