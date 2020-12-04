import React from "react";
import { postNote } from "../../services/notes";

export default function NoteCreate({ trigger, currentUser }) {
  async function handleClick() {
    await postNote({
      weapon_sharp: 0,
      weapon_large: 0,
      suspect1_clear: false,
      suspect2_clear: false,
      suspect3_clear: false,
      suspect4_clear: false,
      suspect5_clear: false,
      suspect6_clear: false,
      suspect7_clear: false,
      suspect8_clear: false,
      user_id: currentUser.id,
    });
    trigger((prevState) => !prevState);
  }
  return (
    <div>
      <button onClick={handleClick}>New note</button>
    </div>
  );
}
