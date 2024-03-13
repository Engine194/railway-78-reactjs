import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import Menu from "./Menu";
import { User } from "../model/user";
import UserItem from "./UserItem";
import Modal from "./Modal";
import UserForm from "./UserForm";
import { GENDER_TYPE } from "../utils";
import ConfirmDelete from "./ConfirmDelete";

const initialShowModal = {
  open: false,
  data: null,
}

export default function UserList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [showModal,setShowModal] = useState(initialShowModal);
  const [loading, setLoading] = useState(true);
  const [showDelete,setShowDelete] = useState(initialShowModal)

  const pushUser = (newUser) => {
    setData(prev => [...prev, newUser])
  }

  const updateUser = (updatedUser) => {
    setData((prev) => {
      return prev.map((item) => {
        if(item.id == updatedUser.id){
          return updatedUser
        }else{
          return item
        }
      })
    })
  }

  const removeUser = (deletedUser) => {
    setData((prev) => {
      return prev.filter((item) => {
        if(item.id == deletedUser.id){
          return false
        }else{
          return true
        }
      })
    })
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

  const handleCloseModal = () => setShowModal(prev => {
    return {
      ...prev,
      open:false,
    }
  })

  const handleCloseDelete = () => setShowDelete(prev => {
    return {
      ...prev,
      open:false,
    }
  })

  const handleOpenModal = (data) => {
    return(event) => {
      setShowModal({
        open:true,
        data,
      })
    }
  } 


  const handleOpenDelete = (data) => {
    return(event) => {
      setShowDelete({
        open:true,
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
            <th>Action{"|"} <button type="button" onClick={handleOpenModal(null)}>new</button></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => {
            const current = new User(user);
            const editingUser = {
              ...user,
              dob: user.dob.split("T")[0],
              gender: user.gender ? GENDER_TYPE.MALE : GENDER_TYPE.FEMALE
            }
            return <UserItem
             key={index}
             data={current}
             openModal = {handleOpenModal(editingUser)}
             openDelete = {handleOpenDelete(user)}/>;
          })}
        </tbody>
      </table>
      <Modal
      open={showModal.open}
      closeModal = {handleCloseModal}
      title={showModal.data?.id ? "Edit user" : "Create user"}
      >
        <UserForm data={showModal.data} 
                 pushUser = {pushUser}
                 updateUser = {updateUser}
                  closeModal = {handleCloseModal}/>
      </Modal>
      <Modal
       open={showDelete.open}
       closeModal = {handleCloseDelete}
       title = {"Confirm delete user"}
      >
        <ConfirmDelete
         data={showDelete.data}
         removeUser = {removeUser}
         closeModal = {handleCloseDelete}
         />
      </Modal>
      </>
    );
  } else {
    return null;
  }
}
