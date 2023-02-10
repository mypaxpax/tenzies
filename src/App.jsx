import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [diceNum, setDiceNum] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElements = diceNum.map((dice) => <Die value={dice} />);
  console.log(diceElements);
  return (
    <main>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}

export default App;
