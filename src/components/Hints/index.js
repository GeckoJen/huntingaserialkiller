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
      <h2>Hints</h2>
      <p>
        Scroll down to find the section you need a hint for, and then select
        what level of hint you need. Hints will only appear for sections you've
        reached so far in the game.
      </p>
      <h3 className="hintsH3">
        Don't refresh this page or you will lose access to the hints you've
        accumulated so far.
      </h3>
      <h3 className="hintsH3">
        If you refresh by accident, click the back button on your browser or
        select the "Home" button above and begin the escape room again.{" "}
      </h3>
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
