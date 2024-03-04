import React from "react";
import ComponentA from "./ComponentA";
import { useState ,createContext} from "react";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const increaseCount=()=> setCount((prev)=> prev+1);

  return (
    <div>
    <CountContext.Provider value={{count,increaseCount}}>
      <ComponentA/>
    </CountContext.Provider>
    </div>
  );
};
export default App;