import React, { useContext, useEffect } from "react";
import Card from "./../card/Card";
import { CardContext } from "./../../contexts/CardContext";
import "./cardList.css";
// import data from "../../data/Data";

function CardList() {
  const { startGame, cards } = useContext(CardContext);

  useEffect(() => {
    // const startGame = array => {
    //   shuffle(array);
    // };
    // startGame(data);
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="container">
      {console.log(cards, "these are the cards being presented")}
      {cards.map(card => {
        return <Card card={card} key={card.id} />;
      })}
    </ul>
  );
}

export default CardList;
