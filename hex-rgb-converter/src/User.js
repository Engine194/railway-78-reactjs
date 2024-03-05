import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";

const User = () => {
  const { userId } = useParams();
  console.log("userId...", userId);

  //tao ra state de lay data cua user detail
  const [user, setUser] = useState();
  //dung useEffect de goi api
  useEffect(() => {
    // goi API USER_URL = process.env
    // USER_DETAIL_URL = USER_URL + "/userId" -> GET

    const USER_URL = process.env.REACT_APP_USER_API_URL;

    //   axios.get(`${USER_URL}/${userId}`);
    //cap nhat State
    axios.get(USER_URL + "/" + userId).then(({ data }) => {
      setUser(data);
    });
  }, []);
  console.log("user...", user);

  //render ra UI

  return (
    <>
    <Menu/>
    <div>
      <h1>User detail</h1>
      {/* {user ? (
        <>
        <p>
          <b>Fullname:</b> {user.fullname}
        </p>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>BirthDate:</b> {user.dob}
        </p>
        <p>
          <b>Gender:</b> {user.gender ? "Male" : "Female"}
        </p>
        <p>
          <b>Favorite:</b> {user.favorite}
        </p>
        </>
      ): null} */}
      <div>
        <p>
          <b>Fullname:</b> {user?.fullname}
        </p>
        <p>
          <b>Username:</b> {user?.username}
        </p>
        <p>
          <b>Email:</b> {user?.email}
        </p>
        <p>
          <b>BirthDate:</b> {user?.dob}
        </p>
        <p>
          <b>Gender:</b> {user?.gender ? "Male" : "Female"}
        </p>
        <p>
          <b>Favorite:</b> {user?.favorite}
        </p>
      </div>
    </div>
    </>
  );
};

export default User;
