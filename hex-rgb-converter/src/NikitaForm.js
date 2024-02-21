import { useState } from "react";
import "./NikitaForm.style.css";

const NikitaForm = () => {
  const [fullName, setFullName] = useState("Nikita194");
  
  const handleChangeFullName = (event) => {
      const inputEle = event.target;
      setFullName(inputEle.value);
  };

  return (
    <div className="nikita-form-container">
      <h1>Register new user</h1>
      <form className="form-row">
        <div className="form-col form-col-left">
          <h2>User information</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                value={fullName}
                onChange={handleChangeFullName}
              />
              <p>Error fullname</p>
            </div>

            <div className="form-control">
              <input type="text" name="email" placeholder="Email" />
            </div>

            <div className="form-control">
              <input type="text" name="phone" placeholder="Phone number" />
            </div>

            <div className="gender-container">
              <span>Gender:</span>
              <div className="gender-radios">
                <label>
                  <input type="radio" name="gender" />
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" />
                  Female
                </label>
              </div>
            </div>

            <div className="form-control">
              <input type="date" name="dateOfBirth" />
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="form-col form-col-right">
          <h2>Authentication</h2>
          <div className="sub-form">
            <div className="form-control">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-control">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
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

export default NikitaForm;
