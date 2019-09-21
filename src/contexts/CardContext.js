import React, { createContext, useState } from "react";
import data from "../data/Data";
export const CardContext = createContext();

let turnedCards = [];
let flippedCards;
function CardContextProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCard] = useState(data);

  const handleCardClick = id => {
    let cardlist = cards.map(card => {
      return id === card.id ? Object.assign(card, { flipped: true }) : card;
    });
    turnedCards.push(id);
    console.log(cardlist);
    setCard(cardlist);
    console.log("do you get called?");
    compareCard();
  };

  const compareCard = () => {
    console.log(turnedCards, "turnedCards");
    if (turnedCards.length < 2) return;

    if (turnedCards.length === 2) {
      flippedCards = cards.filter(card => card.flipped === true);
      if (flippedCards[0].name !== flippedCards[1].name) {
        turnedCards = [];
        flippedCards = [];
        console.log(turnedCards, flippedCards, "here we are");
        return;
      }
      let len = flippedCards.length;
      if (flippedCards[len - 2].name === flippedCards[len - 1].name);
      console.log("they are same");

      console.log(flippedCards, "name");

      let listCards = cards.map(card =>
        turnedCards.includes(card.id)
          ? Object.assign(card, { isDisabled: true })
          : card
      );
      setCard(listCards);
    }

    flippedCards = [];
    turnedCards = [];
  };

  return (
    <CardContext.Provider value={{ cards, handleCardClick }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
