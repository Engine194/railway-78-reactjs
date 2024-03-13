import axios from 'axios';
import React, { useState } from 'react';
import "../Styles/Delete.css";

const ConfirmDelete = (props) => {
    const [Loading, setLoading] = useState(false);
    const {  data, removeUser, closeModal} = props;
    const handleDelete = ()=>{
        setLoading(true);
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    axios
    .delete( USER_URL + "/" + data.id)
        .then(({data})=>{
        removeUser(data);
        closeModal();
    })
    .finally(()=>{
        setLoading(false)
    });
}

  return (
    <div className={`root ${Loading ? 'loading': ''}`}>
        <p>Are you sure to delete user: {data.email}?</p>
        <div className={'formActions'}>
            <button  type='button' onClick={closeModal} disabled={Loading} >Cancel</button>
            <button  type='button' onClick={handleDelete} disabled={Loading} >OK</button>
        </div>
    </div>
  )
}

export default ConfirmDelete