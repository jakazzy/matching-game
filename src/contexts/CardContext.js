import React, { createContext, useState, useEffect } from "react";
import data from "../data/Data";

export const CardContext = createContext();

let turnedCards = [];
let flippedCards = [];
let cardlist;
function CardContextProvider(props) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCard] = useState([]);
  // const [, forceUpdate] = useState(x => x + 1, 0);

  useEffect(() => {
    console.log(cards, "here we are today too");
    // setCard(cards);
    return () => {};
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);
  const shuffle = array => {
    // reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
    console.log("when am i shuffled?");
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
    console.log(array, "this is the array you mentioned");
    // forceUpdate();

    return array;
  };

  // const deepCopy = value => {
  //   return JSON.parse(JSON.stringify(value));
  // };
  const startGame = () => {
    shuffle(data);
  };

  const restart = () => {
    const values = shuffle(data);
    // let newCards;
    // setTimeout(() => {
    let newCards = values.map(value =>
      Object.assign(value, {
        isDisabled: false,
        flipped: false
      })
    );
    console.log(Object.is(cards, values), "compare us please");
    setCard(newCards);
    // }, 10);
    turnedCards = [];
    flippedCards = [];
    console.log(cards, "do you work");
  };

  const handleCardClick = (card, id) => {
    console.log(cards, "these are the cards before click");
    setCard(
      cards.map(card => {
        return id === card.id ? Object.assign(card, { flipped: true }) : card;
      })
    );
    console.log(card.id, "this is the id", card);
    turnedCards.push(card);
    flippedCards.push(id);
    console.log(cards, "after click");
    compareCard();
  };

  const compareCard = () => {
    if (turnedCards.length < 2) return;

    if (turnedCards.length === 2) {
      if (turnedCards[0].name !== turnedCards[1].name) {
        setTimeout(() => {
          cardlist = cards.map(card => {
            return card.flipped && !card.isDisabled
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
        cards.map(card =>
          flippedCards.includes(card.id)
            ? Object.assign(card, { isDisabled: true })
            : card
        );
      turnedCards = [];
      flippedCards = [];
    }
  };

  return (
    <CardContext.Provider
      value={{ cards, handleCardClick, startGame, shuffle, restart }}
    >
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
