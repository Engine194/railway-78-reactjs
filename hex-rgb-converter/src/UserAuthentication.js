import React, { Fragment, useContext } from "react";
import { UserFormContex } from "./App";

function UserAuthentication() {
  const {
    username,
    password,
    confirmPassword,
    api: { setUsername, setPassword, setConfirmPassword, handleChangeFactory },
  } = useContext(UserFormContex);
  return (
    <Fragment>
      <h2>Authentication</h2>
      <div className="sub-form">
        <div className="form-control">
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={username.value}
            onChange={handleChangeFactory(setUsername)}
          />
        </div>

        <div className="form-control">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password.value}
            onChange={handleChangeFactory(setPassword)}
          />
        </div>

        <div className="form-control">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword.value}
            onChange={handleChangeFactory(setConfirmPassword)}
          />
        </div>
      </div>
      <div className="form-actions">
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </Fragment>
  );
}

export default UserAuthentication;
