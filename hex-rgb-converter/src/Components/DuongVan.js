import React, { useState } from "react";
import "../styles/duongvan.css";

const DuongVan = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handleChangeA = (event) => setInputA(event.target.value);
  const handleChangeB = (event) => setInputB(event.target.value);

  const moveToRight = () => {
    setInputB(inputA);
    setInputA("");
  };

  const moveToLeft = () => {
    setInputA(inputB);
    setInputB("");
  };

  return (
    <>
      <div className="container">
        <input
          className="input"
          value={inputA}
          onChange={handleChangeA}
        ></input>
        <div className="button">
          <button className="duongvan-btn" type="button" onClick={moveToRight}>
            Move to left
          </button>
          <button className="duongvan-btn" type="button" onClick={moveToLeft}>
            Move to right
          </button>
        </div>
        <input
          className="input"
          value={inputB}
          onChange={handleChangeB}
        ></input>
      </div>
      ;
    </>
  );
};

export default DuongVan;
