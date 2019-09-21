import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = props => {
  return (
    <li className="card">
      <div id="card1">
        <p>this is a card</p>
      </div>
    </li>
  );
};

Card.propTypes = {
  name: PropTypes.string
};

export default Card;
