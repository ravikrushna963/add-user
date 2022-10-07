import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errMsgName, setErrMsgName] = useState("");
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [errStatusName, setErrStatusName] = useState(false);
  const [errStatusEmail, setErrStatusEmail] = useState(false);
  const [result, setResult] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      setErrMsgName("*Required");
      setErrStatusName(true);
    } else {
      setErrMsgName("");
      setErrStatusName(false);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setErrMsgEmail("*Required");
      setErrStatusEmail(true);
    } else {
      setErrMsgEmail("");
      setErrStatusEmail(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrMsgName("*Required");
      setErrStatusName(true);
    } else {
      setErrMsgName("");
      setErrStatusName(false);
    }
    if (email === "") {
      setErrMsgEmail("*Required");
      setErrStatusEmail(true);
    } else {
      setErrMsgEmail("");
      setErrStatusEmail(false);
    }
    if (email !== "" && name !== "") {
      setResult("User added successfully..!!");
    } else {
      setResult();
    }
  };

  return (
    <div className="container p-5">
      <h1 className="heading mb-5">Add User</h1>
      <form id="addUserForm" className="form" onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="name" className="label">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            className="text"
            onChange={onChangeName}
            value={name}
          />
          <br />
          <p className="para" id="nameErrMsg">
            {errStatusName && errMsgName}
          </p>
        </div>
        <div className="mb-3">
          <label for="email" className="label">
            Email
          </label>
          <br />
          <input
            type="text"
            id="email"
            className="text"
            onChange={onChangeEmail}
            value={email}
          />
          <br />
          <p className="para" id="emailErrMsg">
            {errStatusEmail && errMsgEmail}
          </p>
        </div>
        <button className="btn btn-primary mt-2 button">Submit</button>
        <p className="result">{result}</p>
      </form>
    </div>
  );
}

export default App;

