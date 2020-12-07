import React from "react";
import { Link, useHistory } from "react-router-dom";
import { removeToken } from "../../../services/auth";
import "./NavBar.css";

export default function NavBar({ currentUser, setCurrentUser, toggle }) {
  const history = useHistory();

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  return (
    <div id="navbar">
      <div id="head-button-box">
        <button className="header-button">
          <Link to={currentUser === null ? "/login" : "/"}>Home</Link>
        </button>
        <button className="header-button" onClick={toggle}>
          Instructions
        </button>
        <button className="header-button">
          <Link to={"/notes"}>Notebook</Link>
        </button>
        <button className="header-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
