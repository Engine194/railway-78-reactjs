import { useState } from "react";
import './ChienForm.css';

const ChienForm = () => {
    const [fullName, setFullName] = useState('');
    const handleChangeFullName = (event) => {
        const inputEle = event.target;
        setFullName(inputEle.value)
    }
    console.log(fullName);

    const [email, setEmail] = useState('');
    const handleChangeEmail = (event) => {
        const inputEle = event.target;
        setEmail(inputEle.value)
    }
    console.log(email);

    const [phone, setPhone] = useState('');
    const handleChangePhone = (event) => {
        const inputEle = event.target;
        setPhone(inputEle.value)
    }
    console.log(phone);

    const [date, setDate] = useState('');
    const handleChangeDate = (event) => {
        const inputEle = event.target;
        setDate(inputEle.value)
    }
    console.log(date);

    const [username, setUsername] = useState('');
    const handleChangeUsername = (event) => {
        const inputEle = event.target;
        setUsername(inputEle.value)
    }
    console.log(username);

    const [password, setPassword] = useState('');
    const handleChangePass = (event) => {
        const inputEle = event.target;
        setPassword(inputEle.value)
    }
    console.log(password);

    const [confirmPass, setConfirmPass] = useState('');
    const handleChangeConfirmPass = (event) => {
        const inputEle = event.target;
        setConfirmPass(inputEle.value)
    }
    console.log(confirmPass);
    return (
        <div className="chien-form-container">
            <h1>
                Register form
            </h1>
            <form className="form-row">
                <div className="form-col form-col-left">
                    <h2>User Information</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input type="text" name="fullname" placeholder='Full Name...'
                                value={fullName}
                                onChange={handleChangeFullName}
                            />
                            <p>Error Fullname</p>
                        </div>
                        <div className="form-control">
                            <input type="text" name="email" placeholder='Email...'
                                value={email}
                                onChange={handleChangeEmail}
                            />
                        </div>
                        <div className="form-control">
                            <input type="text" name="phoneNumber" placeholder='Phone Number...'
                                value={phone}
                                onChange={handleChangePhone}
                            />
                        </div>
                        <div className="gender-container">
                            <span>Gender:</span>
                            <div className="gender-radio">
                                <label>
                                    <input type="radio" name="gender" />Male
                                </label>
                                <label>
                                    <input type="radio" name="gender" />Female
                                </label>
                            </div>
                        </div>
                        <div className="form-control">
                            <div>Date Of Birth:</div>
                            <input type="date" name="dateOfBirth"
                                value={date}
                                onChange={handleChangeDate}
                            />
                        </div>
                    </div>
                </div>
                <div className="devider"></div>
                <div className="form-col form-col-right">
                    <h2>Authentication</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input type="text" name="username" placeholder='Username...'
                                value={username}
                                onChange={handleChangeUsername}
                            />
                        </div>
                        <div className="form-control">
                            <input type="password" name="password" placeholder='Password...'
                                value={password}
                                onChange={handleChangePass}
                            />
                        </div>
                        <div className="form-control">
                            <input type="password" name="confirmPassword" placeholder='Confirm Password...'
                                value={confirmPass}
                                onChange={handleChangeConfirmPass}
                            />
                        </div>
                        <div className="form-action">
                            <button type="reset">Reset</button>
                            <button type="submit">Submit</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChienForm;