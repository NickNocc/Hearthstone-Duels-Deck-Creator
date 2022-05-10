import React from "react";
import HeroSelect from "../HeroSelect";
import "./Modal.css";

export const HeroModal = ({ onClose, heroes, setCurrentHero }) => {
  // Modal for selecting hero from list
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> </h3>
        <HeroSelect heroes={heroes} onClose={onClose} setCurrentHero={setCurrentHero} />
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};
