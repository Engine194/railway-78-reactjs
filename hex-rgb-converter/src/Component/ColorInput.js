import React from "react";
import { COLOR_TYPE } from ".";

export default function ColorInput(props) { // UI component
  const { label, color, changeColor, type, inputClassName } = props || {};

  const handleChangeColor = (event) => {
    const newVal = event.target.value;
    changeColor(newVal);
  };

  return (
    <fieldset className="input-wrapper">
      <label htmlFor="hex">{label}:</label>
      <input
        id="hex"
        className={`${inputClassName} color-input`}
        name="hex"
        value={color}
        onChange={handleChangeColor}
        maxLength={type === COLOR_TYPE.HEX ? 6 : 13}
      />
    </fieldset>
  );
}