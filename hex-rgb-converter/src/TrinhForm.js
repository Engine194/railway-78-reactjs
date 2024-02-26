import "./TrinhForm.style.css";
import UserInformation from "./UserInformation";
import Authentication from "./Authentication";
import { useContext } from "react";
import { UserFormContext } from "./App";

const TrinhForm = () => {
  const {
    api :{handleSubmit,clearForm}
  } = useContext(UserFormContext);

  return (
    <div className="trinh-form-container">
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-col form-col-left">
          <UserInformation/>
        </div>
        <div className="diviver"></div>
        <div className="form-col form-col-right">   
          <Authentication/>
          <div className="form-actions">
            <button onClick={clearForm} type="reset">Reset</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrinhForm;
