import React from "react";
import useModal from "../../services/useModal";
import WeaponType from "../WeaponType/WeaponType";
import "./WeaponTypeCheck.css";

export default function WeaponTypeCheck({ quality }) {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      <WeaponType isShowing={isShowing} hide={toggle} quality={quality} />
      <button onClick={toggle}>Check size of wound</button>
    </div>
  );
}
