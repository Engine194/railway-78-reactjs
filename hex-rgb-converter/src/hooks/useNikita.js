import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from "../libs/redux/features/counter/countSlice";

export const useNikita = () => {
    const [inputA, setInputA] = useState("");
    const [inputB, setInputB] = useState("");
    const dispatch = useDispatch();

    const value = useSelector(state => state.counter)

    console.log('countStore', value.value );

    const increaseCount = () => {
        dispatch(increment());
    }

    const decreaseCount = () => {
        dispatch(decrement());
    }

    const increaseCountEithAmount = () => {
        dispatch(incrementByAmount(+inputA))
    }

    const handleChangeA = (e) => setInputA(e.target.value);
    const handleChangeB = (e) => setInputB(e.target.value);

    const moveToRight = () => {
        setInputB(inputA);
        setInputA("");
    }

    const moveToLeft = () => {
        setInputA(inputB);
        setInputB("");
    }


    return {
        inputA,
        inputB,
        handleChangeA,
        handleChangeB,
        moveToLeft,
        moveToRight,
        increaseCount,
        decreaseCount,
        increaseCountEithAmount,
    }
}