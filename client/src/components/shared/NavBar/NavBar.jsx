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
      <Link to={currentUser === null ? "/login" : "/"}>
        <button>Home</button>
      </Link>
      <button className="button-default" onClick={toggle}>
        Instructions
      </button>
      <Link to={"/notes"}>
        <button>Notebook</button>
      </Link>
      <button className="button-default" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
