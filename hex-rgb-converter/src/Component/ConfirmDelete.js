import axios from 'axios';
import React, { useState } from 'react';
import "./styles/delete.css"

const ConfirmDelete = (props) => {
    const [loading, setLoading] = useState(false);

    const {
        data,
        removeUser,
        closeModal
    } = props;

    const handleDelete = () => {
        const USER_URL = process.env.REACT_APP_USER_API_URL;
        axios.delete(USER_URL + "/" + data.id).then(({ data }) => {
            removeUser(data);
            closeModal()
        })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className={`root ${loading ? 'loading' : ''}`}>
            <h2>Are you sure to delete user: {data.email}?</h2>
            <div className='formActions'>
                <button type='button' onClick={closeModal} disabled={loading}>Cancel</button>
                <button type='button' onClick={handleDelete} disabled={loading}>OK</button>

            </div>
        </div>
    );
};

export default ConfirmDelete;