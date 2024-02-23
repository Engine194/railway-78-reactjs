import { Fragment } from "react";

const UserAuthentication = (props) => {

    const {
        username,
        password,
        confirmPassword,
        api: {
            onChangHandlerFactory,
            setUsername,
            setPassword,
            setConfirmPassword
        }
    } = props || {};

  return (
    <Fragment>
      <h2>Authentication</h2>
      <div className="sub-form">
        <div className="form-control">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username.value}
            onChange={onChangHandlerFactory(setUsername)}
          />
          {username.error ? <p>{username.error}</p> : null}
        </div>

        <div className="form-control">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password.value}
            onChange={onChangHandlerFactory(setPassword)}
          />
          {password.error ? <p>{password.error}</p> : null}
        </div>

        <div className="form-control">
          <input
            type="password"
            name="confirmPassword"
            placeholder="ConfirmPassword"
            value={confirmPassword.value}
            onChange={onChangHandlerFactory(setConfirmPassword)}
          />
          {confirmPassword.error ? <p>{confirmPassword.error}</p> : null}
        </div>
      </div>
    </Fragment>
  );
};

export default UserAuthentication;
