import { useContext } from "react";
import { CountContext } from "./App";

const CompunentC = () => {
  const { count, count2 } = useContext(CountContext); // value={count,count2}

  return (
    <div>
      <button onClick={count2}>Count</button>
      <h2>Count:{count}</h2>
    </div>
  );
};

export default CompunentC;
