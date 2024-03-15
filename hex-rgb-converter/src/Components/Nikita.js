import React from "react";
import "../styles/nikita.css";
import { useNikita } from "../hooks/useNikita";

const Nikita = () => {
  const {
    inputA,
    inputB,
    handleChangeA,
    handleChangeB,
    moveToLeft,
    moveToRight,
    increaseCount,
    decreaseCount,
    increaseCountWithAmount,
  } = useNikita();

  return (
    <div className="nikita-container">
      <input className="nikita-input" type="number" value={inputA} onChange={handleChangeA} />
      <div className="nikita-actions">
        <button onClick={moveToLeft} className="nikita-btn" type="button">
          Move to Left
        </button>
        <button onClick={moveToRight} className="nikita-btn" type="button">
          Move to Right
        </button>
        <button type="button" onClick={increaseCount}>increment</button>
        <button type="button" onClick={decreaseCount}>decrement</button>
        <button type="button" onClick={increaseCountWithAmount}>increment by amount</button>
      </div>
      <input className="nikita-input" value={inputB} onChange={handleChangeB} />
    </div>
  );
};

export default Nikita;
