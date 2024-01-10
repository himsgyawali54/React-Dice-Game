import { useContext, useState } from "react";
import "../index.css";
import { ContextApp } from "../context/ContextApi";
const BoxNumber = () => {
  const { selectednumber, setSelectedNumber, numberset, setNumberSet } =
    useContext(ContextApp);
  const boxnumbers = [1, 2, 3, 4, 5, 6];

  const handleBox = (number) => {
    setSelectedNumber(number);

    setNumberSet(false);
  };

  return (
    <div className="w-1/4 pt-4">
      {numberset && (
        <p className="text-center text-red-600">
          You haven't selected any number
        </p>
      )}

      <div className="boxes flex gap-3 p-4">
        {boxnumbers.map((value, i) => (
          <button key={i} onClick={() => handleBox(value)}>
            <span
              style={{
                backgroundColor: selectednumber === value ? "black" : "initial",
                color: selectednumber === value ? "white" : "initial",
              }}
            >
              {value}
            </span>
          </button>
        ))}
      </div>
      <h4 className="pt-1 font-bold text-right">Select a Number</h4>
    </div>
  );
};

export default BoxNumber;
