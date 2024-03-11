import React, { useState } from "react";
import { GENDER_TYPE } from "../utils";
import axios from "axios";

const initialUser = {
  "email": "",
        "fullname": "",
        "username": "",
        "gender": GENDER_TYPE.FEMALE,
        "dob": "",
        "favorite": "",

}
export default function UserForm({data}) {
  const [user, setUser] = useState(data || initialUser)

  const handleChangeFactory = (userKey) => {
    return (event) => {
      const newVal = event.target.value;
      setUser(prev => {
        return {
          ...prev,
          [userKey]: newVal, 
        }
      })
    }
  };
  
  const hanldeSubmit = (event) => {
    event.preventDefault();
    const useParams = {
      ...user,
      gender: user.gender === GENDER_TYPE.FEMALE,
    }
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    axios.post(USER_URL, useParams).then((data) => {
      console.log('data...', data);
    })
  }
  const [gender, setGender] = useState(GENDER_TYPE.FEMALE);

  const handleChangeGender = (event) => {
    const newVal = event.target.value;
    setGender(newVal);
  };

  return (
    <>
    <div className="user-form-container">
      <div className="user-form-inner-wrapper">
        <form className="user-form">
          <input className="text-input" value={user.fullname} onChange={handleChangeFactory('fullname')} type="text" placeholder="Fullname" />
          <input className="text-input" value={user.email} onChange={handleChangeFactory('email')} type="email" placeholder="Email" />
          <input className="text-input" value={user.username} onChange={handleChangeFactory('username')} type="text" placeholder="Username" />

          <div className="form-row">
            <label>Gender:</label>
            <div className="gender-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChangeFactory('gender')}
                  value={GENDER_TYPE.MALE}
                  checked={user.gender === GENDER_TYPE.MALE}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChangeFactory('gender')}
                  value={GENDER_TYPE.FEMALE}
                  checked={gender === GENDER_TYPE.FEMALE}
                />
                Female
              </label>
            </div>
          </div>
          <div className="form-row">
            <label>Date of birth:</label>
            <input type="date" onChange={handleChangeFactory('dob')} value={user.dob} />
          </div>
          <div className="form-row">
            <label>Favorite animal:</label>
            <input type="text" onChange={handleChangeFactory('favorite')} value={user.favorite} />
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