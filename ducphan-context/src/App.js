import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';
import React, { createContext, useState } from 'react';

export const CountContext = createContext();
const CountProvider = CountContext.Provider;


function App() {

  const [count, setCount] = useState(0);
  const plusCount = () => setCount((prev) => prev + 1);
  
  return (
    <div>
      <CountProvider value={{
        count : count,
        plusCount : plusCount
      }}>
        <ComponentA />

      </CountProvider>

    </div>
  );
}

export default App;
