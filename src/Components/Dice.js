import React from "react";
import DiceRoller from "./DiceRoller";

function Dice() {
    return (
        <div>
            <h1 className='header'>Dice Roller</h1>
            <div className="dice">
                <div className="diceRow1">
                <DiceRoller id={'D4'} x={4} /> 
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <DiceRoller id={'D8'} x={8} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <DiceRoller id={'D12'} x={12} />
                </div>
                <div className="diceRow2">
                <DiceRoller id={'D6'} x={6} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <DiceRoller id={'D10'} x={10} />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <DiceRoller id={'D20'} x={20} />
                </div>
            </div>
        </div>
    )
    }
export default Dice;