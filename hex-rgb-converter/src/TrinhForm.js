import './TrinhForm.style.css'
import {useState} from 'react'



const TrinhForm = () => {
    const[fullname, setFullName] = useState('')
    const handleChangeFullName = (event) =>{
        const inputEle = event.target;
        setFullName(inputEle.value);
    };

    console.log('fullname....', fullname);

    
    const[email, setEmail] = useState('')
    const handleChangeEmail = (event) =>{
        const inputEle = event.target;
        setEmail(inputEle.value);
    };

    // console.log('email....', email);


    const[phone, setPhone] = useState('')
    const handleChangePhone = (event) =>{
        const inputEle = event.target;
        setPhone(inputEle.value);
    };

    // console.log('Phone number....',phone);


    const[date, setDate] = useState('')
    const handleChangeDate = (event) =>{
        const inputEle = event.target;
        setDate(inputEle.value);
    };

    // console.log('Date....', date);


    const[username, setUserName] = useState('')
    const handleChangeUserName = (event) =>{
        const inputEle = event.target;
        setUserName(inputEle.value);
    };

    // console.log('user name....', username);


    const[password, setPassword] = useState('')
    const handleChangePassword = (event) =>{
        const inputEle = event.target;
        setPassword(inputEle.value);
    };

    // console.log('password....', password);


    const[confirmPassword, setConfirmPassword] = useState('')
    const handleChangeConfirmPassword = (event) =>{
        const inputEle = event.target;
        setConfirmPassword(inputEle.value);
    };

    // console.log('Confirm password....', confirmPassword);




    return (
        <div className="trinh-form-container">
            <h1>Register Form</h1>
            <form className="form-row">
                <div className="form-col form-col-left">
                    <h2>User information</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input 
                            type="text" 
                            name="fullname" 
                            placeholder='Full Name'
                            value={fullname}
                            onChange={handleChangeFullName}/>
                            {/* <p>Error fullname</p> */}
                        </div>
            
                        <div className="form-control">
                            <input 
                            type="text" 
                            name="email" 
                            placeholder='Email'
                            value={email}
                            onChange={handleChangeEmail}/>
                            {/* <p>Error fullname</p> */}
                        </div>

                        <div className="form-control">
                            <input
                            type="text" 
                            name="phone"
                            placeholder='Phone Number'
                            value={phone}
                            onChange={handleChangePhone}/>
                            {/* <p>Error fullname</p> */}
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
                                    FeMale
                                </label>
                            </div>
                        </div>

                        <div className="form-control">
                            <input
                            type="date" 
                            name="dateOfBirth"
                            value={date}
                            onChange={handleChangeDate}/>
                        </div>
                    </div>
                </div>

                <div className="diviver"></div>

                <div className="form-col form-col-right">
                    <h2>Authentication</h2>
                    <div className="sub-form">
                        <div className="form-control">
                            <input type="text" 
                            name="username" 
                            placeholder='User Name'
                            value={username}
                            onChange={handleChangeUserName}/>
                        </div>

                        <div className="form-control">
                            <input type="password" 
                            name="password" 
                            placeholder='Password'
                            value={password}
                            onChange={handleChangePassword}/>
                        </div>

                        <div className="form-control">
                            <input type="password" 
                            name="confirmPassword" 
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={handleChangeConfirmPassword}/>
                        </div>
                    </div>
                    <div className='form-actions'>
                        <button type='reset'>Reset</button>
                        <button type='submit'>Submit</button>
                    </div>

                 </div>

            </form>

        </div>
    );

};

export default TrinhForm;