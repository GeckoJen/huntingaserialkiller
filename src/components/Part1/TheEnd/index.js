import React, {useEffect} from 'react'

function TheEnd() {

     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);

  return (
    <div className="page">
      <h2>The End. For Now...</h2>
      <p className="centreText">Congratulations!</p>
      <p className="centreText">
        You have succeeded in getting your family out safely, and the Code
        Killer has gone to ground. You can relax for a little while.
      </p>
      <p className="centreText">But the Code Killer is sure to return. </p>
          <p className="centreText">Will you be able to catch him next time? </p>
          <button>Continue to Part 2</button>
    </div>
  );
}

export default TheEnd