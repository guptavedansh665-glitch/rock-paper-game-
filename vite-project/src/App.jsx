import React from "react"
import { useState } from "react"

const MOVES = {
  rock: "🪨",
  paper: "📃",
  scissors: "✂️"
}
const KEYS = Object.keys(MOVES)

const App = () => {
  const [userMove, setUserMove] = useState(null)
  const [computerMove, setComputerMove] = useState(null)
  const [result, setResult] = useState("")
  const [score, setScore] = useState({ user: 0, computer: 0, ties: 0 })

  function handleClick(move) {
    const comp = KEYS[Math.floor(Math.randomandom() * KEYS.length)]
    setUserMove(move)
    setComputerMove(comp)

    if (move === comp) {
      setResult("Tie")
      setScore((s) => ({ ...s, ties: s.ties + 1 }))
      return
    }

    const wins =
      (move === "rock" && comp === "scissors") ||
      (move === "scissors" && comp === "paper") ||
      (move === "paper" && comp === "rock")

    if (wins) {
      setResult("You win 🎉")
      setScore((s) => ({ ...s, user: s.user + 1 }))
    } else {
      setResult("Computer wins 💻")
      setScore((s) => ({ ...s, computer: s.computer + 1 }))
    }
  }

  function reset() {
    setUserMove(null)
    setComputerMove(null)
    setResult("")
    setScore({ user: 0, computer: 0, ties: 0 })
  }

  return (
    <div className="app-card">
      <h1>Stone Paper Scissor Game</h1>

      <div className="players">
        <div className="player">
          <div className="label-muted">Computer</div>
          <div className="move-emoji">{computerMove ? MOVES[computerMove] : "?"}</div>
        </div>

        <div className="player">
          <div className="label-muted">You</div>
          <div className="move-emoji">{userMove ? MOVES[userMove] : "?"}</div>
        </div>
      </div>

      <div className="buttons-row">
        {KEYS.map((k) => (
          <button
            key={k}
            onClick={() => handleClick(k)}
            className={`move-btn ${userMove === k ? "active" : ""}`}
            aria-label={k}
          >
            {MOVES[k]}
          </button>
        ))}
      </div>

      <div className="result">{result}</div>

      <div className="stats">
        <div>Wins: {score.user}</div>
        <div>Losses: {score.computer}</div>
        <div>Ties: {score.ties}</div>
      </div>

      <div style={{ marginTop: 8 }}>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>
    </div>
  )
}
export default App