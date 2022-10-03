import Saladin from "./Saladin.jpg";
import Caesar from "./Caesar.jpg";
import Hannibal from "./Hannibal.jpg";
import Leonidas from "./Leonidas.jpg";
import Miyomoto from "./Miyamoto.jpg";
import Spartacus from "./Spartacus.jpg";
import Richard from "./Richard.jpg";
import Suntzu from "./Suntzu.jpg";
const AlexanderTheGreat = require("./AlexanderTheGreat.jpg");

const herosJSON = require("./heros.json");

const buildCardData = (hero) => {
  const cardData = hero.map((stats) => {
    return {
      name: stats.name,
      strength: stats.strength,
      intel: stats.intel,
      health: stats.health,
      picture: stats.namePic,
      agility: stats.agility,
    };
  });
  return cardData;
};

export const newHeros = buildCardData(herosJSON);
