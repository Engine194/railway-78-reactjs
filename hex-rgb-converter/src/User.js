import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  console.log("userId", userId);
  const [user, setUser] = useState();

  useEffect(() => {
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    axios.get(USER_URL + "/" + userId).then(({ data }) => {
      setUser(data);
    });
  }, []);

  return;
  <div>
    <h1>User detail</h1>
    <div>
      <p>Fullname: {user?.fullname}</p>
      <p>Email: {user?.email}</p>
      <p>Username: {user?.username}</p>
      <p>Gender: {user?.gander}</p>
      <p>Date of birth: {user?.dob}</p>
      <p>Favorite:{user?.favorite} </p>
    </div>
  </div>;
};

export default User;
