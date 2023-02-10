import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice());

  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const heldDice = dice.every((die) => die.isHeld);
    const firstVal = dice[0].value;
    const AllVals = dice.every((die) => die.value === firstVal);
    if (heldDice && AllVals) {
      console.log("Won!");
    }
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDice());
    }
    return newDice;
  }

  function generateDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateDice();
      })
    );
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      id={die.id}
      holdDice={() => holdDice(die.id)}
    />
  ));
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice}>Reroll!</button>
    </main>
  );
}

export default App;
