import React, { useState } from "react";
import { useHoang } from "../hooks/useHoang";
import "../styles/nikita.css";
const Nikita = () => {
  const {
    inputA,
    inputB,
    handleChangeA,
    handleChangeB,
    moveToLeft,
    moveToRight,
    incrementCount,
    decrementCount,
    increaseCountWithAmount,
  } = useHoang()

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
        <button type="button" onClick={incrementCount}>increment</button>
        <button type="button" onClick={decrementCount}>decrement</button>
        <button type="button" onClick={increaseCountWithAmount}>Increase by amount</button>
      </div>
      <input className="nikita-input" value={inputB} onChange={handleChangeB} />
    </div>
  );
};

export default Nikita;
