import React from "react";

export default function UserForm() {
    return (
        <div className="user-form-container"> 
            <div className="user-form-inner-container">
                <form>
                    <input type="text" placeholder="Fullname"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="UserName"/>
                    <input type="date" placeholder="Date of birth"/>
                    <div className="form-row">
                        <label htmlFor="gender">Gender</label>
                        <div className="gender-group">
                            <input name="gender" value={0}></input>
                            <input name="gender" value={1}></input>

                        </div>

                    </div>


                </form>

            </div>
        </div>

    )
}