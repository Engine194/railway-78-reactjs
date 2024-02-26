import React from 'react'
import { useState } from "react";
import ComponentB from './ComponentB';


const ComponentA = () => {
const [count, setCount] = useState("");

const plusCount = () =>{
    setCount(count +1);
}

  return (
    
    <div>
        <h1>component A</h1>
        <ComponentB data={count} plusCount={plusCount}/>
    </div>
  )
}

export default ComponentA