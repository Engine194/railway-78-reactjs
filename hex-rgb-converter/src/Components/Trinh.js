import React, { useState } from "react";
import "../styles/trinh.css";

const Trinh = () => {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  const handleChangeA = (e) => setTextA(e.target.value);
  const handleChangeB = (e) => setTextB(e.target.value);

  const toLeft = () => {
    setTextB(textA);
    setTextA("");
  }

  const toRight = () => {
    setTextA(textB);
    setTextB("");
  }

  return (
    <>
      <div className="container-mess">
        <div className="input-mess">
          <input
            className="input-text"
            placeholder="...input your message"
            value={textA}
            onChange={handleChangeA}
          />
        </div>

        <div>
          <div className="btn">
            <button onClick={toLeft} className="btn-input">Move to left</button>
            <button onClick={toRight} className="btn-input">Move to right</button>
          </div>
        </div>

        <div className="input-mess">
          <input
            className="input-text"
            placeholder="...input your message"
            value={textB}
            onChange={handleChangeB}
          />
        </div>
      </div>
    </>
  );
};

export default Trinh;
