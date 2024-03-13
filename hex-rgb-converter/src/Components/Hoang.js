import React from 'react'
import "../styles/hoang.css"
const Hoang = () => {
  return (
    <div className='all-container'>
        
        <input className='col-left'/>
        <input className='col-right'/>
        <button className='move-left'>Move to left</button>
        <button className='move-right'>Move to right</button>
        
    </div>
  )
}

export default Hoang