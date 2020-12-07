import React from "react";
import useModal from "../../services/useModal";
import Weapon from "../Weapon/Weapon";
import "./WeaponCheck.css";

export default function WeaponSizeCheck({ quality, options }) {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      <Weapon
        isShowing={isShowing}
        hide={toggle}
        quality={quality}
        options={options}
      />
      <button className="home-button" onClick={toggle}>
        Check {options[0]} of wound.
      </button>
    </div>
  );
}
