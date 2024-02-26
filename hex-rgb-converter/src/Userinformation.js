import React, { Fragment, useContext } from "react";
import { GENDER_TYPE } from "./utils";
import { UserFormContex } from "./App";
const Userinformation = () => {
  const {
    fullname,
    email,
    phone,
    gender,
    date,
    api: {
      handleChangeGender,
      handleChangeFactory,
      setFullName,
      setEmail,
      setPhone,
      setDate,
    },
  } = useContext(UserFormContex);

  return (
    <Fragment>
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
              <input
                type="radio"
                name="gender"
                onChange={handleChangeGender}
                value={GENDER_TYPE.MALE}
                checked={gender.value === GENDER_TYPE.MALE}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
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
    </Fragment>
  );
};

export default Userinformation;
