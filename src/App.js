import { useState, useEffect } from "react";
import Game from "./componrents/Game";



function App() {
  // const [name1, setName1] = useState("");
  // const [name2, setName2] = useState("");
  // useEffect(()=>{
  //  console.log("mount");
  //  const name1 = prompt("Wie ist dein Name Spieler 1?")
  //  const name2 = prompt("Wie ist dein Name Spieler 2?")
  //  console.log(name1, name2);
  //  setName1(name1)
  //  setName2(name2)
  // },[])

  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <Game />
    </div>
  );
}

export default App;
