import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <div id="navbar">
      <button>Home</button>
      <button className="button-default" onClick={props.toggle}>
        Instructions
      </button>
      <button>Notebook</button>
    </div>
  );
}
