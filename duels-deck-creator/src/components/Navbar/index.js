import React, { useState } from "react";
import "./Navbar.css";
import { HeroModal } from "../HeroModal";

export const Navbar = ({ heroes, currentHero, setCurrentHero }) => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State that controls what hero power is selected
  const [currentHP, setCurrentHP] = useState(currentHero.heroPower);

  // State that controls what signature treasure is selected
  const [currentST, setCurrentST] = useState(currentHero.sigTreasure);

  // Function that sets current hero power
  const handleChangeHP = (event) => {
    setCurrentHP(event.target.value);
  };

  // Function that sets current signature treasure
  const handleChangeST = (event) => {
    setCurrentST(event.target.value);
  };

  // Function in charge of toggling modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Displays hero modal */}
      {isModalOpen && (
        <HeroModal
          onClose={toggleModal}
          heroes={heroes}
          setCurrentHero={setCurrentHero}
        />
      )}

      <div className="navWrapper">
        <div className="navMain">
          <img
            className="navHero"
            src={currentHero.heroPortrait}
            alt="Hero Select"
            onClick={toggleModal}
          />
          <img className="navHP" src={currentHP} alt="Hero Power Select" />
          {/* Hero power selection */}
          <select
            className="hpSelect"
            value={currentHP}
            onChange={handleChangeHP}
          >
            <option value={currentHero.hpSelect.option1}>
              {currentHero.hpSelect.name1}
            </option>
            <option value={currentHero.hpSelect.option2}>
              {currentHero.hpSelect.name2}
            </option>
            <option value={currentHero.hpSelect.option3}>
              {currentHero.hpSelect.name3}
            </option>
          </select>
          <img
            className="navST"
            src={currentST}
            alt="Signature Treasure Select"
          />
          {/* Signature treasure selection */}
          <select value={currentHP} onChange={handleChangeST} className="stSelect">
            <option value={currentHero.stSelect.option1}>
              {currentHero.stSelect.name1}
            </option>
            <option value={currentHero.stSelect.option2}>
              {currentHero.stSelect.name2}
            </option>
            <option value={currentHero.stSelect.option3}>
              {currentHero.stSelect.name3}
            </option>
            <option value={currentHero.stSelect.option4}>
              {currentHero.stSelect.name4}
            </option>
            <option value={currentHero.stSelect.option5}>
              {currentHero.stSelect.name5}
            </option>
            <option value={currentHero.stSelect.option6}>
              {currentHero.stSelect.name6}
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};
