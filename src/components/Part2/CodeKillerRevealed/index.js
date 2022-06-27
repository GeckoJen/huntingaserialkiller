import React, {  useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import finalNote from '../../../images/final note.jpg'
import redRose from '../../../images/redrosefarewell.png'

function CodeKillerRevealed({
  moveOnStoryPart,
  changePart,
  getUserInfo,
  displayTimer,
  updateUser,
  storePartData,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    moveOnStoryPart(window.location.pathname);
    changePart("Part 2");
    getUserInfo();
    displayTimer(true);
  }, []);
    
      let navigate = useNavigate();
    
    async function finishPart() {
       const currentDate = new Date();
       const endtimeTimeStamp = currentDate.getTime();
       await updateUser("end_time", endtimeTimeStamp);
       displayTimer(false);
      storePartData(2);
      setTimeout(() => {
        navigate("../endofpart2");
      }, 1000)
       
       
    }

  return (
    <div className="page">
      <h2>The Code Killer Revealed?</h2>
      <p>
        For several hours, nothing happens. You start to worry whether you've
        got it wrong, and the Code Killer isn't here and won't be coming.
      </p>
      <p>
        And then, at long last, your phone pings and you eagerly grab it while
        directing the officers standing on guard to swoop in on the safe room
        and catch whoever it is that's opened the safe. Impatiently, you key in
        your unlock code and wait, on tenterhooks, for the phone to reveal the
        picture.
      </p>
      <p>
        But when the picture materialises, it's not a face that you see. It's a
        note.{" "}
      </p>
      <img
        className="puzzleImage"
        src={finalNote}
        alt="final note from the code killer"
      />
      <div>
        <p>
          You run towards the room where Richard Lambert was recovering from
          surgery. The bed is empty, wires from the monitors lying abandoned on
          the sheets. The window is open, and it seems that he's escaped while
          attention was diverted to the room next door.{" "}
        </p>
        <p>
          Furious that he got away, you turn to go, but then stop when you see
          something lying on the table beside his bed. It's a single red rose,
          and a farewell note...
        </p>
        <img
          className="puzzleImage"
          src={redRose}
          alt="farewell from the code killer"
        />
      </div>
      
        <button onClick={finishPart}>Continue</button>
      
    </div>
  );
}

export default CodeKillerRevealed;
