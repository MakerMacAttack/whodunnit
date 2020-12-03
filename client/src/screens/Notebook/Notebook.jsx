import React from "react";
import Note from "../../components/Note/Note";
import "./Notebook.css";

export default function Notebook({ notes, trigger }) {
  return (
    <div>
      {notes.map((note, idx) => (
        <Note key={idx} note={note} />
      ))}
      <NoteCreate trigger={trigger} />
    </div>
  );
}
