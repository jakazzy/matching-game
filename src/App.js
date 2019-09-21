import React from "react";
import CardList from "./components/cardList/CardList";
import CardContextProvider from "./contexts/CardContext";

//import './App.css';

function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <CardList />
      </CardContextProvider>
    </div>
  );
}

export default App;
