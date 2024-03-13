import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
const User = () => {
    const {userId} = useParams();
    const {searchParams} = useSearchParams();
    console.log('params...', userId, searchParams.get('gender'));
    // tạo ra state de lay data cua user detail
    const [user, setUset] = useState();

    // dung useEffect de goi API
    useEffect (()=>{
        // Goi API USER_URL = process.env.REACT_APP_USER_API_URL
        const USER_URL = process.env.REACT_APP_USER_API_URL;
        // USER_DETAIL_URL = USER_URL + "/userId" -> GET 
        axios.get(`${USER_URL}/${userId}`)
        .then(({data})=>{
            // cap nhat state
            setUset(data);
        })
    }, []);

    console.log('user...', user);
    // render ra UI     
  return (
    <div>
        <h1>User Detail</h1>
        <div>
            <p>Email:{user?.email}</p>
            <p>Fullname:{user?.fullname}</p>
            <p>Username:{user?.username}</p>
            <p>Gender:{user?.gender}</p>
            <p>Date of birth:{user?.dob}</p>
            <p>favorite:{user?.favorite}</p>
        </div>
    </div>
  )
}

export default User