import React from "react";
import WeapondDetail from "../../components/WeaponDetail/WeaponDetail";
import useModal from "../../services/useModal";
import "./Forensics.css";

export default function Forensics(props) {
  const quality = "test string";
  const { isShowing, toggle } = useModal();
  return (
    <div id="forensics">
      <WeapondDetail isShowing={isShowing} hide={toggle} quality={quality} />
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
