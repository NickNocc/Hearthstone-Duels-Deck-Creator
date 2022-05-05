import React from "react";

const HeroSelect = (props) => {
  const { onClose, heroes, setHeroes } = props;

  console.log(heroes);

  return (
    <div className="heroWrapper">
      <div onClick={onClose} className="heroSelect">
        {heroes.map((hero, i) => (
          <>
            <img
              src={hero.heroPortrait}
              alt={i}
              key={hero.id}
            />
            <span
              onClick={() => {
                setHeroes(hero[i]);
                onClose();
              }}
              // key={i}
            ></span>
          </>
        ))}

        {/* <span onClick={() => {}}>
          {" "}
          <img src={brann} alt="Brann" />
        </span>
        <span onClick={() => {}}>
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
        <img src={warrior} alt="Rattlegore"></img> */}
      </div>
    </div>
  );
};
export default HeroSelect;
