import React, { useState } from "react";
import "./Navbar.css";
// import HeroDefault from "../../Images/Defaults/Hero_Default.webp";
import HeroPowerDefault from "../../Images/Defaults/HeroPower_Default.webp";
import CardBackDefault from "../../Images/Defaults/card-back-default.png";
import { HeroModal } from "../HeroModal";
import { HPModal } from "../HPModal";

export const Navbar = ({ heroes, currentHero, setCurrentHero }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenHP, setIsModalOpenHP] = useState(false);

  console.log("Navbar current: ",  currentHero);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModalHP = () => {
    setIsModalOpenHP(!isModalOpenHP);
  };

  return (
    <div>
      {isModalOpen && <HeroModal onClose={toggleModal} heroes={heroes} setCurrentHero={setCurrentHero} />}
      {isModalOpenHP && <HPModal onClose={toggleModalHP} currentHero={currentHero} setCurrentHero={setCurrentHero} />}

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
            src={HeroPowerDefault}
            alt="Hero Power Select"
            onClick={toggleModalHP}
          />
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
