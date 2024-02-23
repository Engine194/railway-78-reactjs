import { useState } from "react";
import { GENDER_TYPE } from "../utils";

const initialInputValue = { value: "", error: "" };

export const useUserForm = () => {
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
  };

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

  return {
    fullName,
    email,
    phoneNumber,
    gender,
    dateOfBirth,
    username,
    password,
    confirmPassword,
    api: {
      setFullName,
      setEmail,
      setUsername,
      setPassword,
      setConfirmPassword,
      setDateOfBirth,
      setPhoneNumber,
      onChangeHandlerFactory,
      handleChangeGender,
      handleSubmit,
    },
  };
};
