import React, { useEffect } from "react";
import Note from "../../components/Note/Note";
import NoteCreate from "../../components/NoteCreate/NoteCreate";
import "./Notebook.css";

export default function Notebook({ notes, trigger, currentUser }) {
  useEffect(() => {
    trigger((prevState) => !prevState);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="notebook">
      {notes.map((note, idx) => (
        <Note key={idx} note={note} />
      ))}
      <NoteCreate trigger={trigger} currentUser={currentUser} />
    </div>
  );
}

// notes.length === 0 ? (
// <h1>Notebook Loading...</h1>
// ) :
