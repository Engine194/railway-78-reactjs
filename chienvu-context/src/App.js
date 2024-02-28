import { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./ComponentA";

export const CountContext = createContext();
const CountProvider = CountContext.Provider;
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CountProvider
        value={{
          count,
          increaseCountByOne: () => setCount((prev) => prev + 1),
        }}
      >
        <ComponentA />
      </CountProvider>
    </div>
  );
}

export default App;