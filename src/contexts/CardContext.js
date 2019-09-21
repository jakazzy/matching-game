import React, { createContext, useState } from "react";
import data from "../data/Data";
export const CardContext = createContext();

function CardContextProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCard] = useState(data);
  return (
    <CardContext.Provider value={{ cards }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
