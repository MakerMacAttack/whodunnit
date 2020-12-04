import React from "react";
import { postNote } from "../../services/notes";

export default function NoteCreate({ trigger, currentUser }) {
  async function handleClick() {
    await postNote({
      weapon_sharp: null,
      weapon_large: null,
      suspect1_clear: null,
      suspect2_clear: null,
      suspect3_clear: null,
      suspect4_clear: null,
      suspect5_clear: null,
      suspect6_clear: null,
      suspect7_clear: null,
      suspect8_clear: null,
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
