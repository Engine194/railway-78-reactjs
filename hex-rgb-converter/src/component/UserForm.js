import React, { useState } from "react";
import { GENDER_TYPE } from "../utils";
import axios from "axios";

const initialUser = {
  email: "",
  fullname: "",
  username: "",
  gender: GENDER_TYPE.FEMALE,
  dob: "",
  favorite: "",
  id: "",
};

export default function UserForm({ data, pushUser, closeModal }) {
  const [user, setUser] = useState(data || initialUser);
  const [loading, setLoading] = useState(false);

  const handleChangeFactory = (userKey) => {
    return (event) => {
      const newVal = event.target.value;
      setUser((prev) => {
        return {
          ...prev,
          [userKey]: newVal,
        };
      });
    };
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    if (data) {
      // edit user
    } else {
      // create user
      const userParams = {
        ...user,
        gender: user.gender === GENDER_TYPE.MALE,
      };
      const USER_URL = process.env.REACT_APP_USER_API_URL;
      axios
        .post(USER_URL, userParams)
        .then(({ data }) => {
          pushUser(data);
          closeModal();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className={"user-form-container" + (loading ? " loading" : "")}>
        <div className="user-form-inner-wrapper">
          <form className="user-form" onSubmit={handleSubmit}>
            <input
              className="text-input"
              value={user.fullname}
              onChange={handleChangeFactory("fullname")}
              type="text"
              placeholder="Fullname"
            />
            <input
              className="text-input"
              value={user.email}
              onChange={handleChangeFactory("email")}
              type="email"
              placeholder="Email"
            />
            <input
              className="text-input"
              value={user.username}
              onChange={handleChangeFactory("username")}
              type="text"
              placeholder="Username"
            />

            <div className="form-row">
              <label>Gender:</label>
              <div className="gender-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={handleChangeFactory("gender")}
                    value={GENDER_TYPE.MALE}
                    checked={user.gender === GENDER_TYPE.MALE}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={handleChangeFactory("gender")}
                    value={GENDER_TYPE.FEMALE}
                    checked={user.gender === GENDER_TYPE.FEMALE}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="form-row">
              <label>Date of birth:</label>
              <input
                type="date"
                value={user.dob}
                onChange={handleChangeFactory("dob")}
              />
            </div>
            <textarea
              rows={5}
              value={user.favorite}
              onChange={handleChangeFactory("favorite")}
              placeholder="Favorite animals..."
            />

            <div className="form-actions">
              <button
                className="form-btn btn-reset"
                type="reset"
                onClick={() => {
                  setUser(data || initialUser);
                }}
                disabled={loading}
              >
                Reset
              </button>
              <button
                className="form-btn btn-submit"
                type="submit"
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}