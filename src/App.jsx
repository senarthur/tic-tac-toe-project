import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedSquare() {
    setActivePlayer((curActivePlayer) => {
      return curActivePlayer === "X" ? "O" : "X";
    });
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
