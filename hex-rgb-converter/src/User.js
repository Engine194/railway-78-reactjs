import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const User = () => {
    const { userId } = useParams();
    console.log('userId...', userId);
    // tao ra state de lay data cua user detail
    const [user, setUser] = useState();

    // dung useEffect de goi API
    useEffect(() => {
        //goi API
        const USER_URL = process.env.REACT_APP_USER_API_URL;
        axios.get(USER_URL + '/' + userId).then(({data}) => {
            //cap nhat state
            setUser(data);
        })
    }, [])

    console.log('user...', user);

    //render ra UI
    return (
        <div>
            <h1>User detail</h1>
            <div>
                <p>Fullname: {user?.fullname}</p>
                <p>Gender: {user?.gender}</p>
                <p>Email: {user?.email}</p>
                <p>Date of birth: {user?.dob}</p>
                <p>Favorite: {user?.favorite}</p>
            </div>
        </div>
    )
}

export default User