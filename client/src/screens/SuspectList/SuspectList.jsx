import React, { useState } from "react";
import { getAllSuspects } from "../../services/suspects";
import "./SuspectList.css";

export default function SuspectList(props) {
  const [suspects, setSuspects] = useState(getAllSuspects);
  return (
    <div>
      <h1>hey it's the suspect list</h1>
    </div>
  );
}
