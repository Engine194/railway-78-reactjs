import axios from 'axios';
import React, { useState } from 'react'
import '../styles/delete.css';

const ConfirmDelete = (props) => {
    const [loading, setLoading] = useState(false);
    const {data, removeUser, closeModal} = props;

    const handleDelete = () => {
        setLoading(true);
        const USER_URL = process.env.REACT_APP_USER_API_URL;
        axios
            .delete(USER_URL + '/' + data.id)
            .then(({data}) => {
                removeUser(data);
                closeModal();
            })
            .finally(() => {
                setLoading(false);
            });
    };
    return (
        <div className={`root ${loading ? loading : ''}`}>
            <p>Are u sure to delete user: {data.email}?</p>
            <div className={'formActions'}>
                <button onClick={closeModal} disabled={loading}>Cancle</button>
                <button onClick={handleDelete} disabled={loading}>OK</button>
            </div>
        </div>
    )
}

export default ConfirmDelete