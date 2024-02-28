import React,{useContext} from 'react'
import { CountContext } from './App';

const ComponentC = () => {
    const {data, plusCount} = useContext(CountContext);
  return (
    <div>
        <button onClick={plusCount}>count: {data}</button>
    </div>
  )
}

export default ComponentC;