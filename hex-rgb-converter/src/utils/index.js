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
