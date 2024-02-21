import { useState } from "react";
import "./NikitaForm.style.css";
import { GENDER_TYPE } from "./utils";

const NikitaForm = () => {
  const [gender, setGender] = useState(GENDER_TYPE.FEMALE);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangeHandlerFactory = (setState) => {
    return (event) => {
      const inputEle = event.target;
      setState(inputEle.value);
    };
  };
  const handleChangeGender = onChangeHandlerFactory(setGender);

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="nikita-form-container">
      <h1>Register new user</h1>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-col form-col-left">
          <h2>User information</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                value={fullName}
                onChange={onChangeHandlerFactory(setFullName)}
              />
              <p>Error fullname</p>
            </div>

            <div className="form-control">
              <input
                type="text"
                value={email}
                onChange={onChangeHandlerFactory(setEmail)}
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                value={phoneNumber}
                onChange={onChangeHandlerFactory(setPhoneNumber)}
                name="phone"
                placeholder="Phone number"
              />
            </div>

            <div className="gender-container">
              <span>Gender:</span>
              <div className="gender-radios">
                <label>
                  <input
                    onChange={handleChangeGender}
                    checked={gender === GENDER_TYPE.MALE}
                    type="radio"
                    name="gender"
                    value={GENDER_TYPE.MALE}
                  />
                  Male
                </label>
                <label>
                  <input
                    onChange={handleChangeGender}
                    checked={gender === GENDER_TYPE.FEMALE}
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
                value={dateOfBirth}
                onChange={onChangeHandlerFactory(setDateOfBirth)}
                name="dateOfBirth"
              />
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="form-col form-col-right">
          <h2>Authentication</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                value={username}
                onChange={onChangeHandlerFactory(setUsername)}
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                value={password}
                onChange={onChangeHandlerFactory(setPassword)}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                value={confirmPassword}
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

export default NikitaForm;
