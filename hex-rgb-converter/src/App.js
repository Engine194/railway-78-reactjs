import { createContext, useState } from "react";
import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ColorInput from "./ColorInput";
import ActionButton from "./ActionButton";
import { COLOR_TYPE, GENDER_TYPE, generateColorInputProps } from "./utils";
import UserList from "./UserList";
import UserForm from "./UserForm";
import NikitaForm from "./NikitaForm";
import { useHextoRgb } from "./hooks/useHextoRgb";
import { useUserForm } from "./hooks/useUserForm";

export const UserFormContext = createContext();
const UserFormContextProvider = UserFormContext.Provider;

function App() {
  const UserFormState = useUserForm()

  const {
    hex,
    rgb,
    toHex,
    hexInputProps,
    toRgb,
    rgbInputProps,
  } = useHextoRgb()

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

      <UserFormContextProvider value={UserFormState}>
        {/* <UserList/> */}
        {/* <UserForm/> */}

        <NikitaForm  />
      </UserFormContextProvider>
    </div>
  );
}

export default App;

