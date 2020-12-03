import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NoteCreate from "../../components/NoteCreate/NoteCreate";
import { getAllNotes } from "../../services/notes";
import Notebook from "./../../screens/Notebook/Notebook";
import NoteDetail from "./../../screens/NoteDetail/NoteDetail";

export default function NotesContainer(props) {
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle] = useState(true);
  async function getNotes() {
    const pages = await getAllNotes(); // or better yet make this a command to only get the notes of the current user
    // filter pages down to just the current user's notes
    setNotes(pages);
  }
  useEffect(() => {
    getNotes();
  }, [toggle]);
  return (
    <div>
      <Switch>
        <Route path="/notes/:id">
          <NoteDetail />
        </Route>
        <Route path="/notes">
          <Notebook trigger={setToggle} notes={notes} />
        </Route>
      </Switch>
    </div>
  );
}
