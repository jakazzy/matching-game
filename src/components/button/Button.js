import React, { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
// import data from "../../data/Data";
import "./button.css";

function Button() {
  const { restart } = useContext(CardContext);

  return (
    <div>
      <button onClick={() => restart()} className="button">
        Start
      </button>
    </div>
  );
}

export default Button;
