import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar({
  part,
  storyPartReachedPart1,
  storyPartReachedPart2,
  storyPartReachedPart3,
}) {
  const [latestPage, setLatestPage] = useState("/");

  function numPartsReached(obj) {
    let count = 0;
    for (let prop in obj) {
      if (obj[prop] === true) {
        count++;
      }
    }
    return count;
  }

  const pagesPart1 = {
    0: "",
    1: "newcase",
    2: "atthecrimescene",
    3: "insidethebox",
    4: "thenextcrimescene",
    5: "insidethehouse",
    6: "thenextbody",
    7: "goinghome",
    8: "thecodekiller",
  };

  const pagesPart2 = {
    0: "",
    1: "returnofthecodekiller",
    2: "stagedoor",
    3: "insidethetheatre",
    4: "beneaththetrapdoor",
    5: "",
    6: "",
    7: "",
    8: "",
  };

  const pagesPart3 = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  };

  useEffect(() => {
    if (part === "Part 1") {
      const puzzlesComplete = numPartsReached(storyPartReachedPart1);
      setLatestPage(`/${pagesPart1[puzzlesComplete]}`);
    } else if (part === "Part 2") {
      const puzzlesComplete = numPartsReached(storyPartReachedPart2);
      setLatestPage(`/${pagesPart2[puzzlesComplete]}`);
    } else if (part === "Part 3") {
      const puzzlesComplete = numPartsReached(storyPartReachedPart3);
      setLatestPage(`/${pagesPart3[puzzlesComplete]}`);
    }
  }, [storyPartReachedPart1, storyPartReachedPart2, storyPartReachedPart3]);

  console.log(
    storyPartReachedPart1,
    storyPartReachedPart2,
    storyPartReachedPart3
  );

  return (
    <div>
      <h3 className="partName">{part}</h3>
      <nav className="navbar">
        <Link to="/">
          <button className="navbarButton">Home</button>{" "}
        </Link>
        <Link to="/hints">
          <button className="navbarButton">Hints</button>{" "}
        </Link>
        {/* <Link to={latestPage}>
          <button className="navbarButton">Current puzzle</button>{" "}
        </Link> */}
      </nav>
    </div>
  );
}

export default Navbar;
