import { useContext, useState } from "react";
import "../index.css";
import BoxNumber from "./BoxNumber";
import TotalScore from "./TotalScore";
import DiceRoll from "./DiceRoll";
import RuleClick from "./RuleClick";

const SecondPage = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between upper-section">
          <TotalScore />
          <BoxNumber />
        </div>
        <div className="lower-section flex flex-col items-center md:mt-10">
          <DiceRoll />
        </div>
        <div>
          <RuleClick />
        </div>
      </div>
    </>
  );
};

export default SecondPage;
