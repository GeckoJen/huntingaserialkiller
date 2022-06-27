import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import victimList from '../../../images/victimlist.jpg'
import "./theaftermath.css";

function TheAftermath({
  moveOnStoryPart,
  changePart,
  getUserInfo,
  displayTimer,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    moveOnStoryPart(window.location.pathname);
    changePart("Part 3");
    getUserInfo();
    displayTimer(true);
  }, []);

    let navigate = useNavigate();
    
    const initialAnswer = [
      { name: "", id: "0", class: "victimName validDropzone" },
      { name: "", id: "1", class: "victimName validDropzone" },
      { name: "", id: "2", class: "victimName validDropzone" },
      { name: "", id: "3", class: "victimName validDropzone" },
      { name: "", id: "4", class: "victimName validDropzone" },
      { name: "", id: "5", class: "victimName validDropzone" },
    ];

    const [answer, setAnswer] = useState(initialAnswer);

    function resetNames() {
        setAnswer(initialAnswer);
        setVictims(initialVictims);
}

  function updateAnswers(section) {
      const index = Number(section.id);
      
      if (answer[index].class === "victimName validDropzone") {
          const selectedName = victims.find((victim) => {
            return victim.class === "selectNameSelected";
          });
          const selectedIndex = victims.findIndex((victim) => {
            return victim.class === "selectNameSelected";
          });

          setAnswer([
            ...answer.slice(0, index),
            {
              ...answer[index],
              name: selectedName.name,
              class: "victimName invalidDropzone",
            },
            ...answer.slice(index + 1),
          ]);

          setVictims([
            ...victims.slice(0, selectedIndex),
            { ...victims[selectedIndex], class: "crossThrough" },
            ...victims.slice(selectedIndex + 1),
          ]);
      
      }

      if (answer[index].class === "victimName invalidDropzone") {
          const name = answer[index].name;
          const victimIndex = victims.findIndex((victim) => { return victim.name === name });

          setAnswer([
              ...answer.slice(0, index),
              { ...answer[index], name: '', class: "victimName validDropzone" }, 
              ...answer.slice(index+1)
          ])

          setVictims([
              ...victims.slice(0, victimIndex),
              { ...victims[victimIndex], class: "selectName" },
              ...victims.slice(victimIndex+1)
          ])
      }
    }

    const initialVictims = [
      { name: "Eric Bing, aged 32", id: "0", class: "selectName" },
      { name: "Luke Walker, aged 34", id: "1", class: "selectName" },
      { name: "Theo Howells, aged 34", id: "2", class: "crossThrough" },
      { name: "Calum Hoddle, aged 35", id: "3", class: "crossThrough" },
      { name: "Mike East, aged 41", id: "4", class: "selectName" },
      { name: "Philip Fulton, aged 43", id: "5", class: "selectName" },
      { name: "Duncan Fletcher, aged 45", id: "6", class: "crossThrough" },
      { name: "Simon Harrison, aged 47", id: "7", class: "selectName" },
      { name: "Jared Federer, aged 53", id: "8", class: "selectName" },
      { name: "Stuart Taylor, aged 56", id: "9", class: "crossThrough" },
    ];

    const [victims, setVictims] = useState(initialVictims)

    function selectName(name) {
        const index = Number(name.id);

        const prevSelected = victims.findIndex((victim) => { return victim.class === "selectNameSelected" })
        
        if (prevSelected === -1) {
            setVictims([
              ...victims.slice(0, index),
              { ...victims[index], class: "selectNameSelected" },
              ...victims.slice(index + 1),
            ]);
        } else if (prevSelected < index) {
            setVictims([
              ...victims.slice(0, prevSelected),
              { ...victims[prevSelected], class: "selectName" },
              ...victims.slice(prevSelected + 1, index),
              { ...victims[index], class: "selectNameSelected" },
              ...victims.slice(index + 1),
            ]);
        } else if (prevSelected > index) {
            setVictims([
              ...victims.slice(0, index),
              { ...victims[index], class: "selectNameSelected" },
              ...victims.slice(index + 1, prevSelected),
              { ...victims[prevSelected], class: "selectName" },
              ...victims.slice(prevSelected + 1),
            ]);
        }

        
    }
    
        const [hint, setHint] = useState("");

        function checkAnswer(event) {
            event.preventDefault();
            const answerArray = answer.map((victim) => victim.name);
            const receivedAnswer = answerArray.join('; ');
          if (receivedAnswer === answers.victimList) {
            navigate("../thevictims");
          } else {
            setHint("Nope, that's not correct, try again!");
            setTimeout(() => {
              setHint("");
            }, 2000);
          }
        }

  return (
    <div className="page">
      <h2>Part 3: The Aftermath</h2>
      <p>
        This serial killer is really starting to grind your gears. You came so
        close to catching him in the hospital, but he slipped through your
        fingers again! Still, at least you know his name now. That must be a
        good starting point for a new lead. But as you start investigating, you
        realise that the name "Richard Lambert" is as fake as the attack was. So
        what now?
      </p>
      <p>
        You go back to the police station and ask to see all the records
        relating to all the murders he committed. You're handed a stack of
        files, on top of which is a list of all the murder victims, along with
        their ages.{" "}
      </p>
      <img className="puzzleImage" src={victimList} alt="List of victims" />

      <p>
        A quick glance informs you that this list has, for some unknown reason,
        been arranged according to the ages of the murder victims at the time of
        their deaths. It would make more sense for it to be arranged in the
        order in which they died. Unfortunately, you weren't here for most of
        them, so you're not sure what the order should be.{" "}
      </p>
      <p>
        You were just told that Duncan Fletcher was the first, and you were here
        for the last three - Calum Hoddle, Theo Howells and Stuart Taylor. But
        what about victims two to seven? You wonder how you can work out who
        goes where.
      </p>
      <div className="puzzleSection">
        <div className="nameSelectors">
          <p
            className={victims[0].class}
            id="0"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[0].name}
          </p>
          <p
            className={victims[1].class}
            id="1"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[1].name}{" "}
          </p>
          <p
            className={victims[2].class}
            id="2"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[2].name}
          </p>
          <p
            className={victims[3].class}
            id="3"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[3].name}
          </p>
          <p
            className={victims[4].class}
            id="4"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[4].name}
          </p>
          <p
            className={victims[5].class}
            id="5"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[5].name}
          </p>
          <p
            className={victims[6].class}
            id="6"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[6].name}
          </p>
          <p
            className={victims[7].class}
            id="7"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[7].name}
          </p>
          <p
            className={victims[8].class}
            id="8"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[8].name}
          </p>
          <p
            className={victims[9].class}
            id="9"
            onClick={(e) => {
              selectName(e.target);
            }}
          >
            {victims[9].name}
          </p>
          <button id="resetButton" onClick={resetNames}>
            Reset
          </button>
        </div>
        {/* <img
          className="puzzleImageColumn"
          src={victimList}
          alt="List of victims"
        /> */}
        <div className="victimListPuzzle">
          <div className="victimRow">
            <p className="victimNumber">1</p>
            <p className="victimName">Duncan Fletcher, aged 45</p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">2</p>
            <p
              className={answer[0].class}
              id="0"
              onClick={(e) => updateAnswers(e.target)}
            >
              {answer[0].name}
            </p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">3</p>
            <p
              className={answer[1].class}
              id="1"
              onClick={(e) => updateAnswers(e.target)}
            >
              {answer[1].name}
            </p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">4</p>
            <p
              className={answer[2].class}
              id="2"
              onClick={(e) => updateAnswers(e.target)}
            >
              {answer[2].name}
            </p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">5</p>
            <p
              className={answer[3].class}
              id="3"
              onClick={(e) => updateAnswers(e.target)}
            >
              {answer[3].name}
            </p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">6</p>
            <p
              className={answer[4].class}
              id="4"
              onClick={(e) => updateAnswers(e.target)}
            >
              {answer[4].name}
            </p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">7</p>
            <p
              className={answer[5].class}
              id="5"
              onClick={(e) => updateAnswers(e.target)}
            >
              {answer[5].name}
            </p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">8</p>
            <p className="victimName">Calum Hoddle, aged 35</p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">9</p>
            <p className="victimName">Theo Howells, aged 34</p>
          </div>
          <div className="victimRow">
            <p className="victimNumber">10</p>
            <p className="victimName">Stuart Taylor, aged 56</p>
          </div>
        </div>
      </div>
      <form onSubmit={checkAnswer}>
        <p className="instructionText">
          {" "}
          Click to select a name from the list on the left, and then click the
          position on the list on the right where you want to place it. If you want to
          remove a name from the right, just click the name you want to remove, or press the reset
          button to remove them all and start again. Click submit below
          when you are happy with the order.
        </p>

        <p className="centreText hint">{hint}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TheAftermath;
