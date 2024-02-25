import { useState } from "react";
import { GENDER_TYPE } from "../utils";

const intialInputValue = { value: "", error: "" };

export const useUserForm = () => {

const [fullName, setFullName] = useState(intialInputValue);
const [email, setEmail] = useState(intialInputValue);
const [phonenNumber, setPhonenNumber] = useState(intialInputValue);
const [dateOfbirth, setDateOfbirth] = useState(intialInputValue);
const [username, setUsername] = useState(intialInputValue);
const [password, setPassword] = useState(intialInputValue);
const [confirmPassword, setConfirmPassword] = useState({
  value: "",
  error: "",
});
const [errorMessage, setErrorMessage] = useState(intialInputValue);
const [gender, setGender] = useState({
  value: GENDER_TYPE.FEMALE,
  error: "",
});

//   const handleChangeFullName = (event) => {
//     const inputElement = event.target;
//     setFullName(inputElement.value);
//   };
//   console.log("fullName...", fullName);

//   const handleChangeEmail = (event) => {
//     const inputElement = event.target;
//     setEmail(inputElement.value);
//   };
//   console.log("email...", email);

//   const handleChangePhoneNumber = (event) => {
//     const inputElement = event.target;
//     setPhonenNumber(inputElement.value);
//   };
//   console.log("phonenNumber...", phonenNumber);

//   const handleChangeDateOfbirth = (event) => {
//     const inputElement = event.target;
//     setDateOfbirth(inputElement.value);
//   };
//   console.log("dateOfbirth...", dateOfbirth);

//   const handleChangeUsername = (event) => {
//     const inputElement = event.target;
//     setUsername(inputElement.value);
//   };
//   console.log("username...", username);

//   const handleChangePassword = (event) => {
//     const inputElement = event.target;
//     setPassword(inputElement.value);
//   };
//   console.log("password...", password);

//   const handleChangeConfirmPassword = (event) => {
//     const inputElement = event.target;
//     setConfirmPassword(inputElement.value);
//   };
//   console.log("confirmPassword...", confirmPassword);

  const handleChangeGender = (event) => {
    const inputElement = event.target;
    console.log("value...", inputElement.value);
    setGender(inputElement.value);
  };

  console.log("gender...", gender);

  const onChangHandlerFactory = (setState) => {
    return (event) => {
      const inputElement = event.target;
      setState((previousState) => {
        return { ...previousState, value: inputElement.value };
      });
    };
  };

  const reSetAll = () => {
    [
      setFullName,
      setEmail,
      setPhonenNumber,
      setDateOfbirth,
      setUsername,
      setPassword,
      setConfirmPassword,
    ].forEach((setState) => {
      setState(intialInputValue);
    });
  };

  // const resetEmail = (seState) => {
  //   setEmail(intialInputValue);
  // }

  // const resFullname = (seState) => {
  //   setFullName(intialInputValue);
  // }

  const onValidateFactory = (setState) => {
    return (errorMessage) => {
      setState((previousState) => {
        return { ...previousState, error: errorMessage };
      });
    };
  };

  const clearsErrors = () => {
    [
      setFullName,
      setEmail,
      setPhonenNumber,
      setDateOfbirth,
      setUsername,
      setPassword,
      setConfirmPassword,
    ].forEach((setState) => {
      setState((previousState) => {
        return { ...previousState, error: "" };
      });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    clearsErrors();

    // validate FullName
    if (/[^a-zA-Z ]/.test(fullName.value)) {
      onValidateFactory(setFullName)("Fullname not is valid...");
      return;
    }

    // validate Email
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
      alert("Email not is valid...");
      onValidateFactory(setEmail)("Email not is valid...");
      return;
    }

    // validate PhoneNumber
    if (!/^0[1-9]\d{7,10}$/.test(phonenNumber.value)) {
      onValidateFactory(setPhonenNumber)("PhoneNumber not is valid...");
      return;
    }

    // validate Uername
    if (!/^(?=.*[a-z])(?=.*\d)[a-z0-9]{5,50}$/.test(username.value)) {
      onValidateFactory(setUsername)("Username not is valid...");
      return;
    }

    // validate Password
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value)) {
      onValidateFactory(setPassword)("Password not is valid...");
      return;
    }

    // validate ConfirmPassword
    if (password.value !== confirmPassword.value) {
      onValidateFactory(setConfirmPassword)(
        "Confirm Password does not match Password...."
      );
      return;
    }

    const values = {
      fullName: fullName.value, // alphabet
      email: email.value, // must be an email
      phonenNumber: phonenNumber.value, // min(9) max(12)
      dateOfbirth: dateOfbirth.value, // must greater than 10 years old
      username: username.value, // alphabet | number && min(5) max(50)
      password: password.value, // min(8) & alphabet(1) & ALPHABET(1) & number(1)
      confirmPassword: confirmPassword.value, // must equal password
      gender: gender.value, // "0" || "1"
    };

    console.log("values...", values); // AXIOS == fetch
    // Call api create user

    // if (password !== confirmPassword) {
    //   setErrorMessage("Mật khẩu không khớp");
    // }
  };

  return (
    {
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
      }
  )
}