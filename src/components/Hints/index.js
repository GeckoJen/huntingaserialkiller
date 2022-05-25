import React from "react";
import "./hints.css";
import Part1Hints from "./Part1Hints";
import Part2Hints from "./Part2Hints";
import Part3Hints from "./Part3Hints";

function Hints({
  recordHints,
  storyPartReachedPart1,
  storyPartReachedPart2,
  storyPartReachedPart3,
  part,
}) {
  return (
    <div className="page">
      <h1>Hints</h1>
      <p className="centreText">
        There are three levels of hint available for each puzzle.
      </p>
      <p className="centreText">
        {" "}
        Select a <strong>"nudge"</strong> for a gentle point in the right
        direction, a <strong>"help"</strong> for a bit more guidance, and <strong>"answer"</strong> if you just want to know the answer.
      </p>
      <p className="centreText">
        Click on the "go back to the puzzle" button when you are ready to carry
        on.
      </p>
      {/* <h3 className="hintsH3">
        Don't refresh this page or you will lose access to the hints you've
        accumulated so far.
      </h3>
      <h3 className="hintsH3">
        If you refresh by accident, click the back button on your browser or
        select the "Home" button above and begin the escape room again.{" "}
      </h3> */}
      {part === "Part 1" && (
        <Part1Hints
          storyPartReachedPart1={storyPartReachedPart1}
          recordHints={recordHints}
        />
      )}
      {part === "Part 2" && (
        <Part2Hints
          storyPartReachedPart2={storyPartReachedPart2}
          recordHints={recordHints}
        />
      )}
      {part === "Part 3" && (
        <Part3Hints
          storyPartReachedPart3={storyPartReachedPart3}
          recordHints={recordHints}
        />
      )}
    </div>
  );
}

export default Hints;
