import React from "react";
import CardList from "./../cardList/CardList";
import CardContextProvider from "../../contexts/CardContext";
import Button from "../button/Button";
import "./board.css";

const Board = () => {
  return (
    <div>
      <div id="title">
        <h1>card game</h1>
        <h2>Let's have fun! Match all the cards with their pairs.</h2>
        <Button />
      </div>
      <CardContextProvider>
        <CardList />
      </CardContextProvider>
    </div>
  );
};

export default Board;
