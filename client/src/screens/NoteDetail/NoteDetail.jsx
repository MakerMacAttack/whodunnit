import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { putNote } from "../../services/notes";
import "./NoteDetail.css";

export default function NoteDetail({ notes }) {
  const [thisNote, setThisNote] = useState({});
  const { id } = useParams();

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
        className={thisNote.weapon_large ? "blue" : "grey"}
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            weapon_large: true,
          }))
        }
      >
        Large
      </button>
      <button
        className={thisNote.weapon_large ? "grey" : "blue"}
        onClick={() =>
          setThisNote((prevState) => ({
            ...prevState,
            weapon_large: false,
          }))
        }
      >
        Small
      </button>
      <p>Weapon Type:</p>
      <p>Suspect 1:</p>
      <p>Suspect 2:</p>
      <p>Suspect 3:</p>
      <p>Suspect 4:</p>
      <p>Suspect 5:</p>
      <p>Suspect 6:</p>
      <p>Suspect 7:</p>
      <p>Suspect 8:</p>
      <button>Delete Note</button>
    </div>
  );
}
