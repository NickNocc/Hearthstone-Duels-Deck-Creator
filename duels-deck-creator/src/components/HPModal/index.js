import React from "react";
import HPSelect from "../HPSelect";
import "./Modal.css";

export const HPModal = ({
  onClose,
  currentHero,
  currentHeroPower,
  setCurrentHeroPower,
}) => {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle"> </h3>
        <HPSelect
          currentHero={currentHero}
          onClose={onClose}
          currentHeroPower={currentHeroPower}
          setCurrentHeroPower={setCurrentHeroPower}
        />
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};
