import React from "react";
import { useParams } from "react-router-dom";
import "./SuspectDetail.css";

export default function SuspectDetail({ suspects }) {
  const { id } = useParams();
  const placeholder = suspects.find((suspect) => suspect.id === Number(id));
  // console.log(placeholder);
  return (
    <div>
      {/* <p>{name}</p>
      <p>Weapon: {placeholder.weapon.name}</p>
      <p>Alibi: {placeholder.alibi.content}</p> */}
    </div>
  );
}
