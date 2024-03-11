import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const User = () => {
    const {userId} = useParams();
    console.log('userId...', userId);
    
    // tao ra state de lay data cua user detail
    const [user, setUser] = useState();
    //su dung useEffect de goi api
    useEffect(() => {
        //goi API USER_URL = process.env.REACT_APP_USER_API_URL
        const USER_URL = process.env.REACT_APP_USER_API_URL;

        // USER_DETAIL_URL = USER_URL + "/userId" -> GET
        axios.get(USER_URL + "/" + userId).then(({data})=> {
            //cap nhat state
            setUser(data);
        });
    }, []);
    console.log('user...', user);

    //render ra UI
    return (
        <div>
            {user && (
                <div>
                    <h1>User Detail</h1>
                    <p>User ID: {user.id}</p>
                    <p>EMAIL: {user?.email}</p>
                    <p>Full_Name: {user?.fullname}</p>
                    <p>User_Name: {user?.username}</p>
                    <p>Gender: {user?.gender}</p>
                    <p>DoB: {user?.dob}</p>
                </div>
            )}
        </div>
    );
}

export default User;