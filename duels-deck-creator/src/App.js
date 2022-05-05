import { useState } from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";

import {
  brann,
  demon_hunter,
  drekthar,
  druid,
  elise,
  finley,
  hunter,
  mage,
  paladin,
  priest,
  reno,
  rogue,
  shaman,
  vanndar,
  warlock,
  warrior,
  brannHP1,
  brannHP2,
  brannHP3,
  de
} from "./Images/index";

function App() {
  const [heroes] = useState([
    {
      id: 101,
      heroName: "Brann",
      class: "Brann",
      heroPower: brannHP1,
      hpSelect: {
        option1: brannHP1,
        name1: "Scattershot",
        option2: brannHP2,
        name2: "Well Equipped",
        option3: brannHP3,
        name3: "Dino Tracking",
      },
      sigTreasure: 1,
      heroPortrait: brann,
    },
    {
      id: 102,
      heroName: "Stelina",
      class: "Demon_Hunter",
      heroPower: demon,
      sigTreasure: 1,
      heroPortrait: demon_hunter,
    },
    {
      id: 103,
      heroName: "Drek'thar",
      class: "Neutral",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: drekthar,
    },
    {
      id: 104,
      heroName: "Omu",
      class: "Druid",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: druid,
    },
    {
      id: 105,
      heroName: "Elisea",
      class: "Druid,Priest",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: elise,
    },
    {
      id: 106,
      heroName: "Finley",
      class: "Hunter,Warrior",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: finley,
    },
    {
      id: 107,
      heroName: "Slate",
      class: "Hunter",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: hunter,
    },
    {
      id: 108,
      heroName: "Mozaki",
      class: "Mage",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: mage,
    },
    {
      id: 109,
      heroName: "Turalyon",
      class: "Paladin",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: paladin,
    },
    {
      id: 1010,
      heroName: "Illucia",
      class: "Priest",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: priest,
    },
    {
      id: 1011,
      heroName: "Reno",
      class: "Mage,Rogue",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: reno,
    },
    {
      id: 1012,
      heroName: "Lilian",
      class: "Rogue",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: rogue,
    },
    {
      id: 1013,
      heroName: "Fireheart",
      class: "Shaman",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: shaman,
    },
    {
      id: 1014,
      heroName: "Vanndar",
      class: "Neutral",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: vanndar,
    },
    {
      id: 1015,
      heroName: "Willow",
      class: "Warlock",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: warlock,
    },
    {
      id: 1016,
      heroName: "Rattlegore",
      class: "Warrior",
      heroPower: 1,
      sigTreasure: 1,
      heroPortrait: warrior,
    },
  ]);

  const [currentHero, setCurrentHero] = useState(heroes[0]);

  return (
    <>
      <Navbar
        heroes={heroes}
        currentHero={currentHero}
        setCurrentHero={setCurrentHero}
      ></Navbar>
    </>
  );
}

export default App;
