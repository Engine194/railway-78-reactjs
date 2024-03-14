export const GENDER_TYPE = {
  MALE: "1",
  FEMALE: "0",
};

export const COLOR_TYPE = {
  HEX: "hex",
  RGB: "rgb",
};

export const generateColorInputProps = (
  type,
  label,
  inputClassName,
  color,
  changeColor
) => ({
  type,
  label,
  color,
  inputClassName,
  changeColor,
});
export const convertHex2Rgb = (hex) => {
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
  return convertedRgb;
};

export const convertRgb2Hex = (rgb) => {
  const numbers = rgb.split(",").map((num) => (+num).toString(16));
  return numbers.reduce((acc, val) => {
    const convertedVal = `${val}`.padStart(2, "0");
    return `${acc}${convertedVal}`;
  }, "");
};
