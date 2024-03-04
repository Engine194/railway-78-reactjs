import React from "react";
import { Link } from "react-router-dom";

export default function UserItem(props) {
  const {
    data: { id, fullname, username, email, birthDate, gender, favorite },
  } = props;

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
    </tr>
  );
}
