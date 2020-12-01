import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/forensics")}>Investigate</button>
      <button onClick={() => history.push("/suspects")}>Interview</button>
    </div>
  );
}
