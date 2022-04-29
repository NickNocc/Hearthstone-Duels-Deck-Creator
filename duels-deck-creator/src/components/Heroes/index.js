import React from "react";
import brann from "../../Images/Brann/Hero_Brann.webp";
import demon_hunter from "../../Images/Demon_Hunter/Hero_Stelina.webp";
import drekthar from "../../Images/DrekThar/Hero_DrekThar.webp"
import druid from "../../Images/Druid/Hero_Omu.webp"
import elise from "../../Images/Elise/Hero_Elise.webp"
import finley from "../../Images/Finley/Hero_Finley.webp"
import hunter from "../../Images/Hunter/Hero_Slate.webp"
import mage from "../../Images/Mage/Hero_Mozaki.webp"
import paladin from "../../Images/Paladin/Hero_Turalyon.webp"
import priest from "../../Images/Priest/Hero_Illucia.webp"
import reno from "../../Images/Reno/Hero_Reno.webp"
import rogue from "../../Images/Rogue/Hero_Lilian.webp"
import shaman from "../../Images/Shaman/Hero_Fireheart.webp"
import vanndar from "../../Images/Vanndar/Hero_Vanndar.webp"
import warlock from "../../Images/Warlock/Hero_Willow.webp"
import warrior from "../../Images/Warrior/Hero_Rattlegore.webp";

const HeroSelect = () => {
  return (
    <div className="heroWrapper">
      <div className="heroSelect">
        <img src={brann} alt="Brann"></img>
        <img src={demon_hunter} alt="Stelina"></img>
        <img src={drekthar} alt="Drek'Thar"></img>


      </div>
    </div>
  );
};
export default HeroSelect;
