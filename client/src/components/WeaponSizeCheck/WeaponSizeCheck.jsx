import React from "react";
import useModal from "../../services/useModal";
import WeaponSize from "../WeaponSize/WeaponSize";
import "./WeaponSizeCheck.css";

export default function WeaponSizeCheck({ quality }) {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      <WeaponSize isShowing={isShowing} hide={toggle} quality={quality} />
      <button onClick={toggle}>Check size of wound</button>
    </div>
  );
}
