import React, { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
// import data from "../../data/Data";
import "./button.css";

function Button() {
  const { shuffle, cards } = useContext(CardContext);
  const newGame = cards => {
    if (cards) {
      shuffle(cards);
    }
  };
  return (
    <div>
      <button onClick={() => newGame(cards)} className="button">
        Start
      </button>
    </div>
  );
}

export default Button;
