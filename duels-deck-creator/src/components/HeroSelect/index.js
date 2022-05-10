import React from "react";

const HeroSelect = ({ onClose, heroes, setCurrentHero }) => {

  return (
    <div className="heroWrapper">
      <div onClick={onClose} className="heroSelect">
        {/* Maps heroes to modal for selection */}
        {heroes.map((hero, i) => (
          // Wraps heroes in span so you can click to select them
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
