import React from 'react'
import { useState } from "react";
import ComponentC from './ComponentC';

const ComponentB = (props) => {
    const {data} = props || {};
    console.log(data);
  return (
    <div>
        <ComponentC/>

        </div>

  )
}

export default ComponentB