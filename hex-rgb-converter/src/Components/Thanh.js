import React, { useState } from "react";

const Thanh = () => {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  const handleInputLeft = (e) => {
    const newVal = e.target.value
    console.log("new Value", newVal);
    setLeft(newVal);
  };

  const handleMoveRight = () => {
    setRight(left);
    setLeft("");
  };

  return (
    <div className="container">
      <div className="input">
        <input
          className="input-left"
          type="text"
          name="left"
          value={left}
          onChange={handleInputLeft}
          placeholder="Enter left..."
        />
      </div>

      <div className="container-btn">
        <button className="btn-left">Move to left</button>
        <button onClick={handleMoveRight} className="btn-right">Move to right</button>
      </div>

      <div className="input">
        <input
          className="input-right"
          type="text"
          name="right"
          placeholder="Enter right..."
        />
      </div>
    </div>
  );
};

export default Thanh;
