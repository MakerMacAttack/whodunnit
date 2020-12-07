import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../services/auth";
// import { handleChange } from "../../services/forms";
import "./SignUp.css";

export default function SignUp({ setCurrentUser }) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        try {
          handleRegister(formData);
        } catch (error) {
          console.log("error type: ", typeof error);
        }
      }}
    >
      <h3>Register</h3>
      <label>
        Username:
        <br />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <span>Password:</span>
        <br />
        <span id="password">(password must be min 6 characters)</span>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="user-button">Submit</button>
    </form>
  );
}
