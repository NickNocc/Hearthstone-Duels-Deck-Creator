import React from "react";
import HPSelect from "../HeroSelect";
import "./Modal.css";

export const HpModal = ({ onClose, heroes, setCurrentHero }) => {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> </h3>
        {/* <HeroSelect onClose={onClose} /> */}
        <HPSelect heroes={heroes} onClose={onClose} setCurrentHero={setCurrentHero} />
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};
