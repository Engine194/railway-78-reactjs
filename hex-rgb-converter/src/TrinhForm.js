import "./TrinhForm.style.css";
import { useState } from "react";
import { GENDER_TYPE } from "./utils";

const TrinhForm = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(GENDER_TYPE.FEMALE);
  const [date, setDate] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const handleChangeFactory = (setState) => {
    const handleChange = (event) => {
      const newVal = event.target.value;
      setState(newVal);
    };
    return handleChange;
  };

  return (
    <div className="trinh-form-container">
      <h1>Register Form</h1>
      <form className="form-row">
        <div className="form-col form-col-left">
          <h2>User information</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={fullname}
                onChange={handleChangeFactory(setFullName)}
              />
              {/* <p>Error fullname</p> */}
            </div>

            <div className="form-control">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeFactory(setEmail)}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={handleChangeFactory(setPhone)}
              />
            </div>

            <div className="gender-container">
              <span>Gender:</span>
              <div className="gender-radios">
                <label>
                  <input type="radio"
                  name="gender"
                  onChange={handleChangeFactory(setGender)}
                  value={GENDER_TYPE.MALE}
                  checked={gender === GENDER_TYPE.MALE}
                  />
                  Male
                </label>
                <label>
                  <input type="radio"
                  name="gender"
                  onChange={handleChangeFactory(setGender)}
                  value={GENDER_TYPE.FEMALE}
                  checked={gender === GENDER_TYPE.FEMALE}
                   />
                  FeMale
                </label>
              </div>
            </div>

            <div className="form-control">
              <input
                type="date"
                name="dateOfBirth"
                value={date}
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
                value={username}
                onChange={handleChangeFactory(setUserName)}
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChangeFactory(setPassword)}
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleChangeFactory(setConfirmPassword)}
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

export default TrinhForm;
