import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../services/auth";
// import { handleChange } from "../../services/forms";
import "./Login.css";

export default function Login({ setCurrentUser }) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    // I don't think I can import handleChange for this reasons
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

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <h3>Login</h3>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Log in!</button>
      </form>
      <Link to="/signup">
        <button className="create">New User</button>
      </Link>
    </div>
  );
}
