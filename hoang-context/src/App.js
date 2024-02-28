import { createContext, useState } from 'react';
import ComponentA from './Component/ComponentA'

export const ComponentContext = createContext()
const CountProvider = ComponentContext.Provider

function App() {
  const [count,setCount] = useState(0)
    
  const plusCount = () => setCount(count+1)
 

  return (
    <CountProvider value={{count, plusCount}}>
      <ComponentA />
    </CountProvider>
  )
}

export default App;
