import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const { userId } = useParams();
    const [users, setUser] = useState();

    const USER_URL = process.env.REACT_APP_USER_API_URL;

    useEffect(() => {
        axios.get(USER_URL + "/" + userId).then(({ data }) => {
            setUser(data);
        })
    }, [])

    console.log('user...', userId);

    return (
        <div>
            <h1>User Detail</h1>
            {users && (
                <div>
                    <p>Fullname: ${users?.fullname}</p>
                    <p>Email: ${users?.email}</p>
                    <p>Username: ${users?.username}</p>
                    <p>Gender: ${users?.gender}</p>
                    <p>Date Of Birth: ${users?.dob}</p>
                    <p>Favorite: ${users?.favorite}</p>
                </div>
            )}

        </div>
    );
};

export default User;