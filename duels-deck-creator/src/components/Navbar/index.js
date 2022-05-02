import React, { useState } from "react";
import "./Navbar.css";
import HeroDefault from "../../Images/Defaults/Hero_Default.webp";
import HeroPowerDefault from "../../Images/Defaults/HeroPower_Default.webp";
import CardBackDefault from "../../Images/Defaults/card-back-default.png";
import { Modal } from "../Modal";

export const Navbar = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [selection] = useState([
    {
      name: "Brann",
      class: "Warrior, Hunter",
    },
  ]);
  const [currentHero, setCurrentHero] = useState(selection)
  const [currentHP, setCurrentHP] = useState([0, 1, 2, 3]);
  const [currentST, setCurrentST] = useState([0, 1, 2, 3]);

  return (
    <div>
      {isModalOpen && (
        <Modal
          onClose={toggleModal}
          heroes={setCurrentHero}
          currentHero={setCurrentHP}
          currentHP={setCurrentHP}
          currentST={setCurrentST}
        />
      )}

      <div className="navWrapper">
        <div className="navMain">
          <img
            className="navHero"
            src={HeroDefault}
            alt="Hero Select"
            onClick={toggleModal}
          />
          <img
            className="navHP"
            src={HeroPowerDefault}
            alt="Hero Power Select"
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
