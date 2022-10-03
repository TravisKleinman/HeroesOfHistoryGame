import "./app.css";
import { useState, useEffect } from "react";
// import HeroCreationPage from "./HeroCreationPage";
import Game from "./Game";

const getRandomHero = () => {
  const randomHero = Math.floor(Math.random() * 9);
  let randomHero2 = Math.floor(Math.random() * 9);
  if (randomHero2 === randomHero) {
    randomHero2 = Math.floor(Math.random() * 9);
    if (randomHero2 === randomHero) {
      randomHero2 = Math.floor(Math.random() * 9);
    }
    if (randomHero2 === randomHero) {
      randomHero2 = Math.floor(Math.random() * 9);
    }
  }
  return [randomHero, randomHero2];
};

const turnOrder = () => Math.floor(Math.random() * 2 + 1);

function App() {
  // const [resetGame, setResetGame] = useState(false);

  const player1Heros = getRandomHero();
  const player2Heros = getRandomHero();

  const firstTurn = turnOrder(getRandomHero());

  return (
    <Game
      player1Heros={player1Heros}
      player2Heros={player2Heros}
      firstTurn={firstTurn}
    />
  );
}

export default App;
