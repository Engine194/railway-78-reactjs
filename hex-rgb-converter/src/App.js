import { useEffect, useState } from "react";
import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ColorInput from "./ColorInput";
import ActionButton from "./ActionButton";
import { COLOR_TYPE, generateColorInputProps } from "./utils";
import UserList from "./UserList";
import UserForm from "./UserForm";
import Age from "./Age";

function App() {
  const [age, setAge] = useState(18);
  const [show, setShow] = useState(true);
  console.log("1");

  useEffect(() => {     // sideEffect
    console.log('3');
  });

  useEffect(() => {
    if (age === 20) {
      setShow(false);
    }
  }, [age]);
  return <main>
    {console.log("2")};
    <h1>Hello Word {age} </h1>

    <button onClick={() => {
      console.log('start...');
      setAge(prev => prev + 1);
    }}>Change age</button>
    {show ? <Age age={age} /> : null}
  </main>
}

export default App;
