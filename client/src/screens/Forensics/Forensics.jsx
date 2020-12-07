import React from "react";
import WeaponCheck from "../../components/WeaponCheck/WeaponCheck";
// import WeaponTypeCheck from "../../components/WeaponTypeCheck/WeaponTypeCheck";
import "./Forensics.css";

export default function Forensics({ guilty }) {
  const sharp = ["type", "sharp", "blunt"];
  const large = ["size", "large", "small"];

  return guilty === null ? (
    <h1>Loading...</h1>
  ) : (
    <div id="forensics">
      <h3>
        By examining the wound, you can narrow down the type of weapon used to
        commit the foul deed.
      </h3>
      <WeaponCheck quality={guilty.weapon.large} options={large} />
      <WeaponCheck quality={guilty.weapon.sharp} options={sharp} />
    </div>
  );
}
