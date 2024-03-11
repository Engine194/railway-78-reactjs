import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { User } from "../model/user";
import UserItem from "./UserItem";
import Menu from "./Menu";
import Modal from "./Modal";
import UserForm from "./UserForm";

const initialShowModal = {
  open: false,
  data: null,
}

export default function UserList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [showModal, setShowModal] = useState(initialShowModal)
  const [loading, setLoading] = useState(true);

  const pushUser = (newUser)=>{
    setData(prev=>[...prev, newUser]);
  }

  const fetchData = async () => {
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    if (USER_URL) {
      setLoading(true);
      try {
        const result = await fetch(USER_URL).then((res) => res.json());
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCloseModal = ()=> setShowModal((prev =>{
    return {
      ...prev,
      open: false,
    }
  }))

  const handleOpenModal = (data)=>{
   return (event)=>{
    setShowModal({
      open: true,
      data,
    })
   }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <h1>Something went wrong! =\</h1>;
  } else if (loading) {
    return <Loading />;
  } else if (data?.length > 0) {
    return (
      <>
      <Menu/>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
            <th>BirthDate</th>
            <th>Gender</th>
            <th>Favorite</th>
            <th>Actions {"|"}<button type="button" onClick={handleOpenModal(null)}>new</button></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            const current = new User(user);
            return <UserItem key={index} data={current} />;
          })}
        </tbody>
      </table>
      <Modal
        open = {showModal.open}
        closeModal={handleCloseModal}
        title = {showModal.data?.id? "Edit user" : "Create user"}
       >
       <UserForm 
       data= {showModal.data}
        pushUser = {pushUser}
         closeModal ={handleCloseModal}/>
      </Modal>
      </>
    );
  } else {
    return null;
  }
}
