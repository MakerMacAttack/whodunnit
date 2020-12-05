import React from "react";
import { Link, useParams } from "react-router-dom";
import useModal from "../../services/useModal";
import AlibiCheck from "../../components/AlibiCheck/AlibiCheck";
import "./SuspectDetail.css";

export default function SuspectDetail({ currentGame, guilty }) {
  const { isShowing, toggle } = useModal();
  const { id } = useParams();
  const subject = currentGame.find((suspect) => suspect.id === Number(id));
  return subject === undefined ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Link to="/suspects">
        <button>Back to suspects</button>
      </Link>
      <p>Name: {subject.name}</p>
      <p>Weapon: {subject.weapon.name}</p>
      <p>Alibi: {subject.alibi.content}</p>
      <button onClick={toggle}>Check Alibi</button>
      <AlibiCheck
        isShowing={isShowing}
        hide={toggle}
        check={subject.alibi.airtight}
      />
      <Link to={subject == guilty ? "/win" : "/lose"}>
        <button>ACCUSE!</button>
      </Link>
    </div>
  );
}
