import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ATwistInTheTale({
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
        <h2>A Twist in the Tale</h2>
        <p>
          This new information knocks you for six. How could this be? If Duncan
          Fletcher is dead, then he can't be the Code Killer and he can't have
          attacked Richard Lambert this morning. But then why did Richard
          Lambert seem so sure it was him?
        </p>
        <p>
          Could it be that the Code Killer's first victim was a set up, a trick
          to make the world think that Duncan Fletcher was dead, to give the
          Code Killer a rock solid alibi for his killing spree - for who would
          think to suspect a dead man of being a serial killer?
        </p>
        <p>
          Or maybe Richard Lambert is himself the Code Killer, and he injured
          himself, non-fatally, in some sort of spectacular double bluff, as a
          way to keep "in the loop" regarding the investigation? And he gave the
          name of a man he knew was dead just to mess with you?
        </p>
        <Link to="/atthehospital">
          <button>Continue</button>
        </Link>
      </div>
    );
}

export default ATwistInTheTale;
