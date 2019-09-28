import React, { useContext, useEffect, useState } from "react";
import Card from "./../card/Card";
import { CardContext } from "./../../contexts/CardContext";
import "./cardList.css";

const CardList = () => {
  const { startGame, cards, match } = useContext(CardContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let val = false;
  if (match === 9 && !show) {
    val = true;
  }

  const closed = () => {
    setShow(true);
    console.log("change", show);
  };

  return (
    <div>
      <div
        id="myModal"
        className={"modal " + (!show && val ? "visible" : "hidden")}
      >
        {console.log("show:", !show, val, "you there")}
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={closed} className="close">
              &times;
            </span>
            <h2>Congratulations!!!</h2>
          </div>
          <div className="modal-body">
            <p>You have successfully completed the card game.</p>
            <p>Kudos!!!!!!!!!</p>
          </div>
        </div>
      </div>

      <ul className="container">
        {console.log(cards, "these are the cards being presented")}
        {cards.map(card => {
          return <Card card={card} key={card.id} />;
        })}
      </ul>
    </div>
  );
};

export default CardList;
