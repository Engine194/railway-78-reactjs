import React, { Fragment } from 'react'
import { GENDER_TYPE } from './utils'

const UserInformation = (props) => {
    const {
        fullName,
        email,
        phone,
        gender,
        dateOfBirth,
        api: {
            onChangeHandleFactory,
            setFullName,
            setEmail,
            setPhone,
            handleChangeGender,
            setDateOfBirth,
        }
    } = props || {}
    return (
        <Fragment>
            <h2>User information</h2>
            <div className="sub-form">
                <div className="form-control">
                    <input type="text" name="fullname" placeholder='Fullname...' value={fullName.value} onChange={onChangeHandleFactory(setFullName)} />
                    {fullName.error ? <p>{fullName.error}</p> : null}
                </div>

                <div className="form-control">
                    <input type="text" name="email" placeholder='Emaill...' value={email.value} onChange={onChangeHandleFactory(setEmail)} />
                    {email.error ? <p>{email.error}</p> : null}
                </div>

                <div className="form-control">
                    <input type="text" name="phone" placeholder='Phone Number...' value={phone.value} onChange={onChangeHandleFactory(setPhone)} />
                    {phone.error ? <p>{phone.error}</p> : null}
                </div>

                <div className="gender-container">
                    <span>Gender:</span>
                    <div className="gender-radio">
                        <label>
                            <input onChange={handleChangeGender} checked={gender.value === GENDER_TYPE.MALE} type="radio" name="gender" value={GENDER_TYPE.MALE} />
                            Male
                        </label>

                        <label>
                            <input onChange={handleChangeGender} checked={gender.value === GENDER_TYPE.FEMALE} type="radio" name="gender" value={GENDER_TYPE.FEMALE} />
                            Female
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <input type="date" name="dateOfBirth" value={dateOfBirth.value} onChange={onChangeHandleFactory(setDateOfBirth)} />
                    {dateOfBirth.error ? <p>{dateOfBirth.error}</p> : null}
                </div>
            </div>
        </Fragment>
    )
}

export default UserInformation