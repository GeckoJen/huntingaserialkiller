import React, {  useEffect } from "react";
import {  Link } from "react-router-dom";

function ExaminingTheBody({
  moveOnStoryPart,
  changePart,
  getUserInfo,
  displayTimer,
}) {

        useEffect(() => {
          window.scrollTo(0, 0);
          moveOnStoryPart(window.location.pathname);
          changePart("Part 2");
          getUserInfo();
          displayTimer(true);
        }, []);


    

    return (
      <div className="page">
        <h2>Examining the Body</h2>
        <p>
          You slot the final piece into place just as you hear the creak of a
          cage door opening. Relieved that you are now safe from the ferocious
          dogs, you turn your attention to the body lying on the ground behind
          you. To your astonishment, you discover that the man is still alive,
          though unconscious. Did the Code Killer just make his first mistake?
          Or is this all part of his plan?
        </p>
        <p>
          You call an ambulance and get the injured man (who you've identified
          as Richard Lambert, from the ID in his wallet) to hospital. Just as
          he's being lifted into the ambulance, he briefly regains
          consciousness. Quickly seizing your opportunity to question him, you
          ask if he saw the person who attacked him. He looks at you groggily,
          and nods. "I knew him," he whispers, "we were at school together. It
          was Duncan Fletcher."
        </p>
        <p>
          The paramedics shoo you away and insist that they need to get him to
          the hospital urgently. "You can follow us and talk to him again after
          surgery. This guy needs a lot of stitches, and quickly."
        </p>
        <p>
          You watch them leave and call the station to report that you have a
          potential identity for the Code Killer. But when you give the name
          Duncan Fletcher, you are met with confusion instead of jubilation.
          "Duncan Fletcher? Are you sure, Detective?" asks the voice on the
          other end of the phone. "That's the name of the very first victim of
          the Code Killer. He's been dead for a year and a half."
        </p>
        <Link to='/atwistinthetale'>
          <button>Continue</button>
        </Link>
      </div>
    );
}

export default ExaminingTheBody;
