import { useContext } from "react";
import "./DuongForm.style.css";
import Userinformation from "./Userinformation";
import { UserFormContex } from "./App";
import UserAuthentication from "./UserAuthentication";

// const initialInputValue = { value: "", error: "" };

const DuongForm = () => {
  const {
    api: { handleSubmit },
  } = useContext(UserFormContex);
  return (
    <div className="Duong-form-container">
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-col form-col-left">
          <h2>User information</h2>
          <Userinformation />
        </div>
        <div className="diviver"></div>
        <div className="form-col form-col-right">
          <UserAuthentication />
        </div>
      </form>
    </div>
  );
};

export default DuongForm;
