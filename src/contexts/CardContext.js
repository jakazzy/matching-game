import React, { createContext, useState } from "react";
import data from "../data/Data";
export const CardContext = createContext();

let turnedCards = [];
let flippedCards = [];
function CardContextProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCard] = useState(data);

  const handleCardClick = (card, id) => {
    let cardlist = cards.map(card => {
      return id === card.id ? Object.assign(card, { flipped: true }) : card;
    });
    turnedCards.push(card);
    flippedCards.push(id);
    console.log(cardlist);
    setCard(cardlist);

    compareCard();
  };

  const compareCard = () => {
    console.log(turnedCards, "turnedCards");
    if (turnedCards.length < 2) return;

    if (turnedCards.length === 2) {
      if (turnedCards[0].name !== turnedCards[1].name) {
        turnedCards = [];
        flippedCards = [];
        return;
      }
      if (turnedCards[0].name === turnedCards[1].name);

      console.log("they are now same");

      let listCards = cards.map(card =>
        flippedCards.includes(card.id)
          ? Object.assign(card, { isDisabled: true })
          : card
      );
      turnedCards = [];
      flippedCards = [];

      console.log(listCards, "disabled added");
    }
  };

  return (
    <CardContext.Provider value={{ cards, handleCardClick }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
