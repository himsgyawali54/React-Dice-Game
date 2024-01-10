import React, { createContext, useContext, useState } from "react";
export const ContextApp = createContext("");

function ContextApi({ children }) {
  const [currentDice, setCurrentDice] = useState(1);
  const [ruleclick, setRuleClick] = useState(false);
  const [selectednumber, setSelectedNumber] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [count, setCount] = useState(0);
  const [numberset, setNumberSet] = useState(false);
  return (
    <ContextApp.Provider
      value={{
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
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export default ContextApi;
