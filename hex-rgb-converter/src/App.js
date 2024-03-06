import "./App.css";
import { useEffect, useState } from "react";
import Age from "./Age";
import "./index.css";
import UserForm from "./UserForm";
import UserList from "./UserList";
import Menu from "./Menu";
import React from "react";
import { ReactDOM } from "react";
import { routeMaps } from ".";

function App() {
  const [age, setAge] = useState(18);
  console.log("1");

  useEffect(() => {
    console.log("3");
  });

  return (
    <>
      <Menu />
      {console.log("2")}
      <div className="App">Hello world</div>

      <button
        onClick={() => {
          console.log("start...");
          setAge((prev) => prev + 1);
        }}
      >
        Change age
      </button>
      <Age age={age} />
    </>
  );
}

export default App;
