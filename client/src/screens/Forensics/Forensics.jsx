import React from "react";
import WeaponType from "../../components/WeaponType/WeaponType";
import useModal from "../../services/useModal";
import "./Forensics.css";

export default function Forensics({ gameState }) {
  const quality = "test string";
  const { isShowing, toggle } = useModal();
  return (
    <div id="forensics">
      <WeaponType
        isShowing={isShowing}
        hide={toggle}
        quality={gameState.killer.weapon}
      />
      {/* Find a way to pass along the specific quality  */}
      <h3>
        By examining the wound, you can narrow down the type of weapon used to
        commit the foul deed.
      </h3>
      <button onClick={toggle}>Check size of wound</button>
      <button onClick={toggle}>Check type of wound</button>
    </div>
  );
}
