import React, { useContext } from 'react'
import { ComponentContext } from '../App'

const ComponentC = () => {
  const values = useContext(ComponentContext)
  console.log(values)
  const {count, plusCount} = values
  console.log(count)

  return (
    <div>

      <p>Count:{count}</p>
        <button onClick={plusCount} >increase </button>
    </div>
  )
}

export default ComponentC;