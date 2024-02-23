import { createContext, useState } from "react";
import "./App.css";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ColorInput from "./ColorInput";
import ActionButton from "./ActionButton";
import { COLOR_TYPE, generateColorInputProps } from "./utils";
import ChienForm from "./ChienForm";
import { GENDER_TYPE } from "./utils";
export const UserFormContext = createContext();

const initialInputValue = { value: "", error: ""}

function App() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");
  const [fullName, setFullName] = useState(initialInputValue);
    const [gender, setGender] = useState({
        value: GENDER_TYPE.FEMALE,
        error: "",
    });
    const [email, setEmail] = useState(initialInputValue);
    const [username, setUsername] = useState(initialInputValue);
    const [password, setPassword] = useState(initialInputValue);
    const [confirmPassword, setConfirmPassword] = useState(initialInputValue);
    const [dateOfBirth, setDateOfBirth] = useState(initialInputValue);
    const [phoneNumber, setPhoneNumber] = useState(initialInputValue);

    const onChangeHandlerFactory = (setState) => {
        return (event) => {
            const inputEle = event.target;
            setState((previousState) => {
                return { ...previousState, value: inputEle.value };
            });
        };
    };

    const resetFullname = () => {
        setFullName(initialInputValue);
    }

    const onValidateFactory = (setState) => {
        return (errorMsg) => {
            setState((previousState) => {
                return { ...previousState, error: errorMsg };
            });
        };
    };

    const clearErrors = () => {
        [
            setFullName,
            setGender,
            setEmail,
            setUsername,
            setPassword,
            setConfirmPassword,
            setDateOfBirth,
            setPhoneNumber,
        ].forEach((setState) => {
            setState((previousState) => {
                return { ...previousState, error: "" };
            });
        });
    };

    const handleChangeGender = onChangeHandlerFactory(setGender);

    const handleSubmit = (event) => {
        event.preventDefault();
        // validate
        clearErrors();
        // validate Fullname
        if (/[^a-zA-Z ]/.test(fullName.value)) {
            onValidateFactory(setFullName)("Fullname is not valid...");
        }

        if (/[^01]/.test(gender.value)) {
            onValidateFactory(setGender)("Gender is not valid...");
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            onValidateFactory(setEmail)("Email is not valid...");
        }

        const values = {
            fullName: fullName.value, // alphabet
            gender: gender.value, // '0' | '1'
            email: email.value, // must be an email
            username: username.value, // alphabet | number && min(5) max(50)
            password: password.value, // min(8) & alphabet(1) & ALPHABET(1) & number(1)
            confirmPassword: confirmPassword.value, // must equal password
            dateOfBirth: dateOfBirth.value, // must greater than 10 years old
            phoneNumber: phoneNumber.value, // min(9) & max(12)
        };
        // Call api create user
        console.log("values...", values); // AXIOS == fetch
    };
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

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: 'female',
    dob: '',
    favorite: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      gender: 'female',
      dob: '',
      favorite: ''
    });
  };

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
      <h1 className="greeting-heading">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />

        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="favorite">Favorite:</label>
        <textarea
          id="favorite"
          name="favorite"
          rows="5"
          value={formData.favorite}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      <ChienForm
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        gender={gender}
        dateOfBirth={dateOfBirth}
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        api={{
          setFullName,
          setEmail,
          setUsername,
          setPassword,
          setConfirmPassword,
          setDateOfBirth,
          setPhoneNumber,
          onChangeHandlerFactory
        }}
      />
    </div>
    
  );
}
export default App;
