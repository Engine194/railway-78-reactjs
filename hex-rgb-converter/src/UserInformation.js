import React, { Fragment } from 'react'

const UserInformation = (props) => {
    const {
        fullName,
        email,
        phone,
        gender,
        api: {
            onChangeHandleFactory,
            setFullName,
            setEmail,
            setPhone,
            handleChangeGender
        }
    } = props || {};
    return (
        <Fragment>
            <h2>User information</h2>
            <div className="sub-form">
                <div className="form-control">
                    <input type="text" name="fullname" placeholder='Fullname...' value={fullName} onChange={onChangeHandleFactory(setFullName)} />
                    <p>Error fullname</p>
                </div>

                <div className="form-control">
                    <input type="text" name="email" placeholder='Emaill...' value={email} onChange={onChangeHandleFactory(setEmail)} />
                </div>

                <div className="form-control">
                    <input type="text" name="phone" placeholder='Phone Number...' value={phone} onChange={onChangeHandleFactory(setPhone)} />
                </div>

                <div className="gender-container">
                    <span>Gender:</span>
                    <div className="gender-radio">
                        <label>
                            <input onChange={handleChangeGender} checked={gender === GENDER_TYPE.MALE} type="radio" name="gender" value={GENDER_TYPE.MALE} />
                            Male
                        </label>

                        <label>
                            <input onChange={handleChangeGender} checked={gender === GENDER_TYPE.FEMALE} type="radio" name="gender" value={GENDER_TYPE.FEMALE} />
                            Female
                        </label>
                    </div>
                </div>
                <div className="form-control">
                    <input type="date" name="dateOfBirth" />
                </div>
            </div>
        </Fragment>
    )
}

export default UserInformation
