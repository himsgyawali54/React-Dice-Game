import { useContext, useState } from "react";

import "../index.css";
import { ContextApp } from "../context/ContextApi";
const DiceRoll = () => {
  const {
    currentDice,
    setCurrentDice,
    ruleclick,
    setRuleClick,
    selectednumber,
    setSelectedNumber,
    showMessage,
    setShowMessage,
    count,
    setCount,
    numberset,
    setNumberSet,
  } = useContext(ContextApp);
  const newNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rollDice = () => {
    if (!selectednumber) {
      return setNumberSet(true);
    }
    const randomnum = newNumber(1, 7);
    setCurrentDice(randomnum);

    if (selectednumber === currentDice) {
      setCount((prev) => prev + selectednumber);
      setShowMessage(true);
    } else {
      setCount((prev) => prev - 2);
      setShowMessage(false);
    }
    setSelectedNumber(!selectednumber);
  };

  const handleRules = () => {
    setRuleClick(!ruleclick);
  };
  const handleReset = () => {
    setCount(0);
    setShowMessage(true);
  };
  return (
    <>
      <div className="dice-click">
        <button onClick={rollDice}>
          <img className="w-1/3 mx-auto h-auto" src="/images/dice.png" alt="" />
        </button>
      </div>
      <div className="buttons flex flex-col gap-5">
        <p>Click on Dice to Roll</p>
        <button className="border-2 border-slate-600 p-2" onClick={handleReset}>
          Reset score
        </button>
        <button className="bg-black text-white p-2" onClick={handleRules}>
          Show/Hide Rules
        </button>
      </div>
    </>
  );
};

export default DiceRoll;
