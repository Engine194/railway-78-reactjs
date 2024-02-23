import React, { Fragment } from "react";
import { GENDER_TYPE } from "./utils";

const UserInfomation = (props) => {
  const {
    fullName,
    email,
    phonenNumber,
    gender,
    dateOfbirth,
    api: {
      onChangHandlerFactory,
      setFullName,
      setEmail,
      setPhonenNumber,
      handleChangeGender,
      setDateOfbirth,
    },
  } = props || {};

  return (
    <Fragment>
      <h2>User information</h2>
      <div className="sub-form">
        <div className="form-control">
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            value={fullName.value}
            onChange={onChangHandlerFactory(setFullName)}
          />
          {fullName.error ? <p>{fullName.error}</p> : null}
        </div>

        <div className="form-control">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email.value}
            onChange={onChangHandlerFactory(setEmail)}
          />
          {email.error ? <p>{email.error}</p> : null}
        </div>

        <div className="form-control">
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            value={phonenNumber.value}
            onChange={onChangHandlerFactory(setPhonenNumber)}
          />
          {phonenNumber.error ? <p>{phonenNumber.error}</p> : null}
        </div>

        <div className="gender-container">
          <span>Gender</span>
          <div className="gender-radios">
            <lable>
              <input
                type="radio"
                name="gender"
                onChange={handleChangeGender}
                checked={gender.value === GENDER_TYPE.MALE}
                value={GENDER_TYPE.MALE}
              />
              Male
            </lable>

            <lable>
              <input
                type="radio"
                name="gender"
                onChange={handleChangeGender}
                checked={gender.value === GENDER_TYPE.FEMALE}
                value={GENDER_TYPE.FEMALE}
              />
              Female
            </lable>
          </div>
        </div>

        <div className="form-control">
          <input
            type="date"
            name="dateOfbirth"
            value={dateOfbirth.value}
            onChange={onChangHandlerFactory(setDateOfbirth)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UserInfomation;
