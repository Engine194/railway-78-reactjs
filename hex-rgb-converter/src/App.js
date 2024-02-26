import { createContext, useState } from "react";
import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ColorInput from "./ColorInput";
import ActionButton from "./ActionButton";
import TrinhForm from "./TrinhForm";
import { useHexToRgb } from "./hooks/useHexToRgb";
import { useUserForm } from "./hooks/userForm";
export const UserFormContext = createContext();
const UserFormContextProvider = UserFormContext.Provider;

function App() {
  const { hex, rgb, hexInputProps, toHex, toRgb, rgbInputProps } =
    useHexToRgb();

  const userFormState = useUserForm();

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
      <UserFormContextProvider value={userFormState}>
        {/* <UserList/> */}
        {/* <UserForm/> */}
        <TrinhForm />
      </UserFormContextProvider>
      <div className="footer">©CoptRight By Trình Lee</div>
    </div>
  );
}

export default App;
