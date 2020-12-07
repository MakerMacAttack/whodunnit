import React from "react";
import { useHistory } from "react-router-dom";
import "./Win.css";

export default function Win({ getSuspects }) {
  const history = useHistory();

  function handleReset() {
    getSuspects();
    history.push("/");
  }

  return (
    <div>
      <h1>You win!</h1>
      <p>No criminal is safe while you're on the case.</p>
      <p>Try again?</p>
      <button className="create" onClick={handleReset}>
        Play again
      </button>
    </div>
  );
}
