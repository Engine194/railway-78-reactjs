import { useState } from 'react'
import './HoangForm.style.css'
import UserInfomation from './UserInfomation'
import { GENDER_TYPE } from './utils'

const initialInputValue = {value: "", error: ""}

const HoangForm = () => {
    const{
        fullname,
        email,
        phone,
        gender,
        dateOfBirth,
        username,
        password,
        confirmPassword,
        api: {
            setFullname,
            setEmail,
            setUsername,
            setPassword,
            setConfirmPassword,
            setDateOfbirth,
            onChangeHandlerFactory,
            handleChangeGender,
            handleSubmit,

            }
        } =props || {}


   

    



  

    const resetFullname = () => {
        setFullname(initialInputValue)
    }

    const clearErrors = () => {
        [
    setFullname,
    setEmail,
    setGender,
    setPhone,
    setDateOfbirth,
    setUsername,
    setPassword,
    setConfirmPassword,
        ].forEach((setState) => {
            setState((previousState) => {
                return {...previousState, error: ""}
            })
        })
    }

    const onValidateFactory = (setState) => {
        return (errorMsg) => {
            setState((previousState) => {
                return {...previousState, error:errorMsg}
            })
        }
    }



 
        //validate
       
        clearErrors()
        //validate Fullname
        if(/[^a-zA-Z ] /.test(fullname.value)){
            onValidateFactory(setFullname)('Fullname is not valid...')
            return
        }
        if(/[^01]/.test(gender.value)){
            onValidateFactory(setGender)('Gender is not valid...')
            
            return 
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)){
            onValidateFactory(setEmail)('Email is not valid...')

            return
        }

        const values = {   
            fullname:fullname.value,
            email:email.value,
            phone:phone.value,
            gender:gender.value,
            dateOfBirth:dateOfBirth.value,
            username:username.value,
            password:password.value,
            confirmPassword:confirmPassword.value,
        }
        //Call API create user
        console.log("values...",values)  //AXIOS == fetch
    }

    return (
        <div className="hoang-form-container">
            <h1>Register new user</h1>
            <form onSubmit={handleSubmit} className="form-row">
                <div className="form-col form-col-left">
                    {/* <h2>User Information</h2>
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
                                    <input type="radio" checked={gender.value === GENDER_TYPE.MALE} name="gender"  value={GENDER_TYPE.MALE} onChange={onChangeHandlerFactory(setGender)}/>
                                    Male
                                </label>
                                <label>
                                    <input type="radio" checked={gender.value === GENDER_TYPE.FEMALE} name="gender" value={GENDER_TYPE.FEMALE} onChange={onChangeHandlerFactory(setGender)}/>
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <input type="date" name="dateOfBirth" value={dateOfBirth.value} onChange = {onChangeHandlerFactory(setDateOfbirth)}/>
                        </div>
                    </div> */}
                    <UserInfomation
                        fullname={fullname}
                        email={email}
                        phone={phone}
                        gender={gender}
                        dateOfBirth={dateOfBirth}
                        api={{
                            onChangeHandlerFactory,
                            setFullname,
                            setEmail,
                            setPhone,
                            handleChangeGender,
                            setDateOfbirth,
                        }}
                    />
                </div>
                <div className="divider"></div>
                <div className="form-col form-col-right">
                    <h2>User Authentication</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input type="text" name="username" placeholder="Username..." value={username.value} onChange={onChangeHandlerFactory(setUsername)} />
                            {username.error ? <p>{username.error}</p> : null}

                        </div>
                        <div className="form-control">
                            <input type="password" name="password" placeholder="Password..." value={password.value} onChange={onChangeHandlerFactory(setPassword)}/>
                            {password.error ? <p>{password.error}</p> : null}
                            
                        </div>
                        <div className="form-control">
                            <input type="password" name="confirmPassword" placeholder="ConfirmPassword..." value={confirmPassword.value} onChange={onChangeHandlerFactory(setConfirmPassword)}/>
                            {confirmPassword.error ? <p>{confirmPassword.error}</p> : null}

                        </div>
                        <div className="form-actions">
                            <button type="reset">Reset</button>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HoangForm