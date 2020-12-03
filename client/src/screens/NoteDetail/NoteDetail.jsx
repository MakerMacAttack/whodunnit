import React from "react";
import { useParams } from "react-router-dom";
import "./NoteDetail.css";

export default function NoteDetail({ notes }) {
  const { id } = useParams();
  const page = notes.find((note) => note.id === Number(id));
  return page === undefined ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <p>Weapons Size:</p>
      <p>{page.weapon_large ? "Large" : "Small"}</p>
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
