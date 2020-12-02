import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  const history = useHistory();

  return (
    <div id="home">
      <button onClick={() => history.push("/forensics")}>Inspect</button>
      <button onClick={() => history.push("/suspects")}>Interview</button>
    </div>
  );
}
