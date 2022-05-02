import React from "react";
import HeroSelect from "../Heroes";
import "./Modal.css";

export const Modal = ({ onClose, setCurrentHero, setCurrentHP, setCurrentST }) => {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> </h3>
        <HeroSelect

          heroes={setCurrentHero}
          currentHero={setCurrentHP}
          currentHP={setCurrentHP}
          currentST={setCurrentST}
        />
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};
