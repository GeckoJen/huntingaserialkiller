import React from "react";
import { Link } from "react-router-dom";
import fencepanelA from "../../../images/fencepanelA.png";
import fencepanelB from "../../../images/fencepanelB.png";
import fencepanelC from "../../../images/fencepanelC.png";
import fencepanelD from "../../../images/fencepanelD.png";
import fencepanelE from "../../../images/fencepanelE.png";
import fencepanelF from "../../../images/fencepanelF.png";
import fencepanelG from "../../../images/fencepanelG.png";
import fencepanelH from "../../../images/fencepanelH.png";
import fencepanelI from "../../../images/fencepanelI.png";
import fencewallleft from "../../../images/fencewallleft.png";
import fencewallright from "../../../images/fencewallright.png";

function Part2Hints({ storyPartReached, recordHints }) {
  return (
    <div>
      {storyPartReached.returnofthecodekiller && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 1:<br></br> The Return of the Code Killer
            </h3>
            <Link to="/returnofthecodekiller">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            The key is in the phrase "find the place where one line ends and the
            next line begins."
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Take the last word of the first line and the first word of the
            second line, and put them together - "shellor" - can you see a word
            hiding? Do the same for the end/beginning of each subsequent line.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>
            The answer is: "theatre". The whole message reads: "Hello Detective,
            ready to play again? Find next victim at the theatre."
          </p>
        </div>
      )}

      {storyPartReached.stagedoor && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 2:<br></br> The Stage Door
            </h3>
            <Link to="/stagedoor">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Work out the order in which the graffiti was added to the wall, from
            oldest to newest.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Newer tags will be over the top of older ones. Assume that tags
            which are the same were made at the same time. Convert each tag to a
            two letter code - say them out loud if you're struggling.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>TJSRKCHD</p>
        </div>
      )}

      {storyPartReached.insidethetheatre && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 3:<br></br> Inside the Theatre
            </h3>
            <Link to="/insidethetheatre">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Look at the lines on the plant pots. This indicates the order in
            which to look at them.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            The top of each plant is pointing to a word on the wall. Put the
            words in the order indicated by the lines on the pots to reveal a
            message.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>
            The answer is "trap door". The whole message reads: "Try looking
            beneath the trap door."
          </p>
        </div>
      )}

      {storyPartReached.beneaththetrapdoor && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 4:<br></br> Beneath the Trap Door
            </h3>
            <Link to="/beneaththetrapdoor">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Although the "sequence" involves numbers, this isn't mathematical.
            Each row (apart from the first!) relates to the row above it.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Each row is a description of the numbers in the row above. Row one
            is "1". Row two is "11" because there is "one" number "one" on the
            row above. Row three is "21" because there are "two" number "ones"
            on the row above.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>13112221</p>
        </div>
      )}

      {storyPartReached.theboxopens && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 5:<br></br> The Box Opens
            </h3>
            <Link to="/theboxopens">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            There's a number hidden in the note. Consider the phrase "maybe a
            change of perspective is what you need."
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Look at the handwritten "oh and come alone, detective". Do you
            notice anything strange about any of the letters? Can you see any
            numbers if you turn the note upside down?
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>
            The answer is "307" - the letters L, O and E in "alone" have been
            replaced with upside down numbers.
          </p>
        </div>
      )}

      {storyPartReached.friarsroad && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 6:<br></br> Friar's Road
            </h3>
            <Link to="/friarsroad">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Look carefully at the house. Can you see anything that might
            indicate a series of numbers?
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Look at the eaves of the roofs. Can you see the semi-circles? Count
            them up.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>435162158</p>
        </div>
      )}

      {storyPartReached.insidefriarsroad && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 7:<br></br>Inside 307 Friar's Road
            </h3>
            <Link to="/insidefriarsroad">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Once you've solved the triangular "sudoku" puzzle (start with the
            triangles on the outside 3 sides, as they each have 9 triangles),
            you then need to work out how that helps open the lock on the door.
            The clue is in the note - 11, 33, 51, 55, 59.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Take the symbols on row 1, triangle 1; row 3 triangle 3; row 5
            triangle 1, row 5 triangle 5; and row 5 triangle 9. Assign those
            symbols the relevant number from the bottom of the note, and put
            those numbers into the lock.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>24437</p>
        </div>
      )}

      {storyPartReached.inthelivingroom && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 8:<br></br>Inside the Living Room
            </h3>
            <Link to="/inthelivingroom">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Notice that the "bricks" are arranged in the shape of the keys on a
            computer keyboard. What might the numbers mean? Do they indicate a
            message?
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            The sentence from the keyboard puzzle reads "where does 11 plus 2
            equal 1?" You might have to think outside the box for this riddle -
            it's not a maths puzzle.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>
            The answer is "clock", because 11 o'clock plus 2 hours equals 1
            o'clock.
          </p>
        </div>
      )}

      {storyPartReached.inthegarden && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 9:<br></br>In the Garden
            </h3>
            <Link to="/inthegarden">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            There's one piece where there is only one other piece that can fit
            to its left, and one other piece that can fit to its right. Find
            those pieces and build up from there.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <div className="siblingDiv">
            <p className="subDiv">
              These are the three pieces referred to in the nudge above. Put
              these three pieces together and work from there.
            </p>
            <div className="fenceHelpImageDiv">
              <img
                className="fenceHelpImage"
                src={fencepanelG}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelE}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelC}
                alt="fence panel"
              />
            </div>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <div className="siblingDiv">
            <p className="subDiv">This is one option of the final layout:</p>
            <div className="fenceHelpImageDiv">
              <img
                className="fenceHelpImage"
                src={fencewallleft}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelG}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelE}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelC}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelI}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelB}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelD}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelF}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelA}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencepanelH}
                alt="fence panel"
              />
              <img
                className="fenceHelpImage"
                src={fencewallright}
                alt="fence panel"
              />
            </div>
          </div>
        </div>
      )}

      {storyPartReached.atthehospital && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 2 puzzle 10:<br></br>At the Hospital
            </h3>
            <Link to="/atthehospital">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Can you match the pictures from the wall with the pictures on the
            safe? Note that the safe pictures have a tiled background.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            The pictures on the safe indicate combinations of "sky", "sea" and
            "land". Separate the animals on the wall into flying animals (sky),
            sea creatures and land animals. Then count the number of tiles which have those animals on them. For example, there are 3 tiles with sea creatures on.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>
            5378
          </p>
        </div>
      )}
    </div>
  );
}

export default Part2Hints;
