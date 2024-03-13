import React, { useState } from 'react';
import "./styles/duc.css";
import { Link } from "react-router-dom";
import TextInput from './TextInput';
import ActionButton from './ActionButton';


const DucPhan = () => {
    const [rightInput, setRightInput] = useState("");
    const [leftInput, setLeftInput] = useState("");


    return (
        <div className='container'>
            <div className='left-input'>
                <TextInput />
            </div>
            <div className='container-btn'>
                <button className='left-btn'>To right</button>
                <button className='right-btn'>To left</button>
            </div>
            <div className='right-input'>
                <TextInput />
            </div>
        </div>
    );
};

export default DucPhan;