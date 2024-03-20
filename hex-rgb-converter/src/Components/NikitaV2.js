import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/nikita.css";
import { convertHex2Rgb, convertRgb2Hex } from "../utils";
const NikitaV2 = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handleChangeA = (e) => setInputA(e.target.value);
  const handleChangeB = (e) => setInputB(e.target.value);

  const moveToRight = () => {
    const rgb = convertHex2Rgb(inputA);
    setInputB(rgb);
  };

  const moveToLeft = () => {
    const hex = convertRgb2Hex(inputB);
    setInputA(hex);
  };

  return (
    <>
      <Menu />
      <div
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: inputA || inputB,
        }}
      ></div>
      <div className="nikita-container">
        <input
          className="nikita-input"
          value={inputA}
          onChange={handleChangeA}
        />
        <div className="nikita-actions">
          <button onClick={moveToLeft} className="nikita-btn" type="button">
            Move to Left
          </button>
          <button onClick={moveToRight} className="nikita-btn" type="button">
            Move to Right
          </button>
        </div>
        <input
          className="nikita-input"
          value={inputB}
          onChange={handleChangeB}
        />
      </div>
    </>
  );
};

export default NikitaV2;

// const [inputA, setInputA] = useState("");
//   const [inputB, setInputB] = useState("");

//   const handleChangeA = (e) => setInputA(e.target.value);
//   const handleChangeB = (e) => setInputB(e.target.value);

//   const moveToRight = () => {
//     const rgb = convertHex2Rgb(inputA);
//     setInputB(rgb);
//   };

//   const moveToLeft = () => {
//     const hex = convertRgb2Hex(inputB);
//     setInputA(hex);
//   };
