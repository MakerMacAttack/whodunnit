import React from "react";
import "./Lose.css";

export default function Lose({ setGameState }) {
  function handleReset() {
    setGameState({});
  }

  return (
    <div>
      <h1>You lose!</h1>
      <p>Looks like it's a great day to be a killer.</p>
      <p>Try your luck again?</p>
      <button onClick={handleReset}>Play Again</button>
    </div>
  );
}
