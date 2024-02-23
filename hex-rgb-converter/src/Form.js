import "./Form.style.css";
import { useState } from "react";
import { GENDER_TYPE } from "./utils";

const initialInputValue = { value: "", error: "" };

const Form = () => {
  const [gender, setGender] = useState({value: GENDER_TYPE.FEMALE, error: "",});

  const [fullname, setFullName] = useState(initialInputValue);
  const [email, setEmail] = useState(initialInputValue);
  const [phone, setPhone] = useState(initialInputValue);
  const [date, setDate] = useState(initialInputValue);
  const [username, setUserName] = useState(initialInputValue);
  const [password, setPassword] = useState(initialInputValue);
  const [confirmPassword, setConfirmPassword] = useState(initialInputValue);

//   const handleChangeFullName = (event) => {
//     const inputEle = event.target;
//     setFullName(inputEle.value);
//   };

//   const handleChangeGender = (event) => {
//     const inputEle = event.target;
//     setGender(inputEle.value);
//   };

  const onChangeHandlerFactory = (setState) => {
    return (event) => {
        const inputEle = event.target;
        // setState(inputEle.value);
        setState((previousState) => {
            return {...previousState, value: inputEle.value};
        });
    };
  }

//   const handleChangeFullName = onChangeHandlerFactory(setFullName);
//   const handleChangeEmail = onChangeHandlerFactory(setEmail);
//   const handleChangeDate = onChangeHandlerFactory(setDate);

const resetFullname = () => {
  setFullName(initialInputValue);
}

const onValidateFactory = (setState) => {
  return (errorMsg) => {
    setState((previousState) => {
      return { ...previousState, error: errorMsg };
    });
  };
};

const clearErrors = () => {
  [
    setFullName,
    setGender,
    setEmail,
    setUserName,
    setPassword,
    setConfirmPassword,
    setDate,
    setPhone,
  ].forEach((setState) => {
    setState((previousState) => {
      return { ...previousState, error: "" };
    });
  });
};
  const handleChangeGender = onChangeHandlerFactory(setGender);


  console.log("gender ...", gender);

  // console.log('fullname....', fullname);

//   const handleChangeEmail = (event) => {
//     const inputEle = event.target;
//     setEmail(inputEle.value);
//   };

  // console.log('email....', email);

//   const handleChangePhone = (event) => {
//     const inputEle = event.target;
//     setPhone(inputEle.value);
//   };

  // console.log('Phone number....',phone);

//   const handleChangeDate = (event) => {
//     const inputEle = event.target;
//     setDate(inputEle.value);
//   };

  // console.log('Date....', date);

//   const handleChangeUserName = (event) => {
//     const inputEle = event.target;
//     setUserName(inputEle.value);
//   };

  // console.log('user name....', username);

//   const handleChangePassword = (event) => {
//     const inputEle = event.target;
//     setPassword(inputEle.value);
//   };

  // console.log('password....', password);

//   const handleChangeConfirmPassword = (event) => {
//     const inputEle = event.target;
//     setConfirmPassword(inputEle.value);
//   };

  // console.log('Confirm password....', confirmPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    //validate
    clearErrors();
    //validate FullName
    if(/[^a-zA-Z ]/.test(fullname.value)){
        // alert('FullName is not valid');
        onValidateFactory(setFullName)("Fullname is not valid...");
        // return;
    }

    if(/[^01]/.test(gender.value)){
        // alert('Gender is not valid');
        onValidateFactory(setGender)("Gender is not valid...");
        // return;
    }

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)){
        // alert('Email is not valid');
        onValidateFactory(setEmail)("Email is not valid...");
        // return;
    }

    const values = {
        fullname: fullname.value, //alphabet
        gender: gender.value, // '0' | '1'
        email: email.value, // must be an email
        username: username.value, // alphabet | number && min(5) max(50)
        password: password.value, // min(8) && alphabet(1) && ALPHABET(1) && number(1) && special character(1)
        confirmPassword: confirmPassword.value, // must equal password
        date: date.value, // must greater than 10 years old
        phone: phone.value, // min(9) && max(12)
    }
    // call api create user

    console.log('value ...', values); //axios == fetch
  };

  return (
    <div className="trinh-form-container">
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-col form-col-left">
          <h2>User information</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={fullname.value}
                onChange={onChangeHandlerFactory(setFullName)}
              />
              {/* <p>Error fullname</p> */}
              {fullname.error ? <p>{fullname.error}</p> : null}
            </div>

            <div className="form-control">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={email.value}
                onChange={onChangeHandlerFactory(setEmail)}
              />
              {/* <p>Error fullname</p> */}
              {email.error ? <p>{email.error}</p> : null}
            </div>

            <div className="form-control">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={phone.value}
                onChange={onChangeHandlerFactory(setPhone)}
              />
              {/* <p>Error fullname</p> */}
              {phone.error ? <p>{phone.error}</p> : null}
            </div>

            <div className="gender-container">
              <span>Gender:</span>
              <div className="gender-radios">
                <label>
                  <input
                    onChange={handleChangeGender}
                    checked={gender === GENDER_TYPE.MALE}
                    type="radio"
                    name="gender"
                    value={GENDER_TYPE.MALE}
                  />
                  Male
                </label>
                <label>
                  <input
                    onChange={handleChangeGender}
                    checked={gender === GENDER_TYPE.FEMALE}
                    type="radio"
                    name="gender"
                    value={GENDER_TYPE.FEMALE}
                  />
                  FeMale
                </label>
              </div>
            </div>

            <div className="form-control">
              <input
                type="date"
                name="dateOfBirth"
                value={date.value}
                onChange={onChangeHandlerFactory(setDate)}
              />
            </div>
          </div>
        </div>

        <div className="diviver"></div>

        <div className="form-col form-col-right">
          <h2>Authentication</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="username"
                placeholder="User Name"
                value={username.value}
                onChange={onChangeHandlerFactory(setUserName)}
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password.value}
                onChange={onChangeHandlerFactory(setPassword)}
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword.value}
                onChange={onChangeHandlerFactory(setConfirmPassword)}
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
