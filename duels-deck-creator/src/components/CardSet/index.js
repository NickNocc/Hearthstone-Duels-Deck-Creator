import React, { useEffect, useState } from "react";
import DeckList from "../DeckList";
import "./CardSet.css";
const axios = require("axios");
const env = require("react-dotenv");


export const CardSets = ({ currentHero }) => {
  // Cards for current class
  const [cardData, setCardData] = useState(null);

  // Tracker for decklist component
  const [deckList, setDeckList] = useState([]);

  // Current sets in hearthstone duels
  const activeSets =
    "journey-to-ungoro,one-night-in-karazhan,whispers-of-the-old-gods,league-of-explorers,voyage-to-the-sunken-city,core,legacy,fractured-in-alterac-valley,united-in-stormwind,forged-in-the-barrens,madness-at-the-darkmoon-faire,scholomance-academy,goblins-vs-gnomes,naxxramas,saviors-of-uldum,kobolds-and-catacombs";

  // Setting the class for the api call
  const hero = currentHero.class;

  useEffect(() => {
    axios(
      `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${activeSets}&class=${hero}&pageSize=500&sort=groupByClass%3Aasc%2CmanaCost%3Aasc&access_token=${env.default.API_KEY}`
    )


  return (
    <div className="deckHolder">
      <div className="cardList">
        {/* Mapping api data onto page */}
        {cardData
          ? cardData.map((card, i) => (
              // Span that allows user to click on card to add it to decklist
              <span
                key={i}
                onClick={() => {
                  setDeckList((oldState) => [...oldState, card]);
                }}
              >
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
