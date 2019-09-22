import React, { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ card }) => {
  const { handleCardClick } = useContext(CardContext);

  // console.log(card);
  const rotate = {
    transform: "rotateY(180deg)"
  };

  return (
    <li
      key={card.id}
      className="card-item"
      onClick={() => handleCardClick(card, card.id)}
    >
      <div
        style={card.flipped ? rotate : {}}
        className={
          "card-item-inner" +
          (card.isDisabled && card.flipped ? " shake " : " ")
        }
      >
        <div className="card card-back"></div>
        <div className="card-front">
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
