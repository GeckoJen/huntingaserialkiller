import React from "react";
import { Link } from "react-router-dom";

function Part3Hints({ storyPartReached, recordHints }) {
  return (
    <div>
      {storyPartReached.part3 && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 1: <br></br> The Aftermath
            </h3>
            <Link to="/part3">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>
            You'll need to use both the names and the ages to figure out this
            clue.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            Take Duncan Fletcher, aged 45. What's the 4th letter of Duncan and
            the 5th letter of Fletcher? Do the same for all the other victims.
            What do you notice about the letters that are revealed?
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>
            Victims number 1, 8, 9 and 10 are already given to you. Slot the
            others into order so that the letters read out CODEKILLER. The
            correct order is: Duncan Fletcher, Simon Harrison, Jared Federer,
            Mike East, Luke Walker, Eric Bing, Philip Fulton, Calum Hoddle, Theo
            Howells, Stuart Taylor.
          </p>
        </div>
      )}

      {storyPartReached.thevictims && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 2:<br></br> The Victims
            </h3>
            <Link to="/thevictims">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>
            Look at the bloodstained note. Notice that the Code Killer says that
            he's finding his letters repetitive.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            Look for repeating letters in the remainder of the note. E.g.
            "fully" has a double L, so the first letter is L.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>LDMFT</p>
        </div>
      )}

      {storyPartReached.calumhoddle && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 3:<br></br> The Calum Hoddle Crime Scene
            </h3>
            <Link to="/calumhoddle">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>Look at the newspaper. Notice the handwritten message.</p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            The handwritten message refers to a "headline figure". Count the
            letters of the headline to find which letters are being referred to.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>LAIUE</p>
        </div>
      )}

      {storyPartReached.decodingthemotive && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 4:<br></br> Decoding the Motive
            </h3>
            <Link to="/decodingthemotive">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>
            First of all, remember what order you need to put the victims in.
            Then arrange the letters in that order.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            Write victim no.1's 5 letters on a piece of paper. Then take the 5
            letters from victim no.2 and write them underneath the first 5
            letters, and so on. Make sure you keep the columns of letters lined
            up. Read down the columns to reveal the message.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>
            Answer: I am freeing us from torment (The whole message reads: "We
            have all lost love and purpose. I am freeing us from torment.")
          </p>
        </div>
      )}

      {storyPartReached.motiverevealed && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 5:<br></br> The Code Killer's Motive
            </h3>
            <Link to="/motiverevealed">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>
            The numbers before the hyphen are arrived at separately from the
            numbers after the hyphen. The numbers after the hyphen are easier to
            work out.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            For the numbers after the hyphen, look at the length of the words.
            For the numbers before the hyphen, look at the capital letters of
            the words. Do you notice anything about them? Is there a way to
            convert those letters into numbers?
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>
            Answer: 1505-474 (The 1505 comes from adding together the values of
            the capital letters, if you assign them numerical values as Roman
            numerals. The 474 comes from counting the letters in each of the
            three words.)
          </p>
        </div>
      )}

      {storyPartReached.codekilleridentity && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 6:<br></br> Discovering the Code Killer's
              True Identity
            </h3>
            <Link to="/codekilleridentity">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>
            There are a few parts to this puzzle. The first part is to decode
            the message in the letter. The words "last one" will help decode the
            second part, on the reverse of the note. When you get to the message
            with the map, read the message carefully. Note that the first
            paragraph makes reference to a letter, and the second refers to a
            figure.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            The first number of each pair refers to the word on that line. The
            second number refers to the letter in that word. So (4,1) means the
            first letter of the fourth word. Then, notice the letters/lines on
            the back of the letter. Work out what characters are connected to
            the red letters of "last one". Visit the web address that this
            message points you to. When you get there, follow the path that the
            Code Killer describes in the first and second paragraphs. This
            should give you a letter and a number for a grid reference. But also
            carefully read the third paragraph too, because there's an extra
            step!
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>
            The answer is C7. The decoded message from the note takes you to
            https://bit.ly/3i7e8pm <br></br>
            The first paragraph maps out a letter C, if you follow his route on
            the map. The second paragraph the number 8. The third paragraph says
            he is facing the sunset, and is going to take a "dextrous sidestep".
            If the Code Killer was in C8, but then, facing the sunset (i.e.
            west) he took one step to the right, he would end up in C7.
          </p>
        </div>
      )}

      {storyPartReached.itsabomb && (
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 7:<br></br> It's a Bomb!
            </h3>
            <Link to="/itsabomb">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>
            You will need to email geckotowers@gmail.com and include the words
            "Geckotronic Mark III" in the subject line of the email, and wait
            for the response you will receive. In case you don't receive the
            response for any reason, try writing something (anything) in the
            body of the email too - very occasionally emails get sent to spam by
            mistake!
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            In case you didn't receive an email reply, the response you should
            have received is set out below. Just follow the logic instructions
            to determine the order to cut the wires. <br></br>
            <br></br>
            Dear valued customer <br></br>Thank you for purchasing the
            Geckotronic Mark III Explosive Device. We trust you are satisfied
            with your purchase, which has been designed to satisfy all your
            explosive needs. <br></br>User Manual <br></br>Arming the Device{" "}
            <br></br>To arm the device, simply pull the wires, one at a time,
            from their sockets on the left hand side, and plug them into any
            free socket on the right hand side. You can select the wires in any
            order. Twist the red knob to set the delay timer, then press the red
            knob to start the timer counting down. <br></br>Defusing the Device{" "}
            <br></br>To defuse the device, you need to disconnect the wires in
            the correct order, as explained below: <br></br>- the top wire (i.e.
            the wire that is lying on top of all the other wires) must be
            disconnected last and the bottom wire (i.e. the wire that is lying
            underneath all the other wires) must be disconnected first;{" "}
            <br></br>- the second wire to be disconnected must be positioned in
            sockets that sum to 9; <br></br>- the third wire to be disconnected
            must be positioned in sockets that sum to an even number;<br></br> -
            the fourth wire to be disconnected must lie below (but not directly
            below) the third wire to be disconnected.
            <br></br>Please take care to disconnect the wires in the correct
            order, as any mistake in the ordering will lead to instant
            detonation of the device, which unfortunately would invalidate the
            warranty. <br></br>Happy exploding! We hope you will consider
            Geckotronic devices for your future explosive requirements!
            Geckotronic Armaments Ltd
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>
            The order is: red (1), purple (3), yellow (6), dark blue (5), light
            blue (2), green (4)
          </p>
        </div>
      )}

      {storyPartReached.grandfinale && (
     
        <div className="hintSection">
          <div className="hintsHeader">
            <h3>
              Hints for part 3 puzzle 8:<br></br> Grand Finale
            </h3>
            <Link to="/grandfinale">
              <button className="hintBackToPuzzle">
                Go back to the puzzle
              </button>
            </Link>
          </div>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Nudge
          </button>
          <p>
            Look at the triangles on the doors. Work out how the number in the
            middle of the triangle is made from the numbers on the outside of
            the triangle. Apply the same process to the 4 triangles between the
            doors to determine the numbers.
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Help
          </button>
          <p>
            Add up the numbers on the outside of the triangles. What do you
            notice about the sum of the outer numbers compared with the number
            in the middle of the triangle?
          </p>

          <button
            disabled={false}
            onClick={(e) =>
              recordHints(e.target, Object.values(storyPartReached)[0])
            }
          >
            Answer
          </button>
          <p>
            253.4 Mhz. You need to add up the numbers on the outside of each
            triangle and divide by 3.
          </p>
        </div> 
      )}
    </div>
  );
}

export default Part3Hints;
