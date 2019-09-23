import React, { createContext, useState } from "react";
// import data from "../data/Data";

export const CardContext = createContext();

let turnedCards = [];
let flippedCards = [];
let cardlist;
function CardContextProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCard] = useState([]);

  const shuffle = array => {
    // reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setCard(array);
    return array;
  };

  const handleCardClick = (card, id) => {
    setCard(
      cards.map(card => {
        return id === card.id ? Object.assign(card, { flipped: true }) : card;
      })
    );
    turnedCards.push(card);
    flippedCards.push(id);

    compareCard();
  };

  const compareCard = () => {
    if (turnedCards.length < 2) return;

    if (turnedCards.length === 2) {
      if (turnedCards[0].name !== turnedCards[1].name) {
        setTimeout(() => {
          cardlist = cards.map(card => {
            return card.flipped
              ? Object.assign(card, { flipped: false })
              : card;
          });
          setCard(cardlist);
        }, 1000);

        turnedCards = [];
        flippedCards = [];
        return;
      }
      if (
        turnedCards[0].name === turnedCards[1].name &&
        flippedCards[0] === flippedCards[1]
      ) {
        turnedCards.pop();
        flippedCards.pop();

        return;
      }

      if (
        turnedCards[0].name === turnedCards[1].name &&
        flippedCards[0] !== flippedCards[1]
      )
        console.log("they are now same");
      console.log(cards, "these are cards in the comparecard");
      cards.map(card =>
        flippedCards.includes(card.id)
          ? Object.assign(card, { isDisabled: true })
          : card
      );
      turnedCards = [];
      flippedCards = [];

      // console.log(listCards, "disabled added");
    }
  };

  return (
    <CardContext.Provider value={{ cards, handleCardClick, shuffle }}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
