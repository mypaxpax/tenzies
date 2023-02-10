import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => (
    <Die value={die.value} key={die.id} />
  ));
  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice}>Reroll!</button>
    </main>
  );
}

export default App;
