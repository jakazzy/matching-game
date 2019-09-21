import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = props => {
  const { card } = props;
  console.log(card);
  return (
    <li key={card.id} className="card-item">
      <div className="card-item-inner">
        <div className="card card-back">{/* <p>this is a card</p> */}</div>
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
