import React, { useState } from 'react'
import Menu from './Menu';
import { convertHex2Rgb, convertRgb2Hex } from '../utils';

function ChienNguyen() {
    const [hexValue, setHexValue] = useState('');
    const [rgbValue, setRbgValue] = useState('');

    const handleHexChange = (event) => {
        setHexValue(event.target.value);
    };
    const handleRbgChange = (event) => {
        setHexValue(event.target.value);
    };

    const hex2rgb = () => {
        const convertedRgb = convertHex2Rgb(hexValue);
        setRbgValue(`RGB(${convertedRgb})`);

    }
    const rgb2hex = () => {
        const convertedHex = convertRgb2Hex(rgbValue);
        setHexValue(`${convertedHex}`);
    }

  return (
    <div>
        <Menu/>
        <h1 className="greeting-heading">Welcome to Hex-RGB Converter</h1>
        <div>   
        <div>
        <label>Hex:</label>
        <input 
          type="text" 
          value={hexValue} 
          onChange={handleHexChange} 
        />
        <button onClick={hex2rgb}>Convert to RGB</button>
      </div>
      <div>
        <label>RGB:</label>
        <input 
          type="text" 
          value={rgbValue} 
          onChange={handleRbgChange} 
        />
        <button onClick={rgb2hex}>Convert to Hex</button>
      </div>
        </div>
    </div>
  )
}

export default ChienNguyen;