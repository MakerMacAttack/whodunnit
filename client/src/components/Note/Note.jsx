import React from "react";
import { Link } from "react-router-dom";

export default function Note({ note }) {
  return (
    <div>
      <Link to={`/notes/${note.id}`}>
        <button>{note && `Note #${note.id}`}</button>
      </Link>
    </div>
  );
}
