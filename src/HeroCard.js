import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faDumbbell,
  faHeart,
  faRunning,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const HeroCard = (props) => {
  const {
    setCardSelected,
    setCardToBeAffected,
    name,
    strength,
    intel,
    agility,
    picture,
    currentHealth,
    onAbility,
    cardSelected,
    cardAffected,
  } = props;

  const pictureUrl = require(`./${picture}.jpg`);

  const heal = intel * 2;
  const quickAttack = ((strength / 4) * agility) / 2;
  const strengthAttack = parseInt(Math.floor(strength * 1.5));
  const comboAttack = parseInt(Math.floor(intel + strength + agility) / 2);

  const toggleSelectedCard = () => {
    if (cardSelected === false) {
      setCardSelected(true);
    } else {
      setCardSelected(false);
    }
  };

  const toggleAffectedCard = () => {
    if (cardAffected === false && cardSelected === false) {
      setCardToBeAffected(true);
    } else {
      setCardToBeAffected(false);
    }
  };

  if (currentHealth === "DEAD") {
    return (
      <div className="card cardBorder centered backCardColor skew">
        <div className="redColor">Hero Was Defeated</div>
      </div>
    );
  }

  return (
    <div
      className={
        `card cardBorder cardBackGround ` +
        (cardSelected ? "attacker" : "") +
        (cardAffected ? "target" : "")
      }
    >
      <div className="cardHeader cardBorder">
        <div className="rowFlex1">{name}</div>
        <div>
          <FontAwesomeIcon icon={faHeart} className="redColor" />{" "}
          {currentHealth}
        </div>
      </div>
      <div className="cardPic">
        <img src={pictureUrl} alt={name} className="picture" />
      </div>
      <div className="rowSB">
        <div
          className="cardBorder selectors pointer"
          onClick={(e) => {
            toggleSelectedCard();
          }}
        >
          Select Me!
        </div>
        <div
          className="cardBorder selectors pointer"
          onClick={(e) => {
            toggleAffectedCard();
          }}
        >
          Affect me!
        </div>
      </div>
      <div className="cardStats cardBorder ">
        <div>
          <FontAwesomeIcon icon={faDumbbell} className="blackColor" />{" "}
          {strength}
        </div>
        <div>
          <FontAwesomeIcon icon={faRunning} className="blackColor" />
          {agility}
        </div>
        <div>
          <FontAwesomeIcon icon={faBrain} className="red2Color" /> {intel}
        </div>
      </div>
      <div className="cardAttacks cardBorder">
        <FontAwesomeIcon icon={faBrain} className="red2Color" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAbility("heal");
          }}
        >
          {Math.floor(heal)}
        </button>
        <FontAwesomeIcon icon={faDumbbell} className="blackColor" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAbility("strengthAttack");
          }}
        >
          {Math.floor(strengthAttack)}
        </button>
        <FontAwesomeIcon icon={faRunning} className="greenColor" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAbility("quickAttack");
          }}
        >
          {Math.floor(quickAttack)}
        </button>
        <FontAwesomeIcon icon={faTriangleExclamation} className="yellowColor" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAbility("comboAttack");
          }}
        >
          {Math.floor(comboAttack)}
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
