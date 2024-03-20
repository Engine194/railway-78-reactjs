import React, { useState } from 'react'

function Chinh() {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');
  
    const handleMoveToRight = () => {
      setRightText(leftText);
      setLeftText('');
    };
  
    const handleMoveToLeft = () => {
      setLeftText(rightText);
      setRightText('');
    };
  
    return (
      <div>
        <div>
          <input
            type="text"
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
          />
          <button onClick={handleMoveToRight}>Move to right</button>
        </div>
        <div>
          <input
            type="text"
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
          />
          <button onClick={handleMoveToLeft}>Move to left</button>
        </div>
      </div>
    );
  }
  
  export default Chinh;
