import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();

  console.log("userId...", userId, searchParams.get("gender"));

  // set state
  const [user, setUser] = useState();

  // call API
  useEffect(() => {
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    axios.get(`${USER_URL}/${userId}`).then(({ data }) => {
      setUser(data);
    });
  }, []);

  console.log("user...", user);

  // render UI
  return (
    <div>
      <h1>User Detail</h1>
      <div>
        {/* {user ? (
                <>
                    <p>Fullname: {user.fullname}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Favorite: {user.favorite}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Date Of Birth: {user.dob}</p>
                </>
            ) : null
            } */}

        <p>Fullname: {user?.fullname}</p>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.email}</p>
        <p>Favorite: {user?.favorite}</p>
        <p>Gender: {user?.gender}</p>
        <p>Date Of Birth: {user?.dob}</p>

        <footer style={{ backgroundColor: "red" }}>Footer</footer>
      </div>
    </div>
  );
};

export default User;
