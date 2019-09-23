import React, { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ card }) => {
  const { handleCardClick } = useContext(CardContext);
  return (
    <li
      key={card.id}
      className="card-item"
      onClick={() => handleCardClick(card, card.id)}
    >
      {console.log(card.flipped, "dont waste time")}
      <div
        // style={card.flipped ? rotate : {}}
        className={
          "card-item-inner" +
          (card.isDisabled && card.flipped ? " shake " : " ") +
          (card.flipped ? "rotate" : "")
        }
      >
        <div className="card card-back"></div>
        <div
          className={
            "card-front" + (card.isDisabled && card.flipped ? " shake" : " ")
          }
        >
          <img
            src={card.img + card.name + ".png"}
            alt="JavaScript frontend library"
          />
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  name: PropTypes.string
};

export default Card;
