import React from "react";
import { Link } from "react-router-dom";

export default function UserItem(props) {
  const {data, openModal, openDelete} = props;
  const { id, fullname, username, email, birthDate, gender, favorite } = data

  return (
    <tr>
      <td><Link to={"/user-list/" + id} >{id}</Link></td>
      <td>{fullname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{favorite}</td>
      
      <td>
        <div>
          <button type="button" onClick={openModal}>edit</button>
          {"|"}
          <button type="button" onClick={openDelete}>delete</button>
        </div>
      </td>
    </tr>
  );
}
