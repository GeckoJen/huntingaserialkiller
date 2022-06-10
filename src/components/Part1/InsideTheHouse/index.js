import React, {useEffect} from "react";
import MagnetBoard from "../magnetBoard";

function InsideTheHouse({moveOnStoryPart, changePart, getUserInfo, displayTimer}) {

 useEffect(() => {
   window.scrollTo(0, 0);
   moveOnStoryPart(window.location.pathname);
   changePart("Part 1");
   getUserInfo();
   displayTimer(true);
 }, []);

  return (
    <div className="page">
      <h2>Inside the House</h2>
      <p>
        On entering the house you see that there is a body lying in the kitchen.
        You can't get to the kitchen, however, because the killer has laid a
        trap just inside the hallway.
      </p>

      <p className="puzzleImage boxNote">
        Evening Detective. Welcome to the Game. if you're reading this message,
        it means you've just stepped on a trigger plate. If you move, a bomb
        will go off. The only way to disarm the bomb is to successfully
        manoeuvre the ball into the hole. You mustn't make any mistakes...
      </p>
      <p>
        You see a game board in front of you. On it is a little gold ball, a
        black hole, and a number of grey barriers. You realise that by pressing
        the magnets on each side of the table, you can move the ball up, down,
        left or right. The ball will move in a straight line until it hits a
        barrier, or falls off the edge. To disarm the bomb, you must get it into
        the black hole. Can you work out the sequence and disarm the bomb?
      </p>
      <MagnetBoard />
    </div>
  );
}

export default InsideTheHouse;
