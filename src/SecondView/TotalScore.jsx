import { useContext, useState } from "react";
import "../index.css";
import { ContextApp } from "../context/ContextApi";

const TotalScore = () => {
  const { showMessage, setShowMessage, count, setCount } =
    useContext(ContextApp);
  return (
    <>
      <div className="w-1/3 p-4 score">
        <span className="text-6xl font-semibold">{count}</span>
        <div className="py-2">{showMessage ? "" : "Not a same number"}</div>

        <h3>Total score</h3>
      </div>
    </>
  );
};

export default TotalScore;
