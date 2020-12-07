import React from "react";
import "./NoteSuspect.css";

export default function NoteSuspect({ suspect, setThisNote, thisNote }) {
  return (
    <div>
      <p>{suspect.name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect1_clear: !prevState.suspect1_clear,
          }))
        }
      >
        {thisNote.suspect1_clear ? "Cleared" : "Kinda Sus"}
      </button>
    </div>
  );
}
