import React, { createContext, useState } from "react";
import data from "../data/Data";
export const CardContext = createContext();

function CardContextProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCard] = useState(data);

  const handleCardClick = id => {
    let cardlist = cards.map(card => {
      return id === card.id ? Object.assign(card, { flipped: true }) : card;
    });
    console.log(cardlist);

    setCard(cardlist);
  };
  return (
    <CardContext.Provider value={{ cards, handleCardClick }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
