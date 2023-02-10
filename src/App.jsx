import { useState } from "react";
import Die from "./components/Die";

function App() {
  function allNewDice() {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
      console.log("Added number");
    }
    return diceArray;
  }
  console.log(diceArray);
  allNewDice();

  return (
    <main>
      <div className="dice-container">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={7} />
        <Die value={8} />
        <Die value={9} />
        <Die value={10} />
      </div>
    </main>
  );
}

export default App;
