import React, {useState} from 'react'
import './bomb.css'

function Bomb({cutOrder, wires, cutWire, resetWires, timeLeft}) {



    return (
      <div>
        <div className="wholeBomb">
          <div className="topSection">
            <h2>Geckotronic Mark III Explosive Device</h2>
          </div>
          <div className="midSection">
            <div className="leftHandSide">
              <div className="bombRow row1">
                <div className="LHwireconnector"></div>
                <div className="LHwire LHwire1"></div>
                <div className="RHwireconnector"></div>
                <p className="wireNumber">1</p>
                <div className="LHwireconnector"></div>
              </div>
              <div className="bombRow row2">
                <div className="LHwireconnector"></div>
                <div className="LHwire LHwire2"></div>
                <div className="RHwireconnector"></div>
                <p className="wireNumber">2</p>
                <div className="LHwireconnector"></div>
              </div>
              <div className="bombRow row3">
                <div className="LHwireconnector"></div>
                <div className="LHwire LHwire3"></div>
                <div className="RHwireconnector"></div>
                <p className="wireNumber">3</p>
                <div className="LHwireconnector"></div>
              </div>
              <div className="bombRow row4">
                <div className="LHwireconnector"></div>
                <div className="LHwire LHwire4"></div>
                <div className="RHwireconnector"></div>
                <p className="wireNumber">4</p>
                <div className="LHwireconnector"></div>
              </div>
              <div className="bombRow row5">
                <div className="LHwireconnector"></div>
                <div className="LHwire LHwire5"></div>
                <div className="RHwireconnector"></div>
                <p className="wireNumber">5</p>
                <div className="LHwireconnector"></div>
              </div>
              <div className="bombRow row6">
                <div className="LHwireconnector"></div>
                <div className="LHwire LHwire6"></div>
                <div className="RHwireconnector"></div>
                <p className="wireNumber">6</p>
                <div className="LHwireconnector"></div>
              </div>
            </div>
            <div className="innerHousing">
              <div
                className={wires[0]}
                id="0"
                onClick={(e) => {
                  cutWire(e.target);
                }}
              >
                {" "}
              </div>
              <div
                className={wires[1]}
                id="1"
                onClick={(e) => {
                  cutWire(e.target);
                }}
              >
                {" "}
              </div>
              <div
                className={wires[2]}
                id="2"
                onClick={(e) => {
                  cutWire(e.target);
                }}
              >
                {" "}
              </div>
              <div
                className={wires[3]}
                id="3"
                onClick={(e) => {
                  cutWire(e.target);
                }}
              >
                {" "}
              </div>
              <div
                className={wires[4]}
                id="4"
                onClick={(e) => {
                  cutWire(e.target);
                }}
              >
                {" "}
              </div>
              <div
                className={wires[5]}
                id="5"
                onClick={(e) => {
                  cutWire(e.target);
                }}
              >
                {" "}
              </div>
            </div>
            <div className="rightHandSide">
              <div className="RHbombRow row1">
                <div className="RHwireconnector"></div>
                <p className="wireNumber">1</p>
              </div>
              <div className="RHbombRow row2">
                <div className="RHwireconnector"></div>
                <p className="wireNumber">2</p>
              </div>
              <div className="RHbombRow row3">
                <div className="RHwireconnector"></div>
                <p className="wireNumber">3</p>
              </div>
              <div className="RHbombRow row4">
                <div className="RHwireconnector"></div>
                <p className="wireNumber">4</p>
              </div>
              <div className="RHbombRow row5">
                <div className="RHwireconnector"></div>
                <p className="wireNumber">5</p>
              </div>
              <div className="RHbombRow row6">
                <div className="RHwireconnector"></div>
                <p className="wireNumber">6</p>
              </div>
            </div>
            <div className="timerSection">
              <h3 className="timer">{timeLeft.timerDisplay}</h3>
              <div className="detonate"></div>
            </div>
          </div>
                <div className="bottomSection">
                    <p className='emailHint'>For a copy of the user manual email geckotowers@gmail.com specifying the make of the device in the subject line</p>
          </div>
            </div>
            <button onClick={resetWires}> Reset </button>
      </div>
    );
}

export default Bomb