import { useState } from 'react';
import './ThanhtaiForm.style.css'; 
import { GENDER_TYPE } from './utils';
import UserInformation from './userInfomation';

const ThanhtaiForm = (props) => {
    const ThanhtaiForm =(props)=>{
        const {
            fullName,
            gender,
            email,
            username,
            password,
            confirmPassword,
            dateOfBirth,
            phone,
            api:{
                setFullName,
                setEmail,
                setUsername,
                setPassword,
                setConfirmPassword,
                setDateOfBirth,
                setPhone,
                onChangeHandlerFactory,
                handleChangeGender,
                handleSubmit
            }
        }
    }

    const onChangeHandlerFactory = (setState) =>{
        return(event)=>{
            const inputEle = event.target;
            setState((previousState)) => {
            return {...previousState, value:inputEle.value};
            }
        }
    }

    const [gender, setGender] = useState(GENDER_TYPE.FEMALE);
    // const handleChangeGender = (event)=>{
    //     const inputEle = event.target;
    //     console.log('event...', inputEle.value);
    //     setGender(inputEle.value);
    // }
    const handleChangeGender = onChangeHandlerFactory(setGender);

    const [fullName, setFullName] = useState({value:"",error:""});
    // const handleChangeFullName = (event) =>{
        //     const inputEle = event.target;
        //     setFullName(inputEle.value);
        // };
    const handleChangeFullName = onChangeHandlerFactory(setFullName);
    console.log('fullname...',fullName);

    const [email, setEmail] = useState('');
    // const handleChangeEmail = (event) =>{
    //     const inputEle = event.target;
    //     setEmail(inputEle.value);
    // }
    const handleChangeEmail = onChangeHandlerFactory(setEmail);
    console.log('email...',email);

    const [phone, setPhone] = useState('');
    // const handleChangePhone = (event) =>{
    //     const inputEle = event.target;
    //     setPhone(inputEle.value);
    // }
    const handleChangePhone = onChangeHandlerFactory(setPhone);
    console.log('phone...',phone);

    const [dateOfBirth, setDateOfBirth] = useState('');
    // const handleChangeDateOfBirth = (event) =>{
    //     const inputEle = event.target;
    //     setDateOfBirth(inputEle.value);
    // }
    const handleChangeDateOfBirth = onChangeHandlerFactory(setDateOfBirth);
    console.log('dateOfBirth...',dateOfBirth);
    

    const [username, setUsername] = useState('');
    // const handleChangeUsername = (event) =>{
    //     const inputEle = event.target;
    //     setUsername(inputEle.value);
    // }
    const handleChangeUsername = onChangeHandlerFactory(setUsername);
    console.log('username...',username);

    const [password, setPassword] = useState('');
    // const handleChangePassword = (event) =>{
    //     const inputEle = event.target;
    //     setPassword(inputEle.value);
    // }
    const handleChangePassword = onChangeHandlerFactory(setPassword);
    console.log('password...',password);

    const [confirmPassword, setConfirmPassword] = useState('');
    // const handleChangeConfirmPassword = (event) =>{
    //     const inputEle = event.target;
    //     setConfirmPassword(inputEle.value);
    // }
    const handleChangeConfirmPassword = onChangeHandlerFactory(setConfirmPassword);
    console.log('confirmPassword...',confirmPassword);

  

    const handleSubmit = (event) => {
        event.preventDefault();
        // validate

        // validate Fullname
        if(/[^a-zA-Z ]/.test(fullName)){
            alert('Fullname is not valid...')
            return;
        }

        // validate Gender
        if(/[^01]/.test(gender)){
            alert('Gender is not valid...')
            return;
        }

        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            alert('Email is not valid...')
            return;
        }

 
        const values = {
            gender,    // '0' | '1'
            fullName,  // alphabet
            email,     // must be an email
            phone,          // min(9) & max(12)
            dateOfBirth,    // must greater than 10 years old
            username,       // alphabet | number && min(5) max(50)
            password,       // min(8) & alphabet(1) & ALPHABET(1) & number(1) 
            confirmPassword, // must equal password
            }
            // call api create user
            console.log('values...',values);
        };
    
           


    return (
    <div className="thanhtai-form-container">
        <h1>Register new user</h1>
        <form onSubmit={handleSubmit} className="form-row">
            <div className="form-col form-col-left">
                {/* <h2>User information</h2>
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
                </div> */}
                <UserInformation
                    fullName={fullName}
                    email={email}
                    phone={phone}
                    gender={gender}
                    dateOfBirth={dateOfBirth}
                    api={{
                        onChangeHandlerFactory,
                        setFullName,
                        setEmail,
                        setPhone,
                        handleChangeGender,
                        setDateOfBirth,
                    }}
                />
            </div>
            <div className="divider"></div>
            <div className="form-col form-col-right">
                <h2>Authentication</h2>
                <div className="sub-form">
                <div className="form-control">
                    <input type="text" name="Username" placeholder='Username' value={username} onChange={onChangeHandlerFactory(setUsername)}/>
                </div>
                <div className="form-control">
                    <input type="password" name="password" placeholder='Password' value={password} onChange={onChangeHandlerFactory(setPassword)}/>
                </div>
                <div className="form-control">
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' value={confirmPassword} onChange={onChangeHandlerFactory(setConfirmPassword)}/>
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