import React from "react";
import ReactDOM from "react-dom";
import "./WeaponDetail.css";

const WeaponDetail = ({ isShowing, hide, quality }) =>
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
                The wound indicates that the weapon must have been {quality}
              </p>{" "}
              {/* This prolly isn't gonna render how I want. */}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default WeaponDetail;
