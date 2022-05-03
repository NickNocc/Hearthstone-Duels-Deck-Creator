import React from "react";
import brann from "../../Images/Brann/Hero_Brann.webp";
import demon_hunter from "../../Images/Demon_Hunter/Hero_Stelina.webp";
import drekthar from "../../Images/DrekThar/Hero_DrekThar.webp";
import druid from "../../Images/Druid/Hero_Omu.webp";
import elise from "../../Images/Elise/Hero_Elise.webp";
import finley from "../../Images/Finley/Hero_Finley.webp";
import hunter from "../../Images/Hunter/Hero_Slate.webp";
import mage from "../../Images/Mage/Hero_Mozaki.webp";
import paladin from "../../Images/Paladin/Hero_Turalyon.webp";
import priest from "../../Images/Priest/Hero_Illucia.webp";
import reno from "../../Images/Reno/Hero_Reno.webp";
import rogue from "../../Images/Rogue/Hero_Lilian.webp";
import shaman from "../../Images/Shaman/Hero_Fireheart.webp";
import vanndar from "../../Images/Vanndar/Hero_Vanndar.webp";
import warlock from "../../Images/Warlock/Hero_Willow.webp";
import warrior from "../../Images/Warrior/Hero_Rattlegore.webp";

const HeroSelect = (props) => {
  const { onClose, setCurrentHero, toggleModal } = props

  console.log(setCurrentHero);

  return (
    <div className="heroWrapper">
      <div onClick={onClose} className="heroSelect">
        <span
          onClick={() => {
            setCurrentHero("Hero_Brann");
          }}
        >
          {" "}
          <img src={brann} alt="Brann" />
        </span>
        <span
          onClick={() => {
            setCurrentHero("Hero_Stelina");
            toggleModal(false);
          }}
        >
          <img src={demon_hunter} alt="Stelina" />
        </span>
        <img src={drekthar} alt="Drek'Thar"></img>
        <img src={druid} alt="Omu"></img>
        <img src={elise} alt="Elise"></img>
        <img src={finley} alt="Finley"></img>
        <img src={hunter} alt="Slate"></img>
        <img src={mage} alt="Mozaki"></img>
        <img src={paladin} alt="Turalyon"></img>
        <img src={priest} alt="Illucia"></img>
        <img src={reno} alt="Reno"></img>
        <img src={rogue} alt="Lilian"></img>
        <img src={shaman} alt="Fireheart"></img>
        <img src={vanndar} alt="Vanndar"></img>
        <img src={warlock} alt="Willow"></img>
        <img src={warrior} alt="Rattlegore"></img>
      </div>
    </div>
  );
};
export default HeroSelect;
