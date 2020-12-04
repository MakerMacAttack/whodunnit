import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  return (
    <div id="home">
      <Link to={"/forensics"}>
        <button>Inspect</button>
      </Link>
      <Link to={"/suspects"}>
        <button>Interview</button>
      </Link>
    </div>
  );
}
