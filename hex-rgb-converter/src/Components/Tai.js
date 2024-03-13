import React, { useState } from 'react'

const Tai = () => {
  const [textRight, setTextRight] = useState('');
  const [textLeft, setTextLeft] = useState('');

  const handleMoveToRight = ()=>{
    setTextLeft("");
    setTextRight(textLeft);
    console.log("...",textLeft);
  };
  const handleMoveToLeft = ()=>{
    setTextLeft(textRight);
    setTextRight("");
    console.log("...",textRight);

  };

  return (
    <div>
      <input
        type="text"
        value={textLeft}
        onChange={(saveText) => setTextLeft(saveText.target.value)}/>
      <button onClick={handleMoveToRight}>Move to right</button>
      <button onClick={handleMoveToLeft}>Move to Left</button>
      <input  
        type="text"
        value={textRight}
        onChange={(saveText) => setTextRight(saveText.target.value)}/>
    </div>
  )
}

export default Tai