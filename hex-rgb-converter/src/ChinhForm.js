import "./ChinhForm.style.css";
import {useState} from 'react';
const ChinhForm = () =>{
    const[fullName, setFullName] = useState("Chinh2002");
    const handleChangeFullName = (event) =>{
        const inputEle =event.target;
        setFullName(inputEle.value)
    };
    console.log('ChinhForm... ',fullName );

    const[email, setEmail] = useState("chinhlv02@email");
    const handleChangeEmail = (event) =>{
        const inputEm =event.target;
        setEmail(inputEm.value)
    };
    console.log('ChinhEmail... ',email );

    const[phone, setPhone] = useState("012345678");
    const handleChangePhone = (event) =>{
        const inputPh =event.target;
        setPhone(inputPh.value)
    };
    console.log('ChinhPhone... ',phone );

    const[date, setDate] = useState("2002-08-03");
    const handleChangeDate = (event) =>{
        const inputDa =event.target;
        setDate(inputDa.value)
    };
    console.log('ChinhDate... ', date );

    const[userName, setUserName] = useState("chinhlv02");
    const handleChangeUserName = (event) =>{
        const inputUs =event.target;
        setUserName(inputUs.value)
    };
    console.log('ChinhUserName... ', userName );

    const[password, setPassword] = useState("abc@123");
    const handleChangePassword = (event) =>{
        const inputPs =event.target;
        setPassword(inputPs.value)
    };
    console.log('ChinhPassword... ', password );

    const[confirmPassword, setConfirmPassword] = useState("abc@123");
    const handleConfirmPassword = (event) =>{
        const inputCP =event.target;
        setConfirmPassword(inputCP.value)
    };
    console.log('ChinhConfirmPassword... ', confirmPassword );

    return(
        <div className="chinh-form-container">
            <h1>Register new user</h1>
            <form className="form-row">
                <div className="form-col form-col-left">
                    <h2>User information</h2>
                    <div className="sub-form">

                        <div className="form-control">
                            <input type="text" name="fullname" placeholder="Full Name" value={fullName} onChange={handleChangeFullName}/>
                            <p>Error Full Name</p>
                        </div>

                        <div className="form-control">
                            <input type="text" name="email" placeholder="Email" value={email} onChange={handleChangeEmail} />
                        </div>

                        <div className="form-control">
                            <input type="text" name="phone" placeholder="Phone Number" value={phone} onChange={handleChangePhone} />
                        </div>

                        <div className="gender-container">
                            <span>Gender</span>
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
                            <input type="date" name="dateOfBirth" value={date} onChange={handleChangeDate} />
                        </div>

                    </div>
                </div>
                <div className="divider"></div>
                <div className="form-col form-col-right">
                    <h2>Authentication</h2>
                    <div className="sub-form">

                        <div className="form-control">
                            <input type="text" name="username" placeholder="User Name" value={userName} onChange={handleChangeUserName} />
                        </div>

                        <div className="form-control">
                            <input type="password" name="password" placeholder="Password" value={password} onChange={handleChangePassword} />
                        </div>

                        <div className="form-control">
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPassword}  />
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
export default ChinhForm;