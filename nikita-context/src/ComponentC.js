import React from "react";

const ComponentC = (props) => {
  const { count, increaseCountByOne } = props || {};
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCountByOne}>Increase</button>
    </div>
  );
};

export default ComponentC;
