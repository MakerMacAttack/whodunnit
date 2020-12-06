import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  return (
    <div id="home">
      <Link to={"/forensics"}>
        <button className="home-button">Inspect</button>
      </Link>
      <Link to={"/suspects"}>
        <button className="home-button">Interview</button>
      </Link>
    </div>
  );
}
