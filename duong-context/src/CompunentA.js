import { useState } from "react";
import CompunentB from "./CompunentB";
import { createContext } from "react";
const CompunentA = () => {
  const [count, setCount] = useState(0);
  const count2 = () => setCount((prev) => prev + 1);

  return <CompunentB count={count} count2={count2} />;
};

export default CompunentA;
