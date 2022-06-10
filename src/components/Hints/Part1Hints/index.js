import React from "react";
import { Link } from "react-router-dom";

function Part1Hints({ storyPartReached, recordHints }) {
  return (
    <div>
      {storyPartReached.newcase && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 1:<br></br> A New Case
            </h3>
            <Link to="/newcase">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>Look closely at the police caution tape</p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Look at the blood splatters on the police caution tape. Can you see
            some that are different from the others?
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>clap once</p>
        </div>
      )}

      {storyPartReached.atthecrimescene && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 2:<br></br> At the Crime Scene
            </h3>
            <Link to="/atthecrimescene">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Pay attention to the shapes on the top of the box, and the shapes on
            the code panel.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            Match up the shapes for each digit of the code. So for the first
            digit, match up the white circle from the front of the box with the
            circle containing number I on top of the box. The first digit of the
            code is in the square box above the white dot - so a number 1.
          </p>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>18039</p>
        </div>
      )}

      {storyPartReached.insidethebox && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 3:<br></br> Inside the Box
            </h3>
            <Link to="/insidethebox">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>Notice the strange punctuation</p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            If you ignore the words you are left with a series of dots, dashes
            and hashes. Could these be concealing a secret message?
          </p>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>
            The whole message (written in Morse Code with # indicating the end
            of a word) reads:<br></br>"The next murder will be at 37 Ark Street"{" "}
            <br></br>
            The answer therefore is: "37 Ark Street"
          </p>
        </div>
      )}

      {storyPartReached.thenextcrimescene && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 4:<br></br>The Next Scene
            </h3>
            <Link to="/thenextcrimescene">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>Look at the shutters</p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            When closed, the shutters form a 3x3 grid, with one panel shaded.
          </p>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>945783</p>
        </div>
      )}

      {storyPartReached.insidethehouse && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 5:<br></br>Inside the House
            </h3>
            <Link to="/insidethehouse">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            You can use trial and error, or try to work backwards to find the
            route
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>The first two moves are down right</p>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>
            One solution is: down right down left up right up right down left
          </p>
        </div>
      )}

      {storyPartReached.thenextbody && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 6:<br></br>The Next Body
            </h3>
            <Link to="/thenextbody">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            You need to rearrange the letters in the note for it to make sense.
            Look at the numbers for a clue as to how to do it.
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            First, move all the columns of letters so that column 1 is first,
            then column 2 etc. Then, move the rows so that row 1 is first, then
            row 2 etc. Now you should just be able to read across each line to
            find the message.
          </p>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>See you at home detective</p>
        </div>
      )}

      {storyPartReached.goinghome && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 7:<br></br>Going Home
            </h3>
            <Link to="/goinghome">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            The key to solving this riddle is the phrase "I'm oddly beginning to
            like you."
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            If you take the beginning letter of each odd word in the riddle, and
            put them together, what do you come up with?
          </p>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>Code Killer</p>
        </div>
      )}

      {storyPartReached.thecodekiller && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 1 puzzle 8:<br></br>The Panic Room
            </h3>
            <Link to="/thecodekiller">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Nudge
          </button>
          <p>
            Solve the four hints written on the wall. Use Google if you need to.
            What do you notice about the answers?
          </p>

          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Help
          </button>
          <p>
            If you were to put those answers on a clock, and think of them as
            up, down, left and right from a central point, can you work out how
            that might relate to a code on the keypad?
          </p>
          <button disabled={false} onClick={(e) => recordHints(e.target)}>
            Answer
          </button>
          <p>6482</p>
        </div>
      )}
    </div>
  );
}

export default Part1Hints;
