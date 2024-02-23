import "./TrinhForm.style.css";
import { useState } from "react";
import { GENDER_TYPE } from "./utils";

const initialInputValue = { value: "", error: "" };

const TrinhForm = () => {
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
        return {...previousState, value: newVal.value};
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
    const isValid = password.length >= minLengthPass &&
                    hasLowerCase &&
                    hasUpperCase &&
                    hasNumber &&
                    hasSpecialChar;

    return isValid;
};
  const handleSubmit = (event) =>{

    event.preventDefault();
    // validate
    clearErrors();
    // validate Fullname
    // const password = event.target.elements.password.value; // Get the password value from the form
    const isValidPassword = validatePassword(password.value);
    if (!isValidPassword) {
        onValidateFactory(setPassword)("Password is not valid. Please ensure it contains at least 8 characters, including at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
    }

    if (/[^a-zA-Z ]/.test(fullname.value) || /\s{2,}/.test(fullname.value)) {
      onValidateFactory(setFullName)("Fullname is not valid. Please enter a valid name with only one whitespace between words.");
    }

    if (/[^01]/.test(gender.value)) {
      onValidateFactory(setGender)("Gender is not valid...");
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
      onValidateFactory(setEmail)("Email is not valid...");
    }

    if (phoneNumber.length < minLength || /[^0-9]/.test(phone.value)) {
      onValidateFactory(setPhone)("Phone is not valid. Please enter a valid 10-digit phone number.");
    }

    const values  = {
      fullname: fullname.value,
      email: email.value,
      phone: phone.value,
      gender: gender.value,
      date: date.value,
      username: username.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    }
    // call api create user 
    console.log('values...', values); // AXIOS == fetch
  };

  return (
    <div className="trinh-form-container">
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-col form-col-left">
          <h2>User information</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={fullname.value}
                onChange={handleChangeFactory(setFullName)}
              />
             {fullname.error ? <p>{fullname.error}</p> : null}
            </div>

            <div className="form-control">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email.value}
                onChange={handleChangeFactory(setEmail)}
              />
               {email.error ? <p>{email.error}</p> : null}
            </div>

            <div className="form-control">
              <input
                type="text"
                name="phone"
                maxLength={10}
                placeholder="Phone Number"
                value={phone.value}
                onChange={handleChangeFactory(setPhone)}
              />
               {phone.error ? <p>{phone.error}</p> : null}
            </div>

            <div className="gender-container">
              <span>Gender:</span>
              <div className="gender-radios">
                <label>
                  <input type="radio"
                  name="gender"
                  onChange={handleChangeGender}
                  value={GENDER_TYPE.MALE}
                  checked={gender.value === GENDER_TYPE.MALE}
                  />
                  Male
                </label>
                <label>
                  <input type="radio"
                  name="gender"
                  onChange={handleChangeGender}
                  value={GENDER_TYPE.FEMALE}
                  checked={gender.value === GENDER_TYPE.FEMALE}
                   />
                  FeMale
                </label>
              </div>
            </div>

            <div className="form-control">
              <input
                type="date"
                name="dateOfBirth"
                value={date.value}
                onChange={handleChangeFactory(setDate)}
              />
            </div>
          </div>
        </div>

        <div className="diviver"></div>

        <div className="form-col form-col-right">
          <h2>Authentication</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="username"
                placeholder="User Name"
                value={username.value}
                onChange={handleChangeFactory(setUserName)}
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password.value}
                onChange={handleChangeFactory(setPassword)}
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword.value}
                onChange={handleChangeFactory(setConfirmPassword)}
              />
            </div>
          </div>
          <div className="form-actions">
            <button onClick={clearForm} type="reset">Reset</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrinhForm;
