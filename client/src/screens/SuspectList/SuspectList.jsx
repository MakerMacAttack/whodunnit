import React from "react";
import Suspect from "../../components/Suspect/Suspect";
import "./SuspectList.css";

export default function SuspectList({ currentGame }) {
  return (
    <div>
      <h3>Click a button to examine an individual suspect.</h3>
      {currentGame.map((suspect, idx) => (
        <Suspect key={idx} suspect={suspect} />
      ))}
    </div>
  );
}
