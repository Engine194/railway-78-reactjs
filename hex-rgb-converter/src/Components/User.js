import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import "../styles/App.css";


const User = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();

  console.log("userId...", userId, searchParams.get('gender'));
  // tao ta state de lay data cua user detail
  const [user, setUser] = useState();
  // dung useEffect de goi API
  useEffect(() => {
    // Goi API USER_URL = process.env.REACT_APP_USER_API_URL
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    // USER_DETAIL_URL = USER_URL + "/userId" -> GET
    axios.get(USER_URL + "/" + userId).then(({ data }) => {
      // cap nhat state
      setUser(data);
    });
  }, []);
  // render ra UI
  return (
    <>
    <Menu />
    <div className="user-detail">
      <h1>User detail</h1>
      <div>
        <p>Fullname: {user?.fullname}</p>
        <p>Email: {user?.email}</p>
        <p>Username: {user?.username}</p>
        <p>Gender: {user?.gender}</p>
        <p>Date of birth: {user?.dob}</p>
        <p>Favorite: {user?.favorite}</p>

      </div>
    </div>
        <footer className="footer-user-detail">Welcome to User Detail</footer>
    </>
  );
};

export default User;
