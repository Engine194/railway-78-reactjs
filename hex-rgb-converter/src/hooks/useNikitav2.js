import React, { useState } from 'react';
import { convertHex2Rgb, convertRgb2Hex } from '../utils';

const useNikitav2 = () => {
    const [inputA, setInputA] = useState("");
    const [inputB, setInputB] = useState("");

    const handleChangeA = (e) => setInputA(e.target.value);
    const handleChangeB = (e) => setInputB(e.target.value);

    const moveToRight = () => {
        const rgb = convertHex2Rgb(inputA);
        setInputB(rgb);
    };

    const moveToLeft = () => {
        const hex = convertRgb2Hex(inputB);
        setInputA(hex);
    };


    return {
        inputA,
        inputB,
        handleChangeA,
        handleChangeB,
        moveToLeft,
        moveToRight
    }
};

export default useNikitav2;