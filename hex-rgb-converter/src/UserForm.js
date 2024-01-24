import React from "react";

export default function UserForm() {
  return (
    <div className="user-form-container">
      <div className="user-form-inner-wrapper">
        <form className="user-form">
          <input className="text-input" type="text" placeholder="Fullname" />
          <input className="text-input" type="email" placeholder="Email" />
          <input className="text-input" type="text" placeholder="Username" />

          <div className="form-row">
            <label htmlFor="gender">Gender:</label>
            <div className="gender-group">
              <div>
                <input type="radio" name="gender" value={1} />
                Male
              </div>
              <div>
                <input type="radio" name="gender" value={0} />
                Female
              </div>
            </div>
          </div>
          <div className="form-row">
            <label>Date of birth:</label>
            <input type="date" />
          </div>
          <textarea rows={5} />

          <div className="form-actions">
            <button className="form-btn btn-reset" type="reset">Reset</button>
            <button className="form-btn btn-submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
