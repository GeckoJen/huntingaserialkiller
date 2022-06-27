import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import answers from "../../../answers/answers";
import Bomb from "../bombpuzzle";
import useInterval from "../../../hooks/useInterval";
import tick from '../../../images/Tick-DeepFrozenApps-397275646.mp3'

function ItsABomb({ moveOnStoryPart, changePart, getUserInfo, displayTimer }) {

    useEffect(() => {
      window.scrollTo(0, 0);
      moveOnStoryPart(window.location.pathname);
      changePart("Part 3");
      getUserInfo();
      displayTimer(true);
    }, []);

    let navigate = useNavigate();

    const audio = new Audio(tick)

     
    const [cutOrder, setCutOrder] = useState([]);

    const initialWires = [
      "wire wire1",
      "wire wire2",
      "wire wire3",
      "wire wire4",
      "wire wire5",
      "wire wire6",
    ];

    const [wires, setWires] = useState(initialWires);

    function cutWire(wire) {
      const index = Number(wire.id);
      setWires([
        ...wires.slice(0, index),
        `wire wire${wire.id} cutWire`,
        ...wires.slice(index + 1),
      ]);
      setCutOrder([...cutOrder, wire.id]);
    }

    function resetWires() {
        setWires(initialWires);
        setCutOrder([]);
    }

    const [timeLeft, setTimeLeft] = useState({
      seconds: 564,
      timerDisplay: '00:09:24'
  
    });



    useInterval(function () {
        if (cutOrder.length < 6) {
            const newSeconds =
                Number(timeLeft.seconds) - 1 > 0 ? Number(timeLeft.seconds) - 1 : 0;

            const minutes = Math.floor(newSeconds / 60);
            const seconds =
                newSeconds % 60 > 9 ? newSeconds % 60 : `0${newSeconds % 60}`;
    
            setTimeLeft({ seconds: newSeconds, timerDisplay: `00:0${minutes}:${seconds}` });
            audio.play()
        }
    
  }, 1000);

    useEffect(() => {
        if (cutOrder.join('') === answers.bombDefusal) {

            setTimeout(() => {
              navigate("../grandfinale");
            }, 2000);
            
            
        } else if (cutOrder.length === 6 && cutOrder.join('') !== answers.bombDefusal) {
            navigate("../kaboom");
        }
}, [cutOrder])
    
    
    return (
      <div className="page">
        <h2>It's a bomb!</h2>
        <p>
          You call for back up and head out round the side of the office block
          to the area indicated in the Code Killer's note. Moving aside the
          branches of the bushes growing under the trees, you see a bomb. The
          timer is counting down. You only have just over 9 minutes before it
          blows.
        </p>
        <p>
          This must be the grand finale the Code Killer referred to. He's going
          to blow up the whole police station, finally exacting revenge for the
          death of his family. You look around you, starting to panic. The Code
          Killer must be here, somewhere, watching. But you don't have time to
          worry about that now. You turn your attention to the ticking device.
        </p>
        <Bomb
          cutOrder={cutOrder}
          wires={wires}
          cutWire={cutWire}
          resetWires={resetWires}
          timeLeft={timeLeft}
        />

      </div>
    );
}

export default ItsABomb;
