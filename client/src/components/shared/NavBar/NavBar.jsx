import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <div id="navbar">
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <button className="button-default" onClick={props.toggle}>
        Instructions
      </button>
      <Link to={"/notes"}>
        <button>Notebook</button>
      </Link>
    </div>
  );
}
