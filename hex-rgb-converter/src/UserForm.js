import React, { useState } from "react";
import Menu from "./Menu";
import { GENDER_TYPE } from "./utils";

export default function UserForm() {
  const [gender, setGender] = useState(GENDER_TYPE.FEMALE);

  const handleChangeGender = (event) => {
    const newVal = event.target.value;
    setGender(newVal);
  };

  return (
    <>
    <Menu />
    <div className="user-form-container">
      <div className="user-form-inner-wrapper">
        <form className="user-form">
          <input className="text-input" type="text" placeholder="Fullname" />
          <input className="text-input" type="email" placeholder="Email" />
          <input className="text-input" type="text" placeholder="Username" />

          <div className="form-row">
            <label>Gender:</label>
            <div className="gender-group">
              <label>
                <input

                  type="radio"
                  name="gender"
                  onChange={handleChangeGender}
                  value={GENDER_TYPE.MALE}
                  checked={gender === GENDER_TYPE.MALE}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChangeGender}
                  value={GENDER_TYPE.FEMALE}
                  checked={gender === GENDER_TYPE.FEMALE}
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-row">
            <label>Date of birth:</label>
            <input type="date" />
          </div>
          <textarea rows={5} />

          <div className="form-actions">
            <button className="form-btn btn-reset" type="reset">
              Reset
            </button>
            <button className="form-btn btn-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
