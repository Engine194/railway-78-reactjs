import React, { useState } from "react";
import "../styles/nikita.css";
import { useNikita } from "../hooks/useNikita";
import Menu from "./Menu";
import { incrementByAmount } from "../libs/redux/features/count/countSlice";

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
    <>
    <Menu/>
    <div className="nikita-container">
      <input className="nikita-input" value={inputA} onChange={handleChangeA} />
      <div className="nikita-actions">
        <button onClick={moveToLeft} className="nikita-btn" type="button">
          Move to Left
        </button>
        <button onClick={moveToRight} className="nikita-btn" type="button">
          Move to Right
        </button>
        <button type="button" onClick={increaseCount}>increment</button>
        <button type="button" onClick={decreaseCount}>decrement</button>
        <button type="button" onClick={increaseCountWithAmount}>inrement by Amount</button>

      </div>
      <input className="nikita-input" value={inputB} onChange={handleChangeB} />
    </div>

    </>
  );
};

export default Nikita;
