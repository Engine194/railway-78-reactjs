import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export const User = () => {
    const {userId} =useParams();
    console.log("userId...",userId);
    const [user, setUser] = useState();
    useEffect(()=>{
        const USER_URL = process.env.REACT_APP_USER_API_URL;
        axios.get(USER_URL+"/"+userId).then(({data})=>{
            setUser(data);
        })
    },[]);

  return (
    <div>
        <h1>User Detail</h1>
        <div>
            <p>Full name: {user?.fullname}</p>
            <p>Email: {user?.email}</p>
            <p>User name: {user?.username}</p>
            <p>Gender: {user?.gender}</p>
            <p>Date of birth: {user?.dob}</p>
            <p>Favorite: {user?.favorite}</p>
        </div>
    </div>
  )
}
