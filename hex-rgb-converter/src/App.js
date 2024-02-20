import { useState } from "react";
import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ColorInput from "./ColorInput";
import ActionButton from "./ActionButton";
import { COLOR_TYPE, generateColorInputProps } from "./utils";
import UserList from "./UserList";
import UserForm from "./UserForm";
import ThanhForm from "./ThanhForm";

function App() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");

  const toHex = () => {
    const numbers = rgb.split(",").map((num) => (+num).toString(16));
    const newVal = numbers.reduce((acc, val) => {
      const convertedVal = `${val}`.padStart(2, "0");
      return `${acc}${convertedVal}`;
    }, "");
    setHex(newVal);
  };

  const toRgb = () => {
    if (hex.length === 6) {
      const numbers = hex.split("").reduce((acc, char, i) => {
        if (i % 2 === 1) {
          acc[acc.length - 1] += char;
        } else {
          acc.push(char);
        }
        return acc;
      }, []);
      const convertedNumbers = numbers.map((num) => Number.parseInt(num, 16));
      const convertedRgb = convertedNumbers.join(", ");
      setRgb(convertedRgb);
    }
  };

  const colorPropsMap = new Map([
    [
      COLOR_TYPE.HEX,
      generateColorInputProps(
        COLOR_TYPE.HEX,
        "Hex color",
        "hex-input",
        hex,
        setHex
      ),
    ],
    [
      COLOR_TYPE.RGB,
      generateColorInputProps(
        COLOR_TYPE.RGB,
        "RGB color",
        "rgb-input",
        rgb,
        setRgb
      ),
    ],
  ]);

  const hexInputProps = colorPropsMap.get(COLOR_TYPE.HEX);
  const rgbInputProps = colorPropsMap.get(COLOR_TYPE.RGB);

  return (
    <div className="App">
      <h1 className="greeting-heading">Welcome to Hex-RGB Converter</h1>
      <div
        className="demo-color"
        style={{
          backgroundColor: hex ? `#${hex}` : rgb ? `rgb(${rgb})` : "aliceblue",
        }}
      />
      <div className="color-form">
        <ColorInput {...hexInputProps} />
        <div className="btn-actions">
          <ActionButton
            className="tohex-btn"
            title="Convert to Hex color"
            onClick={toHex}
            Icon={ArrowLeft}
          />
          <ActionButton
            className="torgb-btn"
            title="Convert to RGB color"
            onClick={toRgb}
            Icon={ArrowRight}
          />
        </div>
        <ColorInput {...rgbInputProps} />
      </div>
      {/* <UserList/> */}
      {/* <UserForm/> */}

      <ThanhForm/>


    </div>
  );
}

export default App;
