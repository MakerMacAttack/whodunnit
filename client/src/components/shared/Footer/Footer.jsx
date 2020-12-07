import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div id="footer">
      <div id="foot-content">
        <p>Tech Media Management &trade;</p>
        <div className="foot-button">
          <a
            href="https://github.com/MakerMacAttack/whodunnit"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
          <a
            href="https://www.linkedin.com/in/mac-may/"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
}
