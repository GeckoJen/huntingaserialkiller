import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noteImage from "../../../images/fence instruction.jpg";
import answers from "../../../answers/answers";
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
import "./inthegarden.css";

function InTheGarden({
  moveOnStoryPart,
  changePart,
  getUserInfo,
  displayTimer,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    moveOnStoryPart(window.location.pathname);
    changePart("Part 2");
    getUserInfo();
    displayTimer(true);
  }, []);

  let navigate = useNavigate();

  const fencePanels = [
    fencepanelA,
    fencepanelB,
    fencepanelC,
    fencepanelD,
    fencepanelE,
    fencepanelF,
    fencepanelG,
    fencepanelH,
    fencepanelI,
  ];

  const [currentlySelected, setCurrentlySelected] = useState([]);

  function addToSelected(panel) {
    panel.className = "fencePanelSelected";

    if (panel === currentlySelected[0]) {
      setCurrentlySelected([]);
      panel.className = "fencePanel";
    } else {
      setCurrentlySelected([...currentlySelected, panel]);
    }
  }

  useEffect(() => {
    if (currentlySelected.length === 2) {
      setTimeout(() => {
        currentlySelected.forEach(
          (element) => (element.className = "fencePanel")
        );
        const idArray = [currentlySelected[0].id, currentlySelected[1].id];
        swapFencePanels(currentlySelected[0].id, currentlySelected[1].id);
        setCurrentlySelected([]);
      }, 500);
    }
  }, [currentlySelected]);

  const [fencePanelOrder, setFencePanelOrder] = useState([
    { id: "A", src: fencepanelA, className: "fencePanel" },
    { id: "B", src: fencepanelB, className: "fencePanel" },
    { id: "C", src: fencepanelC, className: "fencePanel" },
    { id: "D", src: fencepanelD, className: "fencePanel" },
    { id: "E", src: fencepanelE, className: "fencePanel" },
    { id: "F", src: fencepanelF, className: "fencePanel" },
    { id: "G", src: fencepanelG, className: "fencePanel" },
    { id: "H", src: fencepanelH, className: "fencePanel" },
    { id: "I", src: fencepanelI, className: "fencePanel" },
  ]);

  function swapFencePanels(panel1id, panel2id) {
    const panel1index = fencePanelOrder.findIndex(
      (element) => element.id === panel1id
    );
    const panel2index = fencePanelOrder.findIndex(
      (element) => element.id === panel2id
    );

    const panel1 = fencePanelOrder[panel1index];
    const panel2 = fencePanelOrder[panel2index];

    if (panel2index >= panel1index) {
      setFencePanelOrder([
        ...fencePanelOrder.slice(0, panel1index),
        panel2,
        ...fencePanelOrder.slice(panel1index + 1, panel2index),
        panel1,
        ...fencePanelOrder.slice(panel2index + 1),
      ]);
    } else {
      setFencePanelOrder([
        ...fencePanelOrder.slice(0, panel2index),
        panel1,
        ...fencePanelOrder.slice(panel2index + 1, panel1index),
        panel2,
        ...fencePanelOrder.slice(panel1index + 1),
      ]);
    }
  }

  const [hint, setHint] = useState("");

  function checkAnswer(event) {
    event.preventDefault();
      const orderArray = []
      fencePanelOrder.forEach(panel => orderArray.push(panel.id))
      const receivedAnswer = orderArray.join('')
     
    if (
      receivedAnswer === answers.inTheGarden1 ||
      receivedAnswer === answers.inTheGarden2
    ) {
      navigate("../examiningthebody");
    } else {
      setHint("Nope, that's not correct, try again!");
      setTimeout(() => {
        setHint("");
      }, 2000);
    }
  }

  return (
    <div className="page">
      <h2>In the Garden</h2>
      <p>
        You go over to the grandfather clock and find a key inside the cabinet.
        You use the key to open the patio doors and proceed carefully into the
        garden. You become aware that you can hear the sound of several dogs
        barking ferociously, from somewhere not very far away, though you can't
        see them.{" "}
      </p>
      <p>
        Before you reach the body, you see another note from the Code Killer
        propped up on a nearby wall.
      </p>
      <img
        className="puzzleImage"
        src={noteImage}
        alt="next puzzle instructions"
      />
      <div className="fencePanelSection">
        <img className="fenceWall" src={fencewallleft} alt="wall" />
        {fencePanelOrder.map((panel) => {
          return (
            <img
              className={panel.className}
                key={panel.id}
              id={panel.id}
              src={panel.src}
              alt="fence panel"
              onClick={(e) => {
                addToSelected(e.target);
              }}
            />
          );
        })}
        <img className="fenceWall rightWall" src={fencewallright} alt="wall" />
      </div>
      <form onSubmit={checkAnswer}>
        <p className="centreText">
          Click on two fence panel pieces to swap their positions. Click submit
          when you think you have them in the right order.
        </p>
        <p className="centreText hint">{hint}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InTheGarden;
