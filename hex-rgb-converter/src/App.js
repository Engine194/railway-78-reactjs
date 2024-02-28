import Age from "./Age";
import "./App.css";
import { useEffect, useState} from "react"


function App() {
  const [age, setAge] = useState(18);
  const [show, setshow]= useState(false)
  console.log('1');

  useEffect(() => {
    console.log('3');
  });

  return <main>
    {console.log('2')}
    <h1>Hello world {age}</h1>

    <button onClick={() =>{
      console.log('start...');
      setAge(prev => prev + 1)
    }}>Change age</button>
    <Age age={age}/>
  </main>
}

export default App;
