import React, { useEffect, useState } from "react";
import "./hints.css";
import Part1Hints from "./Part1Hints";
import Part2Hints from "./Part2Hints";
import Part3Hints from "./Part3Hints";

function Hints({ recordHints, getUserInfo, displayTimer }) {

  const storyParts = {
    newcase: 11,
    atthecrimescene: 12,
    insidethebox: 13,
    thenextcrimescene: 14,
    insidethehouse: 15,
    thenextbody: 16,
    goinghome: 17,
    thecodekiller: 18,
    returnofthecodekiller: 21,
    stagedoor: 22,
    insidethetheatre: 23,
    beneaththetrapdoor: 24,
    theboxopens: 25,
    friarsroad: 26,
    insidefriarsroad: 27,
    inthelivingroom: 28,
    inthegarden: 29,
    atthehospital: 210,
    part3: 31,
    thevictims: 32,
    calumhoddle: 33,
    decodingthemotive: 34,
    motiverevealed: 35,
    codekilleridentity: 36,
    itsabomb: 37,
    grandfinale: 38,
  };

  

  const [storyPartReached, setStoryPartReached] = useState(
    {}
  );

  useEffect(() => {
    async function getCurrentPage() {
      const data = await getUserInfo();
      const currentPage = data.payload[0].current_page;
  
      setStoryPartReached({
        [currentPage]: storyParts[currentPage],
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
