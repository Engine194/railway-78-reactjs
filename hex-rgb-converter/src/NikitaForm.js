import { useContext } from "react";
import "./NikitaForm.style.css";
import UserInfomation from "./UserInfomation";
import { UserFormContext } from "./App";
import UserAuthentication from "./UserAuthentication";

const NikitaForm = () => {
  const {
    api: { handleSubmit },
  } = useContext(UserFormContext);

  return (
    <div className="nikita-form-container">
      <h1>Register new user</h1>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-col form-col-left">
          <UserInfomation />
        </div>
        <div className="divider"></div>
        <div className="form-col form-col-right">
          <UserAuthentication />
        </div>
      </form>
    </div>
  );
};

export default NikitaForm;
