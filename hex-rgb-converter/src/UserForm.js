import React, { useState } from "react";
import { GENDER_TYPE } from "./utils";

export default function UserForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [favorite, setFavorite] = useState("");

  const handleChangeFactory = (setState) => {
    const handleChange = (event) => {
      const newVal = event.target.value;
      setState(newVal);
    };
    return handleChange;
  };

  const handleChangeFullname = handleChangeFactory(setFullname);
  const handleChangeEmail = handleChangeFactory(setEmail);
  const handleChangeUsername = handleChangeFactory(setUsername);
  const handleChangeGender = handleChangeFactory(setGender);
  const handleChangeDateOfBirth = handleChangeFactory(setDateOfBirth);
  const handleChangeFavorite = handleChangeFactory(setFavorite);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      'fullname...',fullname, '\n',
      'email...',email, '\n',
      'username...',username, '\n',
      'gender...',gender, '\n',
      'dateOfBirth...',dateOfBirth, '\n',
      'favorite...',favorite, '\n',
    );
  }

  return (
    <div className="user-form-container">
      <div className="user-form-inner-wrapper">
        <form className="user-form">
          <input
            className="text-input"
            type="text"
            name="fullname"
            value={fullname}
            onChange={handleChangeFullname}
            placeholder="Fullname"
          />
          <input
            className="text-input"
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Email"
          />
          <input
            className="text-input"
            type="text"
            name="username"
            value={username}
            onChange={handleChangeUsername}
            placeholder="Username"
          />

          <div className="form-row">
            <label>Gender:</label>
            <div className="gender-group">
              <div>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChangeGender}
                  value={GENDER_TYPE.MALE}
                  checked={gender === GENDER_TYPE.MALE}
                />
                Male
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChangeGender}
                  value={GENDER_TYPE.FEMALE}
                  checked={gender === GENDER_TYPE.FEMALE}
                />
                Female
              </div>
            </div>
          </div>
          <div className="form-row">
            <label>Date of birth:</label>
            <input
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChangeDateOfBirth}
              type="date"
            />
          </div>
          <textarea
            name="favorite"
            value={favorite}
            onChange={handleChangeFavorite}
            rows={5}
          />

          <div className="form-actions">
            <button className="form-btn btn-reset" type="reset">
              Reset
            </button>
            <button onClick={handleSubmit} className="form-btn btn-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
