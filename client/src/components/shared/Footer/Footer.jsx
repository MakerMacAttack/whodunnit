import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div id="footer">
      <p>Tech Media Management &trade;</p>
      <div className="foot-button">
        <button>GitHub</button>
        <button>LinkedIn</button>
      </div>
    </div>
  );
}
