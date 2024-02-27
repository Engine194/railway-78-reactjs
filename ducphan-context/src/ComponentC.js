import React, { useContext } from 'react';
import { CountContext } from './App';

const ComponentC = () => {
    const {
        count,
        plusCount
    } = useContext(CountContext);

    return (
        <div>
            {console.log(count)}
            <h2 >Count: {count}</h2>
            <button onClick={plusCount}>Click</button>
        </div>
    );
};

export default ComponentC;