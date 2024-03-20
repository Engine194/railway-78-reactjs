import React, { useState } from "react";
import "../styles/nikita.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../libs/redux/features/count/countSlice";

const Nikita = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handleChangeA = (e) => setInputA(e.target.value);
  const handleChangeB = (e) => setInputB(e.target.value);

  const moveToRight = () => {
    setInputB(inputA);
    setInputA("");
  };

  const moveToLeft = () => {
    setInputA(inputB);
    setInputB("");
  };
  const { value } = useSelector((state) => state.counter);
  console.log("countStore", value);
  const increaseCount = () => {
    dispatch(increment());
  };

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
        <button type="button" onClick={increaseCount}>
          increment
        </button>
      </div>
      <input className="nikita-input" value={inputB} onChange={handleChangeB} />
    </div>
  );
};

export default Nikita;

// const [inputA, setInputA] = useState("");
//   const [inputB, setInputB] = useState("");

//   const handleChangeA = (e) => setInputA(e.target.value);
//   const handleChangeB = (e) => setInputB(e.target.value);

//   const moveToRight = () => {
//     setInputB(inputA);
//     setInputA("");
//   }

//   const moveToLeft = () => {
//     setInputA(inputB);
//     setInputB("");
//   }
