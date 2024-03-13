import React, { useContext } from "react"
import { CountContext } from "./App";


export default function ComponentC () {
    const {count, handlerCount} = useContext(CountContext);
    return (
        <div className="container">
            <p>Count:  {count}</p>
            <br/>
            <button onClick={handlerCount}>Click</button>
        </div>
    );
}