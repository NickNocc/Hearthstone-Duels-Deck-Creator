import React from "react";
import HeroSelect from "../Heroes";
import "./Modal.css";

export const Modal = ({ onClose, heroes, setHeroes }) => {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> </h3>
        {/* <HeroSelect onClose={onClose} /> */}
        <HeroSelect heroes={heroes} onClose={onClose} setHeroes={setHeroes} />
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};
