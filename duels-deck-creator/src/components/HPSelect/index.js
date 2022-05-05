import React from "react";

const HPSelect = (props) => {
  const { onClose, currentHero, currentHeroPower, setCurrentHeroPower } = props;
  const HP1 = `./Images/${currentHero.heroName}/${currentHero.heroName}HP1.webp`;

  console.log("Current HP: ", currentHeroPower);

  return (
    <div className="heroWrapper">
      <div onClick={onClose} className="heroSelect">
        <span onClick={setCurrentHeroPower("Brann1")}>
          <img src={currentHero.hpSelect1} />
        </span>
        <span onClick={setCurrentHeroPower("Brann1")}>
          <img src={currentHero.hpSelect2} />
        </span>
        <img src={currentHero.hpSelect3} />
      </div>
    </div>
  );
};

export default HPSelect;
