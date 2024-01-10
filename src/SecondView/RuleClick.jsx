import { useContext, useState } from "react";
import "../index.css";

import { ContextApp } from "../context/ContextApi";

const RuleClick = () => {
  const { ruleclick, setRuleClick } = useContext(ContextApp);
  return (
    <>
      {ruleclick && (
        <div className="w-2/5 rules-section bg-gray-300 mt-0 p-4">
          <h3>Rules</h3>
          <ul className="list-decimal list-inside">
            <li>Select any number</li>
            <li>click on a dice to roll</li>
            <li>
              If selected number is equal to dice number you'll get a points
            </li>
            <li>
              If users fail to match numbers then -2 points will be deducted.
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default RuleClick;
