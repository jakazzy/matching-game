import React, { useState, useContext } from "react";
import Card from "./../card/Card";
import { CardContext } from "./../../contexts/CardContext";
import "./cardList.css";
function CardList() {
  const { cards } = useContext(CardContext);
  return (
    <ul class="container">
      {cards.map(card => {
        return <Card card={card} key={card.id} />;
      })}
    </ul>
  );
}

export default CardList;
