import React, { createContext, useState } from "react";
import data from "../data/Data";
export const CardContext = createContext();

function CardContextProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCard] = useState(data);
  const handleCardClick = id => {
    let card = cards.filter(card => card.id === id);
    console.log(card);
    // setCard({ ...values, [event.target.id]: event.target.value });
  };
  return (
    <CardContext.Provider value={{ cards, handleCardClick }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
