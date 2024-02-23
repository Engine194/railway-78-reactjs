import { useState } from 'react';
import './ChienForm.style.css';
import { GENDER_TYPE } from "./utils";
import UserInformation from './UserInformation';

const ChienForm = () => {
    const [gender, setGender] = useState(GENDER_TYPE.FEMALE);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const handleChangeFullName = (event) => {
    //     const inputFullName = event.target;
    //     setFullName(inputFullName.value);
    // }
    // const handleChangeEmail = (event) => {
    //     const inputEmail = event.target;
    //     setEmail(inputEmail.value);
    // }
    // const handleChangePhone = (event) => {
    //     const inputPhone = event.target;
    //     setPhone(inputPhone.value);
    // }
    // const handleChangeUserName = (event) => {
    //     const inputUserName = event.target;
    //     setUserName(inputUserName.value);
    // }
    // const handleChangePassword = (event) => {
    //     const inputPassword = event.target;
    //     setPassword(inputPassword.value);
    // }
    // const handleChangeConfirmPassword = (event) => {
    //     const inputConfirmPassword = event.target;
    //     setConfirmPassword(inputConfirmPassword.value);
    // }

    // const handleChangeGender = (event) => {
    //     const inputEle = event.target;
    //     console.log("value...", inputEle.value);
    //     setGender(inputEle.value);
    // }

    const onChangeHandleFactory = (setState) => {
        return (event) => {
            const inputEle = event.target;
            setState(inputEle.value);
        }
    }

    // const handleChangeFullName = onChangeHandleFactory(setFullName);
    // const handleChangeEmail = onChangeHandleFactory(setEmail);
    // const handleChangePhone = onChangeHandleFactory(setPhone);
    // const handleChangeUserName = onChangeHandleFactory(setUserName);
    // const handleChangePassword = onChangeHandleFactory(setPassword);
    // const handleChangeConfirmPassword = onChangeHandleFactory(setConfirmPassword);
    const handleChangeGender = onChangeHandleFactory(setGender);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="chien-form-container">
            <h1>Register form</h1>
            <form onSubmit={handleSubmit} className="form-row">
                <div className="form-col form-col-left">
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
                </div>

                {/* <UserInformation
                    fullName={fullName}
                    email={email}
                    phone={phone}
                    gender={gender}
                    api={{
                        onChangeHandleFactory,
                        setFullName,
                        setEmail,
                        setPhone,
                        setGender
                    }}
                /> */}
                <div className="divider"></div>
                <div className="form-col form-col-right">
                    <h2>Authentication</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input type="text" name="username" placeholder='Username...' value={userName} onChange={onChangeHandleFactory(setUserName)} />
                        </div>

                        <div className="form-control">
                            <input type="password" name="password" placeholder='Password...' value={password} onChange={onChangeHandleFactory(setPassword)} />
                        </div>

                        <div className="form-control">
                            <input type="password" name="confirmPassword" placeholder='Confirm password...' value={confirmPassword} onChange={onChangeHandleFactory(setConfirmPassword)} />
                        </div>
                        <div className="form-actions">
                            <button type='reset'>Reset</button>
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChienForm;