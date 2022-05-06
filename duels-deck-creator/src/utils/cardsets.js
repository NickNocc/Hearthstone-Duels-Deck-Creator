const axios = require("axios").default;

const activeSets =
  "journey-to-ungoro,one-night-in-karazhan,whispers-of-the-old-gods,league-of-explorers,voyage-to-the-sunken-city,core,legacy,fractured-in-alterac-valley,united-in-stormwind,forged-in-the-barrens,madness-at-the-darkmoon-faire,scholomance-academy,goblins-vs-gnomes,naxxramas,saviors-of-uldum,kobolds-and-catacombs";

const hero = "paladin";

let fetcher = axios
  .get(
    `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=${activeSets}&class=${hero}&access_token=US5DCIpIr2yLNShXsi5WvdLFNndeLZ5Eek`
  )
  .then((data) => {
    let cards = data.data.cards;
    console.log(cards);
  });

console.log(fetcher);