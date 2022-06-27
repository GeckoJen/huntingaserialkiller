import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import paper from "../../../images/final newspaper article.jpg";

function Finish({
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
    changePart("Part 3");
    getUserInfo();
    displayTimer(true);
  }, []);
    
    let navigate = useNavigate();
    
        async function finishPart() {
          const currentDate = new Date();
          const endtimeTimeStamp = currentDate.getTime();
          await updateUser("end_time", endtimeTimeStamp);
          displayTimer(false);
            storePartData(3);
            setTimeout(() => {
                navigate("../endofpart3");
            }, 1000)
          
        }


  return (
    <div className="page">
      <h2>Conclusion</h2>
      <p>
        You manage to surreptitiously attract the attention of the sniper, who
        is able to reposition herself to take a shot at the Code Killer. She
        takes careful aim, and shoots him through the hand that is holding the
        gun. The gun clatters to the ground, and the Code Killer falls to his
        knees, screaming his agony.
      </p>
      <p>
        You rush forward to secure the weapon, then to tend to the Code Killer.
        You make sure he is suitably restrained before calling for an ambulance.
        He's not getting away from you this time.
      </p>
      <p>
        Just before the Code Killer is carted away, he looks up at you and
        snarls, "Why didn't you kill me? I was ready to die!" You look back at
        him, unsmiling.
      </p>
      <p>
        "You've put a lot of people through hell these past few years," you say
        to him. "You don't get to do that then escape justice by dying at a
        convenient moment. You've got a lot of years ahead of you, Martin, and
        you're going to spend every single one of them in jail."
      </p>
      <p>
        Martin Twycross, aka the Code Killer, lies back on the stretcher, closes
        his eyes and groans. "Damn you, Detective," he whispers. And then he
        smirks. "You can't say you didn't enjoy the chase though, right?"
      </p>
      <img className="puzzleImage" src={paper} alt="Newspaper article" />
      <div>
        <button onClick={finishPart}>Continue</button>
      </div>
    </div>
  );
}

export default Finish;
