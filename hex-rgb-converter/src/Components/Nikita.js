import React, { useState } from "react";
import "../styles/nikita.css";

const Nikita = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handleChangeA = (e) => setInputA(e.target.value);
  const handleChangeB = (e) => setInputB(e.target.value);

  const moveToRight = () => {
    setInputB(inputA);
    setInputA("");
  }

  const moveToLeft = () => {
    setInputA(inputB);
    setInputB("");
  }

  return (
    <div className="nikita-container">
      <input className="nikita-input" value={inputA} onChange={handleChangeA} />
      <div className="nikita-actions">
        <button onClick={moveToLeft} className="nikita-btn" type="button">
          Move to Left
        </button>
        <button onClick={moveToRight} className="nikita-btn" type="button">
          Move to Right
        </button>
      </div>
      <input className="nikita-input" value={inputB} onChange={handleChangeB} />
    </div>
  );
};

export default Nikita;
