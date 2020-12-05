import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllNotes } from "../../services/notes";
import Notebook from "./../../screens/Notebook/Notebook";
import NoteDetail from "./../../screens/NoteDetail/NoteDetail";

export default function NotesContainer({ currentUser, suspects }) {
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle] = useState(true);
  // Next time set up a helper function trigger that does the whole prevState of toggle and saves time.

  function pageSelect(book) {
    const pages = book.filter((page) => page.user_id === currentUser.id);
    setNotes(pages);
  }

  async function getNotes() {
    const wholeBook = await getAllNotes(); // or better yet make this a command to only get the notes of the current user
    // filter pages down to just the current user's notes
    pageSelect(wholeBook);
  }
  useEffect(() => {
    if (currentUser) {
      getNotes();
    }
    // eslint-disable-next-line
  }, [toggle]);

  return (
    <div>
      <Switch>
        <Route path="/notes/:id">
          <NoteDetail notes={notes} trigger={setToggle} suspects={suspects} />
        </Route>
        <Route path="/notes">
          <Notebook
            trigger={setToggle}
            notes={notes}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}
