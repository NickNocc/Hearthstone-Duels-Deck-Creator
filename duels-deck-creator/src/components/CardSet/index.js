import React, { useEffect, useState } from "react";
import DeckList from "../DeckList";
import "./CardSet.css";
const axios = require("axios");

export const CardSets = ({ currentHero }) => {
  // console.log(currentHero);

  const [cardData, setCardData] = useState(null);

  const [deckList, setDeckList] = useState([]);

  const activeSets =
    "journey-to-ungoro,one-night-in-karazhan,whispers-of-the-old-gods,league-of-explorers,voyage-to-the-sunken-city,core,legacy,fractured-in-alterac-valley,united-in-stormwind,forged-in-the-barrens,madness-at-the-darkmoon-faire,scholomance-academy,goblins-vs-gnomes,naxxramas,saviors-of-uldum,kobolds-and-catacombs";

  const hero = currentHero.class;
  // console.log("hero class: ", currentHero.class);

  useEffect(() => {
    axios(
      `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${activeSets}&class=${hero}&pageSize=500&sort=groupByClass%3Aasc%2CmanaCost%3Aasc&access_token=USAyX7sJPh2pYrnm1oLiLn42P3x7Fozjpr`
    ).then((data) => {
      let payload = data.data.cards;
      // payload.sort((a,b) => a.classId - b.classId);
      setCardData(payload);
    });
  });

  // console.log("cardData: ", cardData);

  return (
    <div className="deckHolder">
      <div className="cardList">
        {cardData
          ? cardData.map((card, i) => (
            <span onClick={() => {
              setDeckList(oldState => [...oldState, card])
            }}>
              <img
                src={card.image}
                key={i}
                alt={card.name}
                className="hsCards"
              />
              </span>
            ))
          : null}
      </div>
      <div className="deckList">
        <DeckList deckList={deckList} setDeckList={setDeckList} />
      </div>
    </div>
  );
};
