import "./App.css";
import CompunentA from "./CompunentA";
import { createContext } from "react";
import { useState } from "react";

export const CountContext = createContext();
const CountProvider = CountContext.Provider;
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountProvider
        value={{ count, count2: () => setCount((prev) => prev + 1) }}
      >
        <CompunentA />
      </CountProvider>
    </div>
  );
}

export default App;
