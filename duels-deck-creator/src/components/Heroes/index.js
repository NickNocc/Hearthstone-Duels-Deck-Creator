import React from "react";

const HeroSelect = (props) => {
  const { onClose, heroes, setCurrentHero } = props;

  console.log(setCurrentHero);

  return (
    <div className="heroWrapper">
      <div onClick={onClose} className="heroSelect">
        {/* <span onClick={(e) => {
          e.preventDefault();
          console.log(e.target)

        }}> */}
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
        {/* </span> */}
      </div>
    </div>
  );
};
export default HeroSelect;
