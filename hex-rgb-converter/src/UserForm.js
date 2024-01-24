import React from "react";

export default function UserForm() {

    return(
        <div className="user-form-container">
            <div className="user-form-input">
                <form className="user-form">
                    <input type="text" placeholder="Fullname"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Username"/>

                    <div className="form-row">
                        <label htmlFor="gender">Gender:</label>
                        <div className="gender-group">
                            <div>
                                <input name="gender" value={1}/> 
                                Male
                            </div>
                            
                            <div>
                                <input name="gender" value={0}/>
                                Female
                            </div>
                            
                        </div>
                    </div>

                    <input type="date" placeholder="Date of birth"/>
                    <textarea rows={5}/>
                </form>
            </div>

        </div>
    )
}