import React from "react";
import { Link } from "react-router-dom";
import "./Suspect.css";

export default function Suspect({ suspect }) {
  return (
    <div>
      <Link to={`/suspects/${suspect.id}`}>
        <button className="suspect-button">{suspect.name}</button>
      </Link>
    </div>
  );
}
