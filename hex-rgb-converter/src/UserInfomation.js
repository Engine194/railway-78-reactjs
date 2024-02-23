import React, { Fragment } from 'react'
import { GENDER_TYPE } from './utils'

const UserInfomation = (props) => {
    const {
        fullname,
        email,
        phone,
        gender,
        dateOfBirth,
        api: {
            onChangeHandlerFactory,
            setFullname,
            setEmail,
            setPhone,
            handleChangeGender,
            setDateOfbirth
         }
    } = props || {}

  

  return (
    <Fragment>
                 <h2>User Information</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input type="text" name="fullname" placeholder="Fullname..." value={fullname.value} onChange={onChangeHandlerFactory(setFullname)} />
                            {fullname.error ? <p>{fullname.error}</p> : null}

                        </div>
                        <div className="form-control">
                            <input type="text" name="email" placeholder="Email..." value={email.value} onChange={onChangeHandlerFactory(setEmail)} />
                            {email.error ? <p>{email.error}</p> : null}

                        </div>
                        <div className="form-control">
                            <input type="text" name="phone" placeholder="Phone..." value={phone.value} onChange={onChangeHandlerFactory(setPhone)}/>
                            {phone.error ? <p>{phone.error}</p> : null}

                        </div>
                        <div className="gender-container">
                            <span>Gender:</span>
                            <div className="gender-radios">
                                <label>
                                    <input type="radio" checked={gender.value.value === GENDER_TYPE.MALE} name="gender"  value={GENDER_TYPE.MALE} onChange={handleChangeGender}/>
                                    Male
                                </label>
                                <label>
                                    <input type="radio" checked={gender.value === GENDER_TYPE.FEMALE} name="gender" value={GENDER_TYPE.FEMALE} onChange={handleChangeGender}/>
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <input type="date" name="dateOfBirth" value={dateOfBirth.value} onChange = {onChangeHandlerFactory(setDateOfbirth)}/>
                        </div>
                    </div></Fragment>
  )
}

export default UserInfomation