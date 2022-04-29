import React from "react";
import "./Navbar.css";
import HeroDefault from "../../Images/Defaults/Hero_Default.webp";
import HeroPowerDefault from "../../Images/Defaults/HeroPower_Default.webp";
import CardBackDefault from "../../Images/Defaults/card-back-default.png";

export const Navbar = () => {
    

  return (
    <div className="navWrapper">
      <div className="navMain">
        <img className="navHero" src={HeroDefault} alt="Hero Select" />
        <img className="navHP" src={HeroPowerDefault} alt="Hero Power Select" />
        <img className="navST" src={CardBackDefault} alt="Signature Treasure Select" />
      </div>
    </div>
  );
};
