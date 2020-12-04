import React from "react";
import ReactDOM from "react-dom";
import "./AlibiCheck.css";

const AlibiCheck = ({ isShowing, hide, check }) =>
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
                {check
                  ? "The alibi checks out. This isn't the murderer!"
                  : "Caught in a lie! But that doesn't make them a killer..."}
              </p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default AlibiCheck;
