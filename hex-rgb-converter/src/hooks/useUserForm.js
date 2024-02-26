import React, { useState } from 'react'
import { GENDER_TYPE } from '../utils';

const useUserForm = () => {
    const initialInputValue = { value: "", error: "" };

    const [gender, setGender] = useState({ value: GENDER_TYPE.FEMALE, error: "" });
    const [fullName, setFullName] = useState(initialInputValue);
    const [email, setEmail] = useState(initialInputValue);
    const [phone, setPhone] = useState(initialInputValue);
    const [dateOfBirth, setDateOfBirth] = useState(initialInputValue);
    const [userName, setUserName] = useState(initialInputValue);
    const [password, setPassword] = useState(initialInputValue);
    const [confirmPassword, setConfirmPassword] = useState(initialInputValue);

    // const handleChangeFullName = (event) => {
    //     const inputFullName = event.target;
    //     setFullName(inputFullName.value);
    // }
    // const handleChangeEmail = (event) => {
    //     const inputEmail = event.target;
    //     setEmail(inputEmail.value);
    // }
    // const handleChangePhone = (event) => {
    //     const inputPhone = event.target;
    //     setPhone(inputPhone.value);
    // }
    // const handleChangeUserName = (event) => {
    //     const inputUserName = event.target;
    //     setUserName(inputUserName.value);
    // }
    // const handleChangePassword = (event) => {
    //     const inputPassword = event.target;
    //     setPassword(inputPassword.value);
    // }
    // const handleChangeConfirmPassword = (event) => {
    //     const inputConfirmPassword = event.target;
    //     setConfirmPassword(inputConfirmPassword.value);
    // }

    // const handleChangeGender = (event) => {
    //     const inputEle = event.target;
    //     console.log("value...", inputEle.value);
    //     setGender(inputEle.value);
    // }

    const onChangeHandleFactory = (setState) => {
        return (event) => {
            const inputEle = event.target;
            setState((previousState) => {
                return { ...previousState, value: inputEle.value };
            });
        }
    }

    const onValidateFactory = (setState) => {
        return (errorMsg) => {
            setState((previousState) => {
                return { ...previousState, error: errorMsg }
            });
        }
    }

    const clearError = () => {
        [
            setGender,
            setFullName,
            setEmail,
            setPhone,
            setDateOfBirth,
            setUserName,
            setPassword,
            setConfirmPassword,
        ].forEach((setState) => {
            setState((previousState) => {
                return { ...previousState, error: "" }
            });
        })
    };

    // const handleChangeFullName = onChangeHandleFactory(setFullName);
    // const handleChangeEmail = onChangeHandleFactory(setEmail);
    // const handleChangePhone = onChangeHandleFactory(setPhone);
    // const handleChangeUserName = onChangeHandleFactory(setUserName);
    // const handleChangePassword = onChangeHandleFactory(setPassword);
    // const handleChangeConfirmPassword = onChangeHandleFactory(setConfirmPassword);
    const handleChangeGender = onChangeHandleFactory(setGender);

    const handleSubmit = (event) => {
        event.preventDefault();
        //validate
        clearError();
        debugger

        //validate full name
        if (/[^a-zA-Z ]/.test(fullName.value)) {
            onValidateFactory(setFullName)("fullname is not value...");
            return;
        };

        if (/[^01]/.test(gender.value)) {
            onValidateFactory(setGender)("gender is not value...");
            return;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            onValidateFactory(setEmail)("email is not value...");
            return;
        }
        const values = {
            gender: gender.value, // alphabet
            fullName: fullName.value, // '0', '1'
            email: email.value, // must be an email
            phone: phone.value, // min(9) & max(12)
            userName: userName.value, // alphabet | number && min(5) max(50)
            dateOfBirth: dateOfBirth.value, // must greater than 10
            password: password.value, // min(8) & alphabet(1) & ALPHBET(1) & number(1)
            confirmPassword: confirmPassword.value, // must equal password
        }
        //Call api create user
        console.log("values....", values); // AXIOS == fetch
    };
    return (
        {
            fullName,
            email,
            phone,
            gender,
            dateOfBirth,
            userName,
            password,
            confirmPassword,
            api: {
              onChangeHandleFactory,
              setFullName,
              setEmail,
              setPhone,
              handleChangeGender,
              setDateOfBirth,
              setUserName,
              setPassword,
              setConfirmPassword,
    
            }
          }
    )
}

export default useUserForm