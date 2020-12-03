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
      <p>Got it</p>
    </div>
  );
}
