import { createContext, useState } from "react";
import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ColorInput from "./ColorInput";
import ActionButton from "./ActionButton";
import { COLOR_TYPE, generateColorInputProps } from "./utils";
import UserList from "./UserList";
import UserForm from "./UserForm";
import DuongForm from "./DuongForm";
import { GENDER_TYPE } from "./utils";
export const UserFormContex = createContext();
const UserFormContexProvider = UserFormContex.Provider;
const initialInputValue = { value: "", error: "" };

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

  const initialInputValue = { value: "", error: "" };

  const hexInputProps = colorPropsMap.get(COLOR_TYPE.HEX);
  const rgbInputProps = colorPropsMap.get(COLOR_TYPE.RGB);

  const [fullname, setFullName] = useState(initialInputValue);
  const [email, setEmail] = useState(initialInputValue);
  const [phone, setPhone] = useState(initialInputValue);
  const [gender, setGender] = useState({
    value: GENDER_TYPE.FEMALE,
    error: "",
  });
  const [date, setDate] = useState(initialInputValue);
  const [username, setUserName] = useState(initialInputValue);
  const [password, setPassword] = useState(initialInputValue);
  const [confirmPassword, setConfirmPassword] = useState(initialInputValue);

  const handleChangeFactory = (setState) => {
    return (event) => {
      const newVal = event.target;
      setState((previousState) => {
        return { ...previousState, value: newVal.value };
      });
    };
  };

  const onValidateFactory = (setState) => {
    return (errorMsg) => {
      setState((previousState) => {
        return { ...previousState, error: errorMsg };
      });
    };
  };

  const clearForm = () => {
    [
      setFullName,
      setGender,
      setEmail,
      setUserName,
      setPassword,
      setConfirmPassword,
      setDate,
      setPhone,
    ].forEach((setState) => {
      setState((previousState) => {
        return { ...previousState, value: "", error: "" };
      });
    });
  };

  const clearErrors = () => {
    [
      setFullName,
      setGender,
      setEmail,
      setUserName,
      setPassword,
      setConfirmPassword,
      setDate,
      setPhone,
    ].forEach((setState) => {
      setState((previousState) => {
        return { ...previousState, error: "" };
      });
    });
  };

  const handleChangeGender = handleChangeFactory(setGender);
  const phoneNumber = phone.value; // Assuming phone.value holds the phone number string
  const minLength = 10; // For example, minimum length of 10 digits
  const validatePassword = (password) => {
    // Minimum length requirement
    const minLengthPass = 8;

    // Regular expressions for checking different criteria
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    // Check if all criteria are met
    const isValid =
      password.length >= minLengthPass &&
      hasLowerCase &&
      hasUpperCase &&
      hasNumber &&
      hasSpecialChar;

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate
    clearErrors();
    // validate Fullname
    // const password = event.target.elements.password.value; // Get the password value from the form
    const isValidPassword = validatePassword(password.value);
    if (!isValidPassword) {
      onValidateFactory(setPassword)(
        "Password is not valid. Please ensure it contains at least 8 characters, including at least one lowercase letter, one uppercase letter, one numeric digit, and one special character."
      );
    }

    if (/[^a-zA-Z ]/.test(fullname.value) || /\s{2,}/.test(fullname.value)) {
      onValidateFactory(setFullName)(
        "Fullname is not valid. Please enter a valid name with only one whitespace between words."
      );
    }

    if (/[^01]/.test(gender.value)) {
      onValidateFactory(setGender)("Gender is not valid...");
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
      onValidateFactory(setEmail)("Email is not valid...");
    }

    if (phoneNumber.length < minLength || /[^0-9]/.test(phone.value)) {
      onValidateFactory(setPhone)(
        "Phone is not valid. Please enter a valid 10-digit phone number."
      );
    }

    const values = {
      fullname: fullname.value,
      email: email.value,
      phone: phone.value,
      gender: gender.value,
      date: date.value,
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    // call api create user
    //   console.log("values...", values); // AXIOS == fetch
    // };

    //     if (password !== confirmPassword) {
    //       setErrorMessage("Mật khẩu không khớp");
    //     }
    //   };

    //     const handleChangeFullName = onChangHandlerFactory(setFullName);
    //     const handleChangeEmail = onChangHandlerFactory(setEmail);
    //     const handleChangePhoneNumber = onChangHandlerFactory(setPhonenNumber);
    //     const handleChangeDateOfbirth = onChangHandlerFactory(setDateOfbirth);
    //     const handleChangeUsername = onChangHandlerFactory(setUsername);
    //     const handleChangePassword = onChangHandlerFactory(setPassword);
    //     const handleChangeConfirmPassword = onChangHandlerFactory(setConfirmPassword);

    //   const handleChangeGender = onChangHandlerFactory(setGender);

    return (
      <div className="App">
        <h1 className="greeting-heading">Welcome to Hex-RGB Converter</h1>
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
        <UserFormContexProvider
          value={{
            fullname,
            email,
            phone,
            gender,
            date,
            password,
            confirmPassword,
            username,
            api: {
              setFullName,
              setEmail,
              setUserName,
              setPassword,
              setConfirmPassword,
              setDate,
              setPhone,
              handleChangeFactory,
              handleChangeGender,
              handleSubmit,
            },
          }}
        >
          {/* <UserList/> */}
          <UserForm />
          <DuongForm />
        </UserFormContexProvider>
      </div>
    );
  };
}

export default App;
