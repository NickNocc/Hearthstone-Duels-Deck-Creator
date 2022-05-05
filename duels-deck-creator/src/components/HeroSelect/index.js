import React from "react";

const HeroSelect = (props) => {
  const { onClose, heroes, setCurrentHero } = props;


  return (
    <div className="heroWrapper">
      <div onClick={onClose} className="heroSelect">
        {heroes.map((hero, i) => (
          <span
            key={hero.id}
            onClick={() => {
              setCurrentHero(hero);
              onClose();
            }}
          >
            <img src={hero.heroPortrait} alt={hero.heroName} key={i} />
          </span>
        ))}
      </div>
    </div>
  );
};
export default HeroSelect;
