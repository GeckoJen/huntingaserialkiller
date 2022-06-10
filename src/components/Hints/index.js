import React, { useEffect, useState } from "react";
import "./hints.css";
import Part1Hints from "./Part1Hints";
import Part2Hints from "./Part2Hints";
import Part3Hints from "./Part3Hints";

function Hints({ recordHints, getUserInfo, displayTimer }) {
  const initialStoryPartReached = {
    newcase: false,
    atthecrimescene: false,
    insidethebox: false,
    thenextcrimescene: false,
    insidethehouse: false,
    thenextbody: false,
    goinghome: false,
    thecodekiller: false,
    returnofthecodekiller: false,
    stagedoor: false,
    insidethetheatre: false,
    beneaththetrapdoor: false,
  };

  const [storyPartReached, setStoryPartReached] = useState(
    initialStoryPartReached
  );

  useEffect(() => {
    async function getCurrentPage() {
      const data = await getUserInfo();
      const currentPage = data.payload[0].current_page;
      setStoryPartReached({
        ...initialStoryPartReached,
        [currentPage]: true,
      });
    }
    getCurrentPage();
     displayTimer(true);
  }, []);

  return (
    <div className="page">
      <h1>Hints</h1>
      <p className="centreText smaller">
        There are three levels of hint available for each puzzle.
      </p>
      <p className="centreText smaller">
        {" "}
        Select a <strong>"nudge"</strong> for a gentle point in the right
        direction, a <strong>"help"</strong> for a bit more guidance, and{" "}
        <strong>"answer"</strong> if you just want to know the answer.
      </p>
      <p className="centreText smaller">
        Click on the <strong>"go back to the puzzle"</strong> button when you
        are ready to carry on.
      </p>

      <Part1Hints
        storyPartReached={storyPartReached}
        recordHints={recordHints}
      />

      <Part2Hints
        storyPartReached={storyPartReached}
        recordHints={recordHints}
      />

      <Part3Hints
        storyPartReached={storyPartReached}
        recordHints={recordHints}
      />
    </div>
  );
}

export default Hints;
