import { useState } from "react";
import "./ChienForm.style.css";
import { GENDER_TYPE } from "./utils";
import UserInformation from "./Userinformation";

const initialInputValue = { value: "", error: "" };
const ChienForm = (props) => {
    const {
        fullName,
        email,
        gender,
        username,
        password,
        confirmPassword,
        dateOfBirth,
        phoneNumber,
        api: {
            setFullName,
            setEmail,
            setUsername,
            setGender,
            setPassword,
            setConfirmPassword,
            setDateOfBirth,
            setPhoneNumber,
            onChangeHandlerFactory,
            handleChangeGender,
            handleSubmit,
        }
    } = props || {};
    // const onChangeHandlerFactory = (setState) => {
    //     return (event) => {
    //         const inputEle = event.target;
    //         setState((previousState) => {
    //             return { ...previousState, value: inputEle.value };
    //         });
    //     };
    // };

    // const resetFullname = () => {
    //     setFullName(initialInputValue);
    // }

    // const onValidateFactory = (setState) => {
    //     return (errorMsg) => {
    //         setState((previousState) => {
    //             return { ...previousState, error: errorMsg };
    //         });
    //     };
    // };

    // const clearErrors = () => {
    //     [
    //         setFullName,
    //         setGender,
    //         setEmail,
    //         setUsername,
    //         setPassword,
    //         setConfirmPassword,
    //         setDateOfBirth,
    //         setPhoneNumber,
    //     ].forEach((setState) => {
    //         setState((previousState) => {
    //             return { ...previousState, error: "" };
    //         });
    //     });
    // };

    // const handleChangeGender = onChangeHandlerFactory(setGender);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // validate
    //     clearErrors();
    //     // validate Fullname
    //     if (/[^a-zA-Z ]/.test(fullName.value)) {
    //         onValidateFactory(setFullName)("Fullname is not valid...");
    //     }

    //     if (/[^01]/.test(gender.value)) {
    //         onValidateFactory(setGender)("Gender is not valid...");
    //     }

    //     if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    //         onValidateFactory(setEmail)("Email is not valid...");
    //     }

    //     const values = {
    //         fullName: fullName.value, // alphabet
    //         gender: gender.value, // '0' | '1'
    //         email: email.value, // must be an email
    //         username: username.value, // alphabet | number && min(5) max(50)
    //         password: password.value, // min(8) & alphabet(1) & ALPHABET(1) & number(1)
    //         confirmPassword: confirmPassword.value, // must equal password
    //         dateOfBirth: dateOfBirth.value, // must greater than 10 years old
    //         phoneNumber: phoneNumber.value, // min(9) & max(12)
    //     };
    //     // Call api create user
    //     console.log("values...", values); // AXIOS == fetch
    // };

    return (
        <div className="nikita-form-container">
            <h1>Register new user</h1>
            <form onSubmit={handleSubmit} className="form-row">
                <div className="form-col form-col-left">
                    {/* <h2>User information</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                value={fullName.value}
                onChange={onChangeHandlerFactory(setFullName)}
              />
              {fullName.error ? <p>{fullName.error}</p> : null}
            </div>

            <div className="form-control">
              <input
                type="text"
                value={email.value}
                onChange={onChangeHandlerFactory(setEmail)}
                name="email"
                placeholder="Email"
              />
              {email.error ? <p>{email.error}</p> : null}
            </div>

            <div className="form-control">
              <input
                type="text"
                value={phoneNumber.value}
                onChange={onChangeHandlerFactory(setPhoneNumber)}
                name="phone"
                placeholder="Phone number"
              />
              {phoneNumber.error ? <p>{phoneNumber.error}</p> : null}
            </div>

            <div className="gender-container">
              <span>Gender:</span>
              <div className="gender-radios">
                <label>
                  <input
                    onChange={handleChangeGender}
                    checked={gender.value === GENDER_TYPE.MALE}
                    type="radio"
                    name="gender"
                    value={GENDER_TYPE.MALE}
                  />
                  Male
                </label>
                <label>
                  <input
                    onChange={handleChangeGender}
                    checked={gender.value === GENDER_TYPE.FEMALE}
                    type="radio"
                    name="gender"
                    value={GENDER_TYPE.FEMALE}
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="form-control">
              <input
                type="date"
                value={dateOfBirth.value}
                onChange={onChangeHandlerFactory(setDateOfBirth)}
                name="dateOfBirth"
              />
            </div>
          </div> */}
                    <UserInformation
                        fullName={fullName}
                        email={email}
                        phoneNumber={phoneNumber}
                        gender={gender}
                        dateOfBirth={dateOfBirth}
                        api={{
                            onChangeHandlerFactory,
                            setFullName,
                            setGender,
                            setEmail,
                            setUsername,
                            setPassword,
                            setConfirmPassword,
                            setDateOfBirth,
                            setPhoneNumber,
                        }
                        }
                    />
                </div>
                <div className="divider"></div>
                <div className="form-col form-col-right">
                    <h2>Authentication</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input
                                type="text"
                                value={username.value}
                                onChange={onChangeHandlerFactory(setUsername)}
                                name="username"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                value={password.value}
                                onChange={onChangeHandlerFactory(setPassword)}
                                name="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                value={confirmPassword.value}
                                onChange={onChangeHandlerFactory(setConfirmPassword)}
                                name="confirmPassword"
                                placeholder="Confirm password"
                            />
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChienForm;