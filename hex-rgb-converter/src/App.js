import { createContext, useState } from "react";
import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ColorInput from "./ColorInput";
import ActionButton from "./ActionButton";
import UserList from "./UserList";
import UserForm from "./UserForm";
import ThanhForm from "./ThanhForm";
import { GENDER_TYPE } from "./utils";
import { useHexToBgb } from "./hooks/useHexToBgb";
import { useUserForm } from "./hooks/useUserForm";


export const UserFormContext = createContext();
const UserFormContextProvider = UserFormContext.Provider;

// const intialInputValue = { value: "", error: "" };

function App() {

  const userFormState = useUserForm();

  const {
    hex,
    rgb,
    hexInputProps,
    toHex,
    toRgb,
    rgbInputProps,
  } = useHexToBgb();

 

  // const [hex, setHex] = useState("");
  // const [rgb, setRgb] = useState("");

  // const toHex = () => {
  //   const numbers = rgb.split(",").map((num) => (+num).toString(16));
  //   const newVal = numbers.reduce((acc, val) => {
  //     const convertedVal = `${val}`.padStart(2, "0");
  //     return `${acc}${convertedVal}`;
  //   }, "");
  //   setHex(newVal);
  // };

  // const toRgb = () => {
  //   if (hex.length === 6) {
  //     const numbers = hex.split("").reduce((acc, char, i) => {
  //       if (i % 2 === 1) {
  //         acc[acc.length - 1] += char;
  //       } else {
  //         acc.push(char);
  //       }
  //       return acc;
  //     }, []);
  //     const convertedNumbers = numbers.map((num) => Number.parseInt(num, 16));
  //     const convertedRgb = convertedNumbers.join(", ");
  //     setRgb(convertedRgb);
  //   }
  // };

  // const colorPropsMap = new Map([
  //   [
  //     COLOR_TYPE.HEX,
  //     generateColorInputProps(
  //       COLOR_TYPE.HEX,
  //       "Hex color",
  //       "hex-input",
  //       hex,
  //       setHex
  //     ),
  //   ],
  //   [
  //     COLOR_TYPE.RGB,
  //     generateColorInputProps(
  //       COLOR_TYPE.RGB,
  //       "RGB color",
  //       "rgb-input",
  //       rgb,
  //       setRgb
  //     ),
  //   ],
  // ]);

  // const hexInputProps = colorPropsMap.get(COLOR_TYPE.HEX);
  // const rgbInputProps = colorPropsMap.get(COLOR_TYPE.RGB);

  // const [fullName, setFullName] = useState(intialInputValue);
  // const [email, setEmail] = useState(intialInputValue);
  // const [phonenNumber, setPhonenNumber] = useState(intialInputValue);
  // const [dateOfbirth, setDateOfbirth] = useState(intialInputValue);
  // const [username, setUsername] = useState(intialInputValue);
  // const [password, setPassword] = useState(intialInputValue);
  // const [confirmPassword, setConfirmPassword] = useState({
  //   value: "",
  //   error: "",
  // });
  // const [errorMessage, setErrorMessage] = useState(intialInputValue);
  // const [gender, setGender] = useState({
  //   value: GENDER_TYPE.FEMALE,
  //   error: "",
  // });

  // const handleChangeFullName = (event) => {
  //   const inputElement = event.target;
  //   setFullName(inputElement.value);
  // };
  // console.log("fullName...", fullName);

  // const handleChangeEmail = (event) => {
  //   const inputElement = event.target;
  //   setEmail(inputElement.value);
  // };
  // console.log("email...", email);

  // const handleChangePhoneNumber = (event) => {
  //   const inputElement = event.target;
  //   setPhonenNumber(inputElement.value);
  // };
  // console.log("phonenNumber...", phonenNumber);

  // const handleChangeDateOfbirth = (event) => {
  //   const inputElement = event.target;
  //   setDateOfbirth(inputElement.value);
  // };
  // console.log("dateOfbirth...", dateOfbirth);

  // const handleChangeUsername = (event) => {
  //   const inputElement = event.target;
  //   setUsername(inputElement.value);
  // };
  // console.log("username...", username);

  // const handleChangePassword = (event) => {
  //   const inputElement = event.target;
  //   setPassword(inputElement.value);
  // };
  // console.log("password...", password);

  // const handleChangeConfirmPassword = (event) => {
  //   const inputElement = event.target;
  //   setConfirmPassword(inputElement.value);
  // };
  // console.log("confirmPassword...", confirmPassword);

  // const handleChangeGender = (event) => {
  //   const inputElement = event.target;
  //   console.log("value...", inputElement.value);
  //   setGender(inputElement.value);
  // };

  // console.log("gender...", gender);

  // const onChangHandlerFactory = (setState) => {
  //   return (event) => {
  //     const inputElement = event.target;
  //     setState((previousState) => {
  //       return { ...previousState, value: inputElement.value };
  //     });
  //   };
  // };

  // const reSetAll = () => {
  //   [
  //     setFullName,
  //     setEmail,
  //     setPhonenNumber,
  //     setDateOfbirth,
  //     setUsername,
  //     setPassword,
  //     setConfirmPassword,
  //   ].forEach((setState) => {
  //     setState(intialInputValue);
  //   });
  // };

  // // const resetEmail = (seState) => {
  // //   setEmail(intialInputValue);
  // // }

  // // const resFullname = (seState) => {
  // //   setFullName(intialInputValue);
  // // }

  // const onValidateFactory = (setState) => {
  //   return (errorMessage) => {
  //     setState((previousState) => {
  //       return { ...previousState, error: errorMessage };
  //     });
  //   };
  // };

  // const clearsErrors = () => {
  //   [
  //     setFullName,
  //     setEmail,
  //     setPhonenNumber,
  //     setDateOfbirth,
  //     setUsername,
  //     setPassword,
  //     setConfirmPassword,
  //   ].forEach((setState) => {
  //     setState((previousState) => {
  //       return { ...previousState, error: "" };
  //     });
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   clearsErrors();

  //   // validate FullName
  //   if (/[^a-zA-Z ]/.test(fullName.value)) {
  //     onValidateFactory(setFullName)("Fullname not is valid...");
  //     return;
  //   }

  //   // validate Email
  //   if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
  //     alert("Email not is valid...");
  //     onValidateFactory(setEmail)("Email not is valid...");
  //     return;
  //   }

  //   // validate PhoneNumber
  //   if (!/^0[1-9]\d{7,10}$/.test(phonenNumber.value)) {
  //     onValidateFactory(setPhonenNumber)("PhoneNumber not is valid...");
  //     return;
  //   }

  //   // validate Uername
  //   if (!/^(?=.*[a-z])(?=.*\d)[a-z0-9]{5,50}$/.test(username.value)) {
  //     onValidateFactory(setUsername)("Username not is valid...");
  //     return;
  //   }

  //   // validate Password
  //   if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value)) {
  //     onValidateFactory(setPassword)("Password not is valid...");
  //     return;
  //   }

  //   // validate ConfirmPassword
  //   if (password.value !== confirmPassword.value) {
  //     onValidateFactory(setConfirmPassword)(
  //       "Confirm Password does not match Password...."
  //     );
  //     return;
  //   }

  //   const values = {
  //     fullName: fullName.value, // alphabet
  //     email: email.value, // must be an email
  //     phonenNumber: phonenNumber.value, // min(9) max(12)
  //     dateOfbirth: dateOfbirth.value, // must greater than 10 years old
  //     username: username.value, // alphabet | number && min(5) max(50)
  //     password: password.value, // min(8) & alphabet(1) & ALPHABET(1) & number(1)
  //     confirmPassword: confirmPassword.value, // must equal password
  //     gender: gender.value, // "0" || "1"
  //   };

  //   console.log("values...", values); // AXIOS == fetch
  //   // Call api create user

  //   // if (password !== confirmPassword) {
  //   //   setErrorMessage("Mật khẩu không khớp");
  //   // }
  // };

  //   const handleChangeFullName = onChangHandlerFactory(setFullName);
  //   const handleChangeEmail = onChangHandlerFactory(setEmail);
  //   const handleChangePhoneNumber = onChangHandlerFactory(setPhonenNumber);
  //   const handleChangeDateOfbirth = onChangHandlerFactory(setDateOfbirth);
  //   const handleChangeUsername = onChangHandlerFactory(setUsername);
  //   const handleChangePassword = onChangHandlerFactory(setPassword);
  //   const handleChangeConfirmPassword = onChangHandlerFactory(setConfirmPassword);

  // const handleChangeGender = onChangHandlerFactory(setGender);

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

      {/* {
          fullName,
          email,
          gender,
          phonenNumber,
          dateOfbirth,
          username,
          password,
          confirmPassword,
          api: {
            setFullName,
            setEmail,
            setPhonenNumber,
            setDateOfbirth,
            setUsername,
            setPassword,
            setConfirmPassword,
            onChangHandlerFactory,
            handleChangeGender,
            handleSubmit,
            reSetAll,
        }
        } */}

      <ThanhForm
        // Xóa đi
        // {...{
        //   fullName,
        //   email,
        //   gender,
        //   phonenNumber,
        //   dateOfbirth,
        //   username,
        //   password,
        //   confirmPassword,
        //   api: {
        //     setFullName,
        //     setEmail,
        //     setPhonenNumber,
        //     setDateOfbirth,
        //     setUsername,
        //     setPassword,
        //     setConfirmPassword,
        //     onChangHandlerFactory,
        //     handleChangeGender,
        //     handleSubmit,
        //     reSetAll,
        // }
        // }}
      />      
      </UserFormContextProvider>
    </div>
    
  );
}

export default App;
