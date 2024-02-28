import { useEffect, useState } from "react";
import "./App.css";
import Age from "./Age";

function App() {
  const [age, setAge] = useState(18);
  console.log('1');

  useEffect(() => {
    console.log('3');
  });

  return <main>
    {console.log('2')}
    <h1>Hello world {age}</h1>

    <button onClick={() => {
      console.log('start...');
      setAge(pre => pre + 1)
    }}>Change age</button>
    <Age age={age}/>
  </main>
}

export default App;
