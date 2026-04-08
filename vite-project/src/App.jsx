import React, { useState } from "react";

const MOVES = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️"
};

const KEYS = Object.keys(MOVES);

function App() {
  const [userMove, setUserMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [result, setResult] = useState("");

  function getComputerMove() {
    return KEYS[Math.floor(Math.random() * KEYS.length)];
  }

  function getResult(user, comp) {
    if (user === comp) return "Draw";

    if (
      (user === "rock" && comp === "scissors") ||
      (user === "paper" && comp === "rock") ||
      (user === "scissors" && comp === "paper")
    ) {
      return "You Win 🎉";
    }

    return "You Lose 😢";
  }

  function play(move) {
    const compMove = getComputerMove();
    setUserMove(move);
    setComputerMove(compMove);
    setResult(getResult(move, compMove));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Rock Paper Scissors</h1>

      {KEYS.map((move) => (
        <button key={move} onClick={() => play(move)}>
          {MOVES[move]}
        </button>
      ))}

      <h2>You: {userMove && MOVES[userMove]}</h2>
      <h2>Computer: {computerMove && MOVES[computerMove]}</h2>
      <h2>{result}</h2>
    </div>
  );
}

export default App;