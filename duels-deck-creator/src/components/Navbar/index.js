import React, { useState } from "react";
import "./Navbar.css";
// import HeroDefault from "../../Images/Defaults/Hero_Default.webp";
import HeroPowerDefault from "../../Images/Defaults/HeroPower_Default.webp";
import CardBackDefault from "../../Images/Defaults/card-back-default.png";
import { HeroModal } from "../HeroModal";


export const Navbar = ({ heroes, currentHero, setCurrentHero }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentHP, setCurrentHP] = useState(currentHero.heroPower);

  const handleChange = (event) => {
    setCurrentHP(event.target.value);
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
          <select value={currentHP} onChange={handleChange}>
            <option value={currentHero.hpSelect.option1}>{currentHero.hpSelect.name1}</option>
            <option value={currentHero.hpSelect.option2}>{currentHero.hpSelect.name2}</option>
            <option value={currentHero.hpSelect.option3}>{currentHero.hpSelect.name3}</option>
          </select>
          <img
            className="navST"
            src={CardBackDefault}
            alt="Signature Treasure Select"
          />
        </div>
      </div>
    </div>
  );
};
