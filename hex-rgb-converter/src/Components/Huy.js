import React, { useState } from 'react';
import '../styles/input.css'


const Huy = () => {
    const [leftInput, setLeftInput] = useState('');
    const [rightInput, setRightInput] = useState('');
  
    const handleMoveToRight = () => {
      setRightInput(leftInput);
      setLeftInput('');
    };
  
    const handleMoveToLeft = () => {
      setLeftInput(rightInput);
      setRightInput('');
    };
  
    return (
      <div className='input'>
        <div>
          <input className='input-left'
            type="text"
            value={leftInput}
            onChange={(e) => setLeftInput(e.target.value)}
          />
          <button className='btn' onClick={handleMoveToRight}>Move to Right</button>
        </div>
  
        <div>
          <input className='input-right'
            type="text"
            value={rightInput}
            onChange={(e) => setRightInput(e.target.value)}
          />
          <button className='btn' onClick={handleMoveToLeft}>Move to Left</button>
        </div>
      </div>
    );
  };

export default Huy