import React from "react";
import "./Win.css";

export default function Win({ setGameState }) {
  function handleReset() {
    setGameState({});
  }

  return (
    <div>
      <h1>You win!</h1>
      <p>No criminal is safe while you're on the case.</p>
      <p>Try again?</p>
      <button onClick={handleReset}>Play again</button>
    </div>
  );
}
