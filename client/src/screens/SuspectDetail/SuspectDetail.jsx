import React from "react";
import { useParams } from "react-router-dom";
import "./SuspectDetail.css";

export default function SuspectDetail({ suspects }) {
  const { id } = useParams();
  const subject = suspects.find((suspect) => suspect.id === Number(id));
  console.log(subject);
  return (
    <div>
      <p>Name: {subject && subject.name}</p>
      <p>Weapon: {subject && subject.weapon.name}</p>
      <p>Alibi: {subject && subject.alibi.content}</p>
      <button>Check Alibi</button>
      <button>ACCUSE!</button>
    </div>
  );
}
