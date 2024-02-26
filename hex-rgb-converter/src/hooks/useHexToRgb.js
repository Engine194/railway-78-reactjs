import { useState } from "react";
import COLOR_TYPE from "../ColorInput";
import { generateColorInputProps } from "../utils";
export const useHexToRgb = () => {
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

      return {
        hex,
        rgb,
        hexInputProps,
        toHex,
        toRgb,
        rgbInputProps,
      };

};