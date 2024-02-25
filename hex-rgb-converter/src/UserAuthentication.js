import { Fragment, useContext } from "react";
import { UserFormContext } from "./App";

const UserAuthentication = (props) => {
  
    const {
      username,
      password,
      confirmPassword,
      api: {
          onChangHandlerFactory,
          setUsername,
          setPassword,
          setConfirmPassword,
          reSetAll
      }
    } = useContext(UserFormContext)

    // const {
    //     username,
    //     password,
    //     confirmPassword,
    //     api: {
    //         onChangHandlerFactory,
    //         setUsername,
    //         setPassword,
    //         setConfirmPassword,
    //         reSetAll
    //     }
    // } = props || {};

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
      <div className="form-actions">
            <button type="reset" onClick={reSetAll}>Rest</button>
            <button type="submit">Submit</button>
      </div>
    </Fragment>
  );
};

export default UserAuthentication;
