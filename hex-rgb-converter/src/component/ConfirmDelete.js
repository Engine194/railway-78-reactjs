import axios from 'axios';
import React, { useState } from 'react'

const ConfirmDelete = (props) => {
    const [loading, setLoading] = useState(false);
    const {data, removeUser, closeModal} = props;

    const handleDelete = () => {
        setLoading(true);
        const USER_URL = process.env.REACT_APP_USER_API_URL;
        axios
            .delete(USER_URL + '/' + data.id)
            .then((data) => {
                removeUser(data);
                closeModal();
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className=''>
            <h2>Are u sure to delete user: {data.email}?</h2>
            <div>
                <button onClick={closeModal} disabled={loading}>Cancle</button>
                <button onClick={handleDelete} disabled={loading}>OK</button>
            </div>
        </div>
    )
}

export default ConfirmDelete