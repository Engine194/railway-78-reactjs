import { useState } from 'react';
import './ThanhtaiForm.style.css'; 

const ThanhtaiForm = () => {

    const [fullName, setFullName] = useState('');
    const handleChangeFullName = (event) =>{
        const inputEle = event.target;
        setFullName(inputEle.value);
    };
    console.log('fullname...',fullName);

    const [email, setEmail] = useState('');
    const handleChangeEmail = (event) =>{
        const inputEle = event.target;
        setEmail(inputEle.value);
    }
    console.log('email...',email);

    const [phone, setPhone] = useState('');
    const handleChangePhone = (event) =>{
        const inputEle = event.target;
        setPhone(inputEle.value);
    }
    console.log('phone...',phone);

    const [dateOfBirth, setDateOfBirth] = useState('');
    const handleChangeDateOfBirth = (event) =>{
        const inputEle = event.target;
        setDateOfBirth(inputEle.value);
    }
    console.log('dateOfBirth...',dateOfBirth);
    

    const [username, setUsername] = useState('');
    const handleChangeUsername = (event) =>{
        const inputEle = event.target;
        setUsername(inputEle.value);
    }
    console.log('username...',username);

    const [password, setPassword] = useState('');
    const handleChangePassword = (event) =>{
        const inputEle = event.target;
        setPassword(inputEle.value);
    }
    console.log('password...',password);

    const [confirmPassword, setConfirmPassword] = useState('');
    const handleChangeConfirmPassword = (event) =>{
        const inputEle = event.target;
        setConfirmPassword(inputEle.value);
    }
    console.log('confirmPassword...',confirmPassword);


    return (
    <div className="thanhtai-form-container">
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
                        <input type="text" name="phone" placeholder='Phone Number' value={phone} onChange={handleChangePhone}/>
                    </div>

                    <div className="gender-container">
                        <span>Gender:</span>
                        <div className="gender-radios">
                            <label>
                                <input type="radio" name="gender"/>
                                Male
                            </label>

                            <label>
                                <input type="radio" name="gender"/>
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChangeDateOfBirth}/>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="form-col form-col-right">
                <h2>Authentication</h2>
                <div className="sub-form">
                <div className="form-control">
                    <input type="text" name="Username" placeholder='Username' value={username} onChange={handleChangeUsername}/>
                </div>
                <div className="form-control">
                    <input type="password" name="password" placeholder='Password' value={password} onChange={handleChangePassword}/>
                </div>
                <div className="form-control">
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={handleChangeConfirmPassword}/>
                </div>
                <div className="form-actions">
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
                </div>
            </div>
        </form>
    </div>

    );
};

export default ThanhtaiForm;