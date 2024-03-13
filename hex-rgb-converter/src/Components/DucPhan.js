import React, { useState } from 'react';
import "../styles/duc.css"
import { convertHex2Rgb, convertRgb2Hex } from '../utils';

const DucPhan = () => {
    const [toHex, setTohex] = useState('');
    const [toRgb,setToRgb] =useState(""); 

    const handleChangeTohex = (e) => {
        setTohex(e.target.value)
    }

    const handleChangeToRgb = (e) => {
        setToRgb(e.target.value)
        
    }

    const moveToHex = () => {
        const newVal = convertRgb2Hex(toRgb)
        setTohex(newVal)
    }

    const moveToRgb = () => {
        const newVal = convertHex2Rgb(toHex)
        setToRgb(newVal)
    }

    return (
        <div className='duc-container'>
            <h1>Welcome</h1>
            <div
                className="demo-color"
                style={{
                    backgroundColor: toHex
                        ? `#${toHex}`
                        : toHex
                            ? `rgb(${toHex})`
                            : "aliceblue",
                }}
            />
            <div className='input-btn'>
            <input type='text'
                value={toHex}
                onChange={handleChangeTohex}
            />
            <div className='actions-btn'>
                <button type='button' onClick={moveToHex}>To Hex</button>
                <button type='button' onClick={moveToRgb}>To RGB</button>
            </div>
            <input type='text'
                value={toRgb}
                onChange={handleChangeToRgb}
            />

            </div>
        </div>
    );
};

export default DucPhan;