import axios from "axios";
import { useState } from "react";
import "../styles/delete.css";

const ComfirmDelete = (props) => {
  const [loading, setLoading] = useState(false);
  const { data, removeUser, closeModal } = props;

  const handleDelete = () => {
    setLoading(true);
    const USER_URL = process.env.REACT_APP_USER_API_URL;
    axios
      .delete(`${USER_URL}/${data.id}`)
      .then(({ data }) => {
        removeUser(data);
        closeModal();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={`root ${loading ? "loading" : ""}`}>
      <h2>Are you sure to delete{data.email}?</h2>
      <div className={"formAction"}>
        <button onClick={closeModal} disabled={loading}>
          Cancle
        </button>
        <button onClick={handleDelete} disabled={loading}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ComfirmDelete;
