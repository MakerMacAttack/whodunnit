import React from "react";
import WeaponSizeCheck from "../../components/WeaponSizeCheck/WeaponSizeCheck";
import WeaponTypeCheck from "../../components/WeaponTypeCheck/WeaponTypeCheck";
import "./Forensics.css";

export default function Forensics({ guilty }) {
  return guilty === null ? (
    <h1>Loading...</h1>
  ) : (
    <div id="forensics">
      <h3>
        By examining the wound, you can narrow down the type of weapon used to
        commit the foul deed.
      </h3>
      <WeaponSizeCheck quality={guilty.weapon.large} />
      <WeaponTypeCheck quality={guilty.weapon.sharp} />
    </div>
  );
}
