
import { useEffect, useState } from "react";
import Age from "./Age";

function App() {
  const [age, setAge] = useState(18)
  const [show, setShow] = useState(true)

  console.log("1")
  useEffect(() => {     //side effect
      console.log("3")
  })

  useEffect(() => {
    if(age === 20 ){
      setShow(false)
    }
  },[age])

  return <main>
  {console.log('2')}
  <h1>Hello world {age}</h1>
  <button onClick={() => {
    console.log('start...')
    setAge(prev => prev + 1)
  }}>Change Age</button>
  {show ? <Age age={age}/> : null}
  </main>
  
}

export default App;
