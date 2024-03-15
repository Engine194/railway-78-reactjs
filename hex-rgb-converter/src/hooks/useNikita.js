import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../libs/redux/features/count/countSlice";

export const useNikita = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  console.log('countStore...', value);
  const increaseCount = () => {
    dispatch(increment());
  }

  const decreaseCount = () => {
    dispatch(decrement());
  }

  const increaseCountWithAmount = () => {
    dispatch(incrementByAmount(+inputA));
  }

  const handleChangeA = (e) => setInputA(e.target.value);
  const handleChangeB = (e) => setInputB(e.target.value);

  const moveToRight = () => {
    setInputB(inputA);
    setInputA("");
  };

  const moveToLeft = () => {
    setInputA(inputB);
    setInputB("");
  };

  return {
    inputA,
    inputB,
    handleChangeA,
    handleChangeB,
    moveToLeft,
    moveToRight,
    increaseCount,
    decreaseCount,
    increaseCountWithAmount,
  };
};
