import React, { Fragment } from "react";

const UserInformation = (props)=>{
    const {
        fullName,
        email,
        phone,
        gender,
        dateOfBirth,
        api: {
           onChangeHandlerFactory,
           setFullName,
           setEmail,
           setPhone,
           handleChangeGender,
           setDateOfBirth,
      },
    } = props || {};
    return(
        <Fragment>
        <h2>User information</h2>
        <div className="sub-form">

            <div className="form-control">
                <input type="text" name="fullname" placeholder='Fullname' value={fullName} onChange={onChangeHandlerFactory(setFullName)}/>
                <p>Error fullname</p>
               
            </div>

            <div className="form-control">
                <input type="text" name="email" placeholder='Email' value={email} onChange={onChangeHandlerFactory(setEmail)}/>
            </div>

            <div className="form-control">
                <input type="text" name="phone" placeholder='Phone Number' value={phone} onChange={onChangeHandlerFactory(setPhone)}/>
            </div>

            <div className="gender-container">
                <span>Gender:</span>
                <div className="gender-radios">
                    <label>
                        <input onChange={handleChangeGender} value={GENDER_TYPE.MALE} checked={gender=== GENDER_TYPE.MALE} type="radio" name="gender"/>
                        Male
                    </label>

                    <label>
                        <input onChange={handleChangeGender} value={GENDER_TYPE.FEMALE} checked={gender=== GENDER_TYPE.FEMALE} type="radio" name="gender"/>
                        Female
                    </label>
                </div>
            </div>
            <div className="form-control">
                <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={onChangeHandlerFactory(setDateOfBirth)}/>
            </div>
        </div>  
         </Fragment>
    )
}
export default UserInformation