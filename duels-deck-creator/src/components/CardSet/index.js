import React, { useEffect, useState } from "react";
import "./CardSet.css"
const axios = require("axios");

export const CardSets = ({ currentHero }) => {
console.log(currentHero);

    // let starterArr = []

  const [cardData, setCardData] = useState(null);

  const activeSets =
    "journey-to-ungoro,one-night-in-karazhan,whispers-of-the-old-gods,league-of-explorers,voyage-to-the-sunken-city,core,legacy,fractured-in-alterac-valley,united-in-stormwind,forged-in-the-barrens,madness-at-the-darkmoon-faire,scholomance-academy,goblins-vs-gnomes,naxxramas,saviors-of-uldum,kobolds-and-catacombs";

  const hero = currentHero.class;
  console.log("hero class: ", currentHero.class);

    useEffect(() => {
        
        axios(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${activeSets}&class=${hero}&pageSize=500&sort=groupByClass%3Aasc%2CmanaCost%3Aasc&access_token=USAyX7sJPh2pYrnm1oLiLn42P3x7Fozjpr`)
            .then(data => setCardData(data.data.cards))
    })


  console.log("cardData: ", cardData);

  return (
    <>
       {cardData
        ? cardData.map((card, i) => 
            <img src={card.image} key={i} alt={card.name} className="hsCards" />
          )
        : null} 
    </>
  );
};
