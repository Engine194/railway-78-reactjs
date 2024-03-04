import React from 'react'
import { useContext } from 'react'
import{CountContext} from './App'

const ComponentC = ()=>{
    const {count,increaseCount} = useContext(CountContext);
    // count bên CompA có gía trị là gì thì bên CompC nhận giá trị đó
    
  return (
    <div>
        <p> Đếm: {count}</p>
        <button onClick={increaseCount} >
            Click 
        </button>
    </div>
  )
}
export default ComponentC;