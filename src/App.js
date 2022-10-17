import { useState, useEffect } from "react";
import Game from "./componrents/Game";



function App() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  useEffect(()=>{
   const newName1 = prompt("Wie ist dein Name Spieler 1?", "Player1")
   const newName2 = prompt("Wie ist dein Name Spieler 2?", "Player2")

   setPlayer1(newName1)
   setPlayer2(newName2)
  },[])

  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <Game player1name={player1} player2name={player2}/>
    </div>
  );
}

export default App;
