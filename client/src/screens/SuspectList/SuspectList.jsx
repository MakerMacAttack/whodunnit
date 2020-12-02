import React from "react";
import Suspect from "../../components/Suspect/Suspect";
import "./SuspectList.css";

export default function SuspectList({ suspects }) {
  return (
    <div>
      {suspects.map((suspect, idx) => (
        <Suspect key={idx} suspect={suspect} />
      ))}
    </div>
  );
}
