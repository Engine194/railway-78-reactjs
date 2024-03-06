import React from "react";
import { Link } from "react-router-dom";

export default function UserItem(props) {
  const {
    data: { id, fullname, username, email, birthDate, gender, favorite },
  } = props;

  return (
    <tr>
      <td>
        <Link to={`/user-list/${id}`}>{id}</Link>
      </td>
      <td>{fullname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{favorite}</td>
    </tr>
  );
}
