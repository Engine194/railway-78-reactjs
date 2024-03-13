import React, { useState } from "react";
import "./styles/duc.css";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import ActionButton from "./ActionButton";

const DucPhan = () => {
  const [rightInput, setRightInput] = useState("");
  const [leftInput, setLeftInput] = useState("");

  const changeLeft = (e) => setLeftInput(e.target.value);
  const changeRight = (e) => setRightInput(e.target.value);

  const toLeft = () => {
    setRightInput(leftInput);
    setLeftInput("");
  };

  const toRight = () => {
    setLeftInput(rightInput);
    setRightInput("");
  };

  return (
    <div className="container">
      <div className="left-input">
        {/* <TextInput /> */}
        <input value={leftInput} onChange={changeLeft} />
      </div>
      <div className="container-btn">
        <button onClick={toRight} className="left-btn">
          To right
        </button>
        <button onClick={toLeft} className="right-btn">
          To left
        </button>
      </div>
      <div className="right-input">
        {/* <TextInput /> */}
        <input value={rightInput} onChange={changeRight} />
      </div>
    </div>
  );
};

export default DucPhan;
