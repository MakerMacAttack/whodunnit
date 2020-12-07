import React from "react";
import { useHistory } from "react-router-dom";
import "./Lose.css";

export default function Lose({ getSuspects }) {
  const history = useHistory();

  function handleReset() {
    getSuspects();
    history.push("/");
  }

  return (
    <div>
      <h1>You lose!</h1>
      <p>Looks like it's a great day to be a killer.</p>
      <p>Try your luck again?</p>
      <button className="create" onClick={handleReset}>
        Play Again
      </button>
    </div>
  );
}
