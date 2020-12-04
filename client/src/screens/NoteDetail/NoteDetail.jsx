import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { destroyNote, putNote } from "../../services/notes";
import "./NoteDetail.css";

export default function NoteDetail({ notes, trigger }) {
  const [thisNote, setThisNote] = useState({});
  const { id } = useParams();
  const history = useHistory();

  function goBack() {
    history.push("/notes");
  }

  async function handleDelete() {
    await destroyNote(id);
    trigger((prevState) => !prevState);
    goBack();
  }

  useEffect(() => {
    const page = notes.find((note) => note.id === Number(id));
    if (page) {
      setThisNote(page);
    }
  }, []);

  return thisNote === undefined ? (
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
      <p>Suspect 1:</p>
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
      <p>Suspect 2:</p>
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
      <p>Suspect 3:</p>
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
      <p>Suspect 4:</p>
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
      <p>Suspect 5:</p>
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
      <p>Suspect 6:</p>
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
      <p>Suspect 7:</p>
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
      <p>Suspect 8:</p>
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
