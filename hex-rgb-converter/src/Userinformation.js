import React, { Fragment } from "react";
import { GENDER_TYPE } from "./utils";
const UserInformation = (props) => {

    const {
        fullName,
        email,
        phoneNumber,
        gender,
        dateOfBirth,
        api: {
            onChangeHandlerFactory,
            setFullName,
            setEmail,
            setPhoneNumber,
            handleChangeGender,
            setDateOfBirth,
        },
    } = props || {};
    return (
        <Fragment>
            <h2>User information</h2>
            <div className="sub-form">
                <div className="form-control">
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Fullname"
                        value={fullName.value}
                        onChange={onChangeHandlerFactory(setFullName)}
                    />
                    {fullName.error ? <p>{fullName.error}</p> : null}
                </div>

                <div className="form-control">
                    <input
                        type="text"
                        value={email.value}
                        onChange={onChangeHandlerFactory(setEmail)}
                        name="email"
                        placeholder="Email"
                    />
                    {email.error ? <p>{email.error}</p> : null}
                </div>

                <div className="form-control">
                    <input
                        type="text"
                        value={phoneNumber.value}
                        onChange={onChangeHandlerFactory(setPhoneNumber)}
                        name="phone"
                        placeholder="Phone number"
                    />
                    {phoneNumber.error ? <p>{phoneNumber.error}</p> : null}
                </div>

                <div className="gender-container">
                    <span>Gender:</span>
                    <div className="gender-radios">
                        <label>
                            <input
                                onChange={handleChangeGender}
                                checked={gender.value === GENDER_TYPE.MALE}
                                type="radio"
                                name="gender"
                                value={GENDER_TYPE.MALE}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                onChange={handleChangeGender}
                                checked={gender.value === GENDER_TYPE.FEMALE}
                                type="radio"
                                name="gender"
                                value={GENDER_TYPE.FEMALE}
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div className="form-control">
                    <input
                        type="date"
                        value={dateOfBirth.value}
                        onChange={onChangeHandlerFactory(setDateOfBirth)}
                        name="dateOfBirth"
                    />
                </div>
            </div>
        </Fragment>
    )
}
export default UserInformation;