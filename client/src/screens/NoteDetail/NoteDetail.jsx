import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { destroyNote, putNote } from "../../services/notes";
import "./NoteDetail.css";

export default function NoteDetail({ notes, trigger, suspects }) {
  const [thisNote, setThisNote] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  async function handleDelete() {
    await destroyNote(id);
    trigger((prevState) => !prevState);
    history.push("/notes");
  }

  useEffect(() => {
    const page = notes.find((note) => note.id === Number(id));
    if (page) {
      // need to destructure this better
      setThisNote({
        weapon_large: page.weapon_large,
        weapon_sharp: page.weapon_sharp,
        suspect1_clear: page.suspect1_clear,
        suspect2_clear: page.suspect2_clear,
        suspect3_clear: page.suspect3_clear,
        suspect4_clear: page.suspect4_clear,
        suspect5_clear: page.suspect5_clear,
        suspect6_clear: page.suspect6_clear,
        suspect7_clear: page.suspect7_clear,
        suspect8_clear: page.suspect8_clear,
      });
    }
    // eslint-disable-next-line
  }, []);

  async function editNote() {
    if (thisNote) {
      await putNote(id, thisNote);
    }
  }

  function launchTrigger() {
    trigger((prevState) => !prevState);
  }

  useEffect(() => {
    editNote();
    launchTrigger();
    // eslint-disable-next-line
  }, [thisNote]);

  return thisNote === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <p>Weapons Size:</p>
      <button
        className={thisNote.weapon_large === 1 ? "blue" : "grey"}
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            weapon_large: prevState.weapon_large === 1 ? 0 : 1,
          }))
        }
      >
        Large
      </button>
      <button
        className={thisNote.weapon_large === -1 ? "blue" : "grey"}
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            weapon_large: prevState.weapon_large === -1 ? 0 : -1,
          }))
        }
      >
        Small
      </button>
      <p>Weapon Type:</p>
      <button
        className={thisNote.weapon_sharp === 1 ? "blue" : "grey"}
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            weapon_sharp: prevState.weapon_sharp === 1 ? 0 : 1,
          }))
        }
      >
        Sharp
      </button>
      <button
        className={thisNote.weapon_sharp === -1 ? "blue" : "grey"}
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            weapon_sharp: prevState.weapon_sharp === -1 ? 0 : -1,
          }))
        }
      >
        Blunt
      </button>
      {/* Find a way to make the below a map */}
      <p>{suspects[0].name}:</p>
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
      <p>{suspects[1].name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect2_clear: !prevState.suspect2_clear,
          }))
        }
      >
        {thisNote.suspect2_clear ? "Cleared" : "Kinda Sus"}
      </button>
      <p>{suspects[2].name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect3_clear: !prevState.suspect3_clear,
          }))
        }
      >
        {thisNote.suspect3_clear ? "Cleared" : "Kinda Sus"}
      </button>
      <p>{suspects[3].name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect4_clear: !prevState.suspect4_clear,
          }))
        }
      >
        {thisNote.suspect4_clear ? "Cleared" : "Kinda Sus"}
      </button>
      <p>{suspects[4].name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect5_clear: !prevState.suspect5_clear,
          }))
        }
      >
        {thisNote.suspect5_clear ? "Cleared" : "Kinda Sus"}
      </button>
      <p>{suspects[5].name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect6_clear: !prevState.suspect6_clear,
          }))
        }
      >
        {thisNote.suspect6_clear ? "Cleared" : "Kinda Sus"}
      </button>
      <p>{suspects[6].name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect7_clear: !prevState.suspect7_clear,
          }))
        }
      >
        {thisNote.suspect7_clear ? "Cleared" : "Kinda Sus"}
      </button>
      <p>{suspects[7].name}:</p>
      <button
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            suspect8_clear: !prevState.suspect8_clear,
          }))
        }
      >
        {thisNote.suspect8_clear ? "Cleared" : "Kinda Sus"}
      </button>
      <button onClick={handleDelete}>Delete Note</button>
    </div>
  );
}
