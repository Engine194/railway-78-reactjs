import React, { Fragment, useContext } from "react";
import { UserFormContext } from "./App";

const UserAuthentication = () => {
  const {
    username,
    password,
    confirmPassword,
    api: {
      setUsername,
      setPassword,
      setConfirmPassword,
      onChangeHandlerFactory,
    },
  } = useContext(UserFormContext);
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default UserAuthentication;
