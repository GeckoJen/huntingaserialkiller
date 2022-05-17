import React, {useState} from 'react'

function AtTheCrimeScene() {

const [answer, setAnswer] = useState('')
   const [hint, setHint] = useState("");
    function checkAnswer() {
        
    }

  return (
    <div>
      <h2>Hunting a Serial Killer: Part 1</h2>
      <p>
        You clap once as directed, and the sound triggers a spotlight to come
        on, illuminating a grey box on the dining table. The box appears to be
        locked with some sort of code - on the front is a 5-digit combination
        lock, and on the top is displayed an arrangement of numbers.
      </p>
      <div className="image"></div>
      <form onSubmit={checkAnswer}>
        <p className="centreText"> What is the code to unlock the box?</p>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
        <p className="centreText">{hint}</p>
      </form>
    </div>
  );
}

export default AtTheCrimeScene