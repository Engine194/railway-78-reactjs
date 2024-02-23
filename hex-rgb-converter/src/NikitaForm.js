import "./NikitaForm.style.css";
import UserInfomation from "./UserInfomation";

const NikitaForm = (props) => {
  const {
    fullName,
    gender,
    email,
    username,
    password,
    confirmPassword,
    dateOfBirth,
    phoneNumber,
    api: {
      setFullName,
      setEmail,
      setUsername,
      setPassword,
      setConfirmPassword,
      setDateOfBirth,
      setPhoneNumber,
      onChangeHandlerFactory,
      handleChangeGender,
      handleSubmit,
    }
  } = props || {};

  return (
    <div className="nikita-form-container">
      <h1>Register new user</h1>
      <form onSubmit={handleSubmit} className="form-row">
        <div className="form-col form-col-left">
          <UserInfomation
            {...{
              fullName,
              email,
              phoneNumber,
              gender,
              dateOfBirth,
              api: {
                onChangeHandlerFactory,
                setFullName,
                setEmail,
                setPhoneNumber,
                handleChangeGender,
                setDateOfBirth,
              }
            }}
          />
        </div>
        <div className="divider"></div>
        <div className="form-col form-col-right">
          <h2>Authentication</h2>
          <div className="sub-form">
            <div className="form-control">
              <input
                type="text"
                value={username.value}
                onChange={onChangeHandlerFactory(setUsername)}
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                value={password.value}
                onChange={onChangeHandlerFactory(setPassword)}
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                value={confirmPassword.value}
                onChange={onChangeHandlerFactory(setConfirmPassword)}
                name="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="form-actions">
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NikitaForm;
