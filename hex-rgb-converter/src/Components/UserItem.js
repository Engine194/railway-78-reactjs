import React from "react";
import { Link } from "react-router-dom";

export default function UserItem(props) {
    const { data, openModal, openDelete} = props;
    const { id, fullname, username, email, birthDate, gender, favorite }= data;

  return (
  
    <tr>
      <td> 
         <Link to={`/user-list/${id}?gender=${gender}`}> {id} </Link>
      </td>
      <td><Link to= {`/user-list/${email}`}>{email}</Link></td>
      <td><Link to= {`/user-list/${fullname}`}>{fullname}</Link></td>
      <td><Link to= {`/user-list/${username}`}>{username}</Link></td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{favorite}</td>
      <td>
        <div>
          <button type="button" onClick={openModal}>Edit</button>
            
          <button type="button" onClick={openDelete} >Delete</button>
        </div>
      </td>
    </tr>
  );
}
