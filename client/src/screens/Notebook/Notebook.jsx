import React from "react";
import Note from "../../components/Note/Note";
import NoteCreate from "../../components/NoteCreate/NoteCreate";
import "./Notebook.css";

export default function Notebook({ notes, trigger, currentUser }) {
  return (
    <div>
      {notes.map((note, idx) => (
        <Note key={idx} note={note} />
      ))}
      <NoteCreate trigger={trigger} currentUser={currentUser} />
    </div>
  );
}
