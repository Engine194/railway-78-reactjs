import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"

const User = () => {

    const {userId} = useParams();
    console.log("userId...", userId);

    const[user, setUser] = useState();



    useEffect(() => {
        const USER_URL = process.env.REACT_APP_USER_API_URL;

        axios.get(USER_URL + "/" + userId).then(({data}) => {
            setUser(data);
        })
    }, []);

    console.log("user...", user);

    return (   
        <div>
            <h1>User Detail</h1>
            <div>
                <p>Fullname: {user?.fullname}</p>
                <p>Username: {user?.username}</p>
                <p>Email: {user?.email}</p>
                <p>DayOfBirthDate: {user?.dob}</p>
                <p>Gender: {user?.gender}</p>
                <p>Favorite: {user?.favorite}</p>
            </div>
        </div>
    )
}

export default User;