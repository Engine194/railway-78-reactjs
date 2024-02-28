import "./App.css";
import { useEffect, useState } from "react";
import Age from "./Age";

function App() {
  const [age, setAge] = useState(18);
  console.log("1");

  useEffect(() => {
    console.log("3");
  });

  return (
    <main>
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
    </main>
  );
}

export default App;
