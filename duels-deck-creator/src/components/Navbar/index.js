import React, { useState } from "react";
import "./Navbar.css";
import { HeroModal } from "../HeroModal";


export const Navbar = ({ heroes, currentHero, setCurrentHero }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentHP, setCurrentHP] = useState(currentHero.heroPower);
  const [currentST, setCurrentST] = useState(currentHero.sigTreasure)

  const handleChangeHP = (event) => {
    setCurrentHP(event.target.value);
  };
  const handleChangeST = (event) => {
    setCurrentST(event.target.value);
  };
  // console.log("Navbar current: ", currentHero);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
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
          <img
            className="navHP"
            src={currentHP}
            alt="Hero Power Select"
          />
          <select value={currentHP} onChange={handleChangeHP}>
            <option value={currentHero.hpSelect.option1}>{currentHero.hpSelect.name1}</option>
            <option value={currentHero.hpSelect.option2}>{currentHero.hpSelect.name2}</option>
            <option value={currentHero.hpSelect.option3}>{currentHero.hpSelect.name3}</option>
          </select>
          <img
            className="navST"
            src={currentST}
            alt="Signature Treasure Select"
          />
          <select value={currentHP} onChange={handleChangeST}>
            <option value={currentHero.stSelect.option1}>{currentHero.stSelect.name1}</option>
            <option value={currentHero.stSelect.option2}>{currentHero.stSelect.name2}</option>
            <option value={currentHero.stSelect.option3}>{currentHero.stSelect.name3}</option>
            <option value={currentHero.stSelect.option4}>{currentHero.stSelect.name4}</option>
            <option value={currentHero.stSelect.option5}>{currentHero.stSelect.name5}</option>
            <option value={currentHero.stSelect.option6}>{currentHero.stSelect.name6}</option>
          </select>
        </div>
      </div>
    </div>
  );
};
