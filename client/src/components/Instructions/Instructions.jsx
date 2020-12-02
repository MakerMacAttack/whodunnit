import React from "react";
import ReactDOM from "react-dom";
import "./Instructions.css";

const Instructions = ({ isShowing, hide }) =>
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
                George Victim, of the Chesterfield Victims, is the victim of
                murder! It is your job to solve this crime.
              </p>
              <p>
                Inspect the body to learn what type of weapon it was. Each
                possible weapon has two sets of fingerprints on it, however, so
                you'll still have to find the killer.
              </p>
              <p>
                Alibis are like butt-holes; everyone has one and most of them
                stink. Interview the suspects and discover which of their alibis
                doesn't hold up. But people lie for many reasons, and just
                because their alibi doesn't hold up, doesn't mean they killed
                anyone.
              </p>
              <p>
                Once you find the person without an alibi whose fingerprints are
                on the weapon, accuse them. If you're right, you win! If not,
                you get to try again with a different murder of the same person
                with the same suspect pool! Isn't that fun?
              </p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Instructions;
