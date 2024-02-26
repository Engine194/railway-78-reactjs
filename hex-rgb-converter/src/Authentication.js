import React, { Fragment, useContext } from 'react'
import { UserFormContext } from './App';

const Authentication = () => {
    const {
        username,
        password,
        confirmPassword,
        api: {
            handleChangeFactory,
            setUserName,
            setPassword,
            setConfirmPassword,        
        }
    } = useContext(UserFormContext);
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
                onChange={handleChangeFactory(setUserName)}
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
   </Fragment>
  )
}

export default Authentication