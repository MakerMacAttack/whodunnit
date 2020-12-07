import React from "react";
import ReactDOM from "react-dom";
import "./Weapon.css";

const WeaponDetail = ({ isShowing, hide, quality, options }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>
                The wound indicates that the weapon must have been{" "}
                {quality ? options[1] : options[2]}.
              </p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default WeaponDetail;
