import React, { useState } from 'react'
import "../styles/trinh.css";


const Trinh = () => {
  const [text, setText] = useState("");
 
console.log(text);
  return (
    <>
    <div className='container-mess'>
        <div className='input-mess'>
            <input className='input-text' placeholder='...input your message' value={text}></input>
        </div>

        <div>
        <div className='btn'>
            <button className='btn-input' >Move to left</button>
            <button className='btn-input'>Move to right</button>
            </div>
        </div>

        <div className='input-mess'>
            <input className='input-text' placeholder='...input your message'></input>
        </div>

    </div>
    </>
  )
}

export default Trinh