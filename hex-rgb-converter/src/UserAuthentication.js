import React, { Fragment, useContext } from 'react'
import { UserFormContext } from './App'

const UserAuthentication = () => {

    const {
        userName,
        password,
        confirmPassword,
        api: {
            onChangeHandleFactory,
            setUserName,
            setPassword,
            setConfirmPassword,

        }
    } = useContext(UserFormContext)
    return (
        <Fragment>
            <h2>Authentication</h2>
            <div className="sub-form">
                <div className="form-control">
                    <input type="text" name="username" placeholder='Username...' value={userName.value} onChange={onChangeHandleFactory(setUserName)} />
                    {userName.error ? <p>{userName.error}</p> : null}
                </div>

                <div className="form-control">
                    <input type="password" name="password" placeholder='Password...' value={password.value} onChange={onChangeHandleFactory(setPassword)} />
                    {password.error ? <p>{password.error}</p> : null}
                </div>

                <div className="form-control">
                    <input type="password" name="confirmPassword" placeholder='Confirm password...' value={confirmPassword.value} onChange={onChangeHandleFactory(setConfirmPassword)} />
                    {confirmPassword.error ? <p>{confirmPassword.error}</p> : null}
                </div>
            </div>
            <div className="form-actions">
                <button type='reset'>Reset</button>
                <button type='submit'>Submit</button>
            </div>
        </Fragment>
    )
}

export default UserAuthentication