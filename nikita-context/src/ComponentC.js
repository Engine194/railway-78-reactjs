import React, {useContext} from "react";
import { CountContext } from "./App";

const ComponentC = () => {
  const { count, increaseCountByOne } = useContext(CountContext); // values = {count, increaseCountByOne}
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCountByOne}>Increase</button>
    </div>
  );
};

export default ComponentC;
