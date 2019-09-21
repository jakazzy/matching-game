import React, { createContext, useState } from "react";
import data from "../data/Data";
export const CardContext = createContext();

let turnedCards = [];
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
      if (turnedCards[0].name !== turnedCards[1].name) return;
      if (turnedCards[0].name === turnedCards[1].name);
      console.log("they are same");
      console.log(turnedCards[0].name, turnedCards[1], "name");
      let listCards = cards.map(card =>
        turnedCards.includes(card.id)
          ? Object.assign(card, { isDisabled: true })
          : card
      );

      setCard(listCards);
      turnedCards = [];
    }
  };

  return (
    <CardContext.Provider value={{ cards, handleCardClick }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
