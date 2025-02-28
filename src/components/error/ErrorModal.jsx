import React from "react";
import "../error/error.css";
const ErrorModal = ({ setErrorModal, error }) => {
  return (
    <div className="modal-overlay-closed">
      <p className="modal-closed">{error.message}</p>
    </div>
  );
};

export default ErrorModal;
