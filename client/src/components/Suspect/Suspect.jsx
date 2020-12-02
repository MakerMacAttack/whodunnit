import React from "react";
import { Link } from "react-router-dom";
import "./Suspect.css";

export default function Suspect({ suspect }) {
  return (
    <div>
      <h3>Click a button to examine an individual suspect.</h3>
      <Link to={`/suspects/${suspect.id}`}>
        <button>{suspect.name}</button>
      </Link>
    </div>
  );
}
