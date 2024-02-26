import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [count, setCount] = useState(0);
  const increaseCountByOne = () => setCount((prev) => prev + 1);

  return (
    <div>
      <ComponentB count={count} increaseCountByOne={increaseCountByOne} />
    </div>
  );
};

export default ComponentA;
