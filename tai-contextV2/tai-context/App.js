import {createContext, useState} from 'react'
import ComponentA from './ComponentA'

export const CountContext = createContext();
const CountProvider = createContext.Provider;
function  App (){
    const [count, setCount] = useState(0);
    const  countPlus = ()=>{setCount(count+1);}
  return (
    <CountProvider value={{data, plusCount}}>
        <ComponentA/> 
    </CountProvider>
 
  )
}

export default App