import React from "react";
import HeroSelect from "../Heroes";

export const Modal = ({ onClose }) => {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> </h3>
        
        <HeroSelect />
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};
