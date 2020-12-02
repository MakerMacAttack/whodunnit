import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  const history = useHistory();
  return (
    <div id="navbar">
      <button onClick={() => history.push("/")}>Home</button>
      <button className="button-default" onClick={props.toggle}>
        Instructions
      </button>
      <button>Notebook</button>
    </div>
  );
}
