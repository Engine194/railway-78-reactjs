import React, { useState } from "react";
import "../styles/duongvanv2.css";
import "../utils/index";
import Menu from "./Menu";
import { convertHex2Rgb, convertRgb2Hex } from "../utils/index";

const DuongVanV2 = () => {
  // const [hex, setHex] = useState("");

  // const [rgb, setRgb] = useState("");

  // const handleChangeHex = (event) => {
  //   setHex(event.target.value);
  // };

  // const handleChangeRgb = (event) => {
  //   setRgb(event.target.value);
  // };

  // const changeToRgb = () => {
  //   const val = convertHex2Rgb(hex);
  //   setRgb(val);
  // };
  // const changeToHex = () => {
  //   const val = convertRgb2Hex(rgb);
  //   setHex(val);
  // };
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");

  const handleChangeHex = (event) => {
    setHex(event.target.value);
  };

  const handleChangeRgb = (event) => {
    setRgb(event.target.value);
  };

  const changeToHex = () => {
    const val = convertRgb2Hex(rgb);
    setHex(val);
  };
  const changeToRgb = () => {
    const val = convertHex2Rgb(hex);
    setRgb(val);
  };
  return (
    <div>
      <Menu />
      <>
        <h1>Welcome to Hex-RGB Converter</h1>
        <div
          className="demo-color"
          style={{
            backgroundColor: hex
              ? `#${hex}`
              : rgb
              ? `rgb(${rgb})`
              : "aliceblue",
          }}
        />
        <div className="container">
          <input
            className="color-input"
            placeholder="Hex"
            value={hex}
            onChange={handleChangeHex}
          />
          <div className="change-button">
            <button type="button" onClick={changeToRgb}>
              ChangeToRgb
            </button>
            <button type="button" onClick={changeToHex}>
              changeToHex
            </button>
          </div>

          <input
            className="color-input"
            placeholder="RGB"
            value={rgb}
            onChange={handleChangeRgb}
          />
        </div>
      </>
    </div>
  );
};

export default DuongVanV2;
