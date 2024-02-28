import React from "react";

export default function UserItem(props) {
  const {
    data: { id, fullname, username, email, birthDate, gender, favorite },
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{fullname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{favorite}</td>
    </tr>
  );
}
