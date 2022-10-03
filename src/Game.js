import React from "react";
import HeroCard from "./HeroCard";
import { newHeros } from "./heros.js";
import { useState, useEffect } from "react";

const Game = (props) => {
  const { player1Heros, player2Heros, firstTurn } = props;

  const [currentHealth1, setCurrentHealth1] = useState(
    newHeros[player1Heros[0]].health
  );
  const [currentHealth2, setCurrentHealth2] = useState(
    newHeros[player1Heros[1]].health
  );
  const [currentHealth3, setCurrentHealth3] = useState(
    newHeros[player2Heros[0]].health
  );
  const [currentHealth4, setCurrentHealth4] = useState(
    newHeros[player2Heros[1]].health
  );

  const [cardSelected1, setCardSelected1] = useState(false);
  const [cardSelected2, setCardSelected2] = useState(false);
  const [cardSelected3, setCardSelected3] = useState(false);
  const [cardSelected4, setCardSelected4] = useState(false);

  const [cardToBeAffected1, setCardToBeAffected1] = useState(false);
  const [cardToBeAffected2, setCardToBeAffected2] = useState(false);
  const [cardToBeAffected3, setCardToBeAffected3] = useState(false);
  const [cardToBeAffected4, setCardToBeAffected4] = useState(false);

  const [turn, setTurn] = useState(firstTurn);

  const player1Hero1 = newHeros[player1Heros[0]];
  const player1Hero2 = newHeros[player1Heros[1]];
  const player2Hero1 = newHeros[player2Heros[0]];
  const player2Hero2 = newHeros[player2Heros[1]];

  const onAbility = (hero, setCurrentHealth, currentHealth, cardAffected) => {
    return (ability) => {
      if (ability === "quickAttack") {
        if (
          parseInt(Math.floor(((hero.strength / 4) * hero.agility) / 2)) >=
          parseInt(currentHealth)
        ) {
          setCurrentHealth("DEAD");
        } else {
          setCurrentHealth(
            parseInt(
              currentHealth -
                Math.floor(((hero.strength / 2) * (hero.agility / 2)) / 2)
            )
          );
        }
        if (turn === 2) {
          setTurn(turn - 1);
        } else {
          setTurn(turn + 1);
        }
      }
      if (ability === "heal") {
        if (currentHealth === hero.health) {
          alert("Hero Was Full Already!! Use something else!!");
        } else {
          if (parseInt(currentHealth + hero.intel * 2) > hero.health) {
            setCurrentHealth(hero.health);
          } else {
            setCurrentHealth(parseInt(currentHealth + hero.intel * 2));
          }
          if (turn === 2) {
            setTurn(turn - 1);
          } else {
            setTurn(turn + 1);
          }
        }
      }
      if (ability === "comboAttack") {
        if (
          parseInt(Math.floor(hero.intel + hero.strength + hero.agility) / 2) >=
          parseInt(currentHealth)
        ) {
          setCurrentHealth("DEAD");
        } else {
          setCurrentHealth(
            currentHealth -
              parseInt(
                Math.floor(hero.intel + hero.strength + hero.agility) / 2
              )
          );
        }
        if (parseInt(turn) === 2) {
          setTurn(turn - 1);
        } else {
          setTurn(parseInt(turn) + 1);
        }
      }
      if (ability === "strengthAttack") {
        if (
          parseInt(Math.floor(hero.strength * 1.5)) >=
          parseInt(cardAffected.currentHealth)
        ) {
          setCurrentHealth("DEAD");
        } else {
          setCurrentHealth(
            parseInt(currentHealth - parseInt(Math.floor(hero.strength * 1.5)))
          );
        }
        if (turn === 2) {
          setTurn(turn - 1);
        } else {
          setTurn(turn + 1);
        }
      }
    };
  };
  const playerNameEntry = "Jackson";
  const playerNameEntry2 = "Travis";

  const yourTurn = (x) => {
    if (x === 2) {
      if (turn === 2) {
        return `Your Turn`;
      } else {
        return `it's ${playerNameEntry}'s turn`;
      }
    } else {
      if (turn === 1) {
        return `Your Turn`;
      } else {
        return `it's ${playerNameEntry2}'s turn`;
      }
    }
  };

  const resetGame = () => {
    window.location.reload();
  };

  const [heroCard, setHeroCard] = useState(false);

  const generateHero = () => {
    setHeroCard(true);
  };
  // const [heroCard2, setHeroCard2] = useState(false);
  // const [heroCard3, setHeroCard3] = useState(false);
  // const [heroCard4, setHeroCard4] = useState(false);

  return (
    <div className="main">
      <div className="rowSB player1">
        <div>
          {heroCard ? (
            <HeroCard
              {...player1Hero1}
              onAbility={onAbility(
                player1Hero1,
                setCurrentHealth1,
                currentHealth1
              )}
              currentHealth={currentHealth1}
              cardSelected={cardSelected1}
              cardAffected={cardToBeAffected1}
              setCardToBeAffected={setCardToBeAffected1}
              setCardSelected={setCardSelected1}
            />
          ) : (
            ""
          )}
        </div>
        <div className="centerColumn">
          <div className={heroCard ? "playerBox" : ""}>
            <div className="nameText">
              {heroCard ? playerNameEntry || "Player One" : ""}
            </div>
            <div className={heroCard ? "turnText cardBorder" : ""}>
              {heroCard ? yourTurn() : ""}
            </div>
          </div>
          <div
            className={
              heroCard
                ? "secondCenterBox"
                : "secondCenterBox pointer centerBtn brownBackGround start"
            }
            onClick={generateHero}
          >
            <div className="centerText">{heroCard ? "" : "Start Game"}</div>
          </div>
        </div>
        <div>
          {heroCard ? (
            <HeroCard
              {...player1Hero2}
              onAbility={onAbility(
                player1Hero2,
                setCurrentHealth2,
                currentHealth2
              )}
              currentHealth={currentHealth2}
              cardSelected={cardSelected2}
              cardAffected={cardToBeAffected2}
              setCardToBeAffected={setCardToBeAffected2}
              setCardSelected={setCardSelected2}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={heroCard ? "middleBorder" : ""}></div>
      <div className="rowSB player2">
        <div>
          {heroCard ? (
            <HeroCard
              {...player2Hero1}
              onAbility={onAbility(
                player2Hero1,
                setCurrentHealth3,
                currentHealth3
              )}
              currentHealth={currentHealth3}
              cardSelected={cardSelected3}
              cardAffected={cardToBeAffected3}
              setCardToBeAffected={setCardToBeAffected3}
              setCardSelected={setCardSelected3}
            />
          ) : (
            ""
          )}
        </div>
        <div className="centerColumn">
          <div className={heroCard ? "playerBox" : ""}>
            <div className="nameText">
              {heroCard ? playerNameEntry2 || "Player Two" : ""}
            </div>
            <div className={heroCard ? "turnText cardBorder" : ""}>
              {heroCard ? yourTurn(2) : ""}
            </div>
          </div>
          <div
            className={
              heroCard
                ? "secondCenterBox pointer centerBtn brownBackGround"
                : ""
            }
            onClick={resetGame}
          >
            {heroCard ? "Reset Game" : ""}
          </div>
        </div>
        <div>
          {heroCard ? (
            <HeroCard
              {...player2Hero2}
              onAbility={onAbility(
                player2Hero2,
                setCurrentHealth4,
                currentHealth4
              )}
              currentHealth={currentHealth4}
              cardSelected={cardSelected4}
              cardAffected={cardToBeAffected4}
              setCardToBeAffected={setCardToBeAffected4}
              setCardSelected={setCardSelected4}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
