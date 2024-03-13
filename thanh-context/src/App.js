import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./ComponentA";
import React, { createContext, useState } from "react";

export const CountContext = createContext();
const CountProvider = CountContext.Provider;

function App() {
  const [count, setCount] = useState(0);

    const handlerCount = () => {
        setCount(function(value) {
            return value + 1;
        })
    }
  return (
    <div className="App">
      <CountProvider value={{ count, handlerCount }}>
        <ComponentA />
      </CountProvider>
    </div>
  );
}

export default App;
