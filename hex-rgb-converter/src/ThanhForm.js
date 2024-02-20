// import React from "react";
import { useState } from 'react';
import './ThanhForm.style.css'

const ThanhForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('thanh@gmail.com');
    const [phonenNumber, setPhonenNumber] = useState('0327774812');
    const [dateOfbirth, setDateOfbirth] = useState('2024-02-07');
    const [username, setUsername] = useState('thanhpham');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeFullName = (event) => {
        const inputElement = event.target;
        setFullName(inputElement.value)
    }
    console.log("fullName...", fullName);

    const handleChangeEmail = (event) => {
        const inputElement = event.target;
        setEmail(inputElement.value)
    }
    console.log("email...", email);

    const handleChangePhoneNumber = (event) => {
        const inputElement = event.target;
        setPhonenNumber(inputElement.value)
    }
    console.log("phonenNumber...", phonenNumber);

    const handleChangeDateOfbirth = (event) => {
        const inputElement = event.target;
        setDateOfbirth(inputElement.value)
    }
    console.log("dateOfbirth...", dateOfbirth);

    const handleChangeUsername = (event) => {
        const inputElement = event.target;
        setUsername(inputElement.value)
    }
    console.log("username...", username);

    const handleChangePassword = (event) => {
        const inputElement = event.target;
        setPassword(inputElement.value)
    }
    console.log("password...", password);

    const handleChangeConfirmPassword = (event) => {
        const inputElement = event.target;
        setConfirmPassword(inputElement.value)
    }
    console.log("confirmPassword...", confirmPassword);

    

    

    return (
        <div className="thanh-form-container">
            <h1>Register new user</h1>
            <form className="form-row">
                <div className="form-col form-col-left">
                    <h2>User information</h2>
                    <div className="sub-form">

                        <div className="form-control">
                            <input type="text" name="fullname" placeholder='Fullname' value={fullName} onChange={handleChangeFullName}/>
                            <p>Error fullname</p>
                        </div>

                        <div className="form-control">
                            <input type="text" name="email" placeholder='Email' value={email} onChange={handleChangeEmail}/>
                        </div>

                        <div className="form-control">
                            <input type="text" name="phone" placeholder='Phone number' value={phonenNumber} onChange={handleChangePhoneNumber}/>
                        </div>

                        <div className="gender-container">
                            <span>Gender</span>
                            <div className="gender-radios">
                                <lable>
                                    <input type="radio" name="gender"/>
                                    Male
                                </lable>

                                <lable>
                                    <input type="radio" name="gender"/>
                                    Female
                                </lable>
                            </div>
                        </div>

                        <div className="form-control">
                            <input type="date" name="dateOfbirth" value={dateOfbirth} onChange={handleChangeDateOfbirth}/>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="form-col form-col-right">
                    <h2>Authentication</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input type="text" name="username" placeholder='Username' value={username} onChange={handleChangeUsername}/>
                        </div>

                        <div className="form-control">
                            <input type="password" name="password" placeholder='Password' value={password} onChange={handleChangePassword}/>
                        </div>

                        <div className="form-control">
                            <input type="password" name="confirmPassword" placeholder='ConfirmPassword' value={confirmPassword} onChange={handleChangeConfirmPassword}/>
                        </div>
                    </div>

                    <div className="form-actions">
                            <button type="reset">Rest</button>
                            <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ThanhForm;