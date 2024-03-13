import axios from 'axios';
import React, { useState } from 'react'
import "../styles/delete.css"

const ConfirmDelete = (props) => {
    const [loading, setLoading] = useState(false)
    const {data, removeUser, closeModal} = props; 
    const handleDelete = () => {
        setLoading(true)
        const USER_URL = process.env.REACT_APP_USER_API_URL;
        axios.delete(`${USER_URL}/${data.id}`).then(({data}) => {
          removeUser(data)
          closeModal()
        })
        .finally(() => {
          setLoading(false)
        })
      }

  return ( 
  <div className= {`root ${loading ? 'loading' : ''}`}>
    <h2>Are you sure to delete {data.email} ? </h2>
    <div>
      <button onClick={closeModal} disabled={loading} >Cancel</button>
      <button onClick={handleDelete} disabled={loading} >Ok</button>
    </div> 
    <div>ConfirmDelete</div>
    </div>
  )
}

export default ConfirmDelete