import { useState, useEffect } from "react";
import Game from "./componrents/Game";

function App() {
  const [player1, setPlayer1] = useState({
    a1:false,a2:false,a3:false,
    b1:false,b2:false,b3:false,
    c1:false,c2:false,c3:false,
    winner:false
  })
  const [player2, setPlayer2] = useState({
    a1:false,a2:false,a3:false,
    b1:false,b2:false,b3:false,
    c1:false,c2:false,c3:false,
    winner:false
  })

  useEffect(()=>{
    if(
      player1.a1 && player1.a2 && player1.a3 ||
      player1.b1 && player1.b2 && player1.b3 ||
      player1.c1 && player1.c2 && player1.c3 ||
      
      player1.a1 && player1.b1 && player1.c1 ||
      player1.a2 && player1.b2 && player1.c2 ||
      player1.a3 && player1.b3 && player1.c3 ||
      
      player1.a1 && player1.b2 && player1.c3 ||
      player1.c1 && player1.b2 && player1.a3){
        setPlayer1({winner:true})
      }
      if(
        player2.a1 && player2.a2 && player2.a3 ||
        player2.b1 && player2.b2 && player2.b3 ||
        player2.c1 && player2.c2 && player2.c3 ||
       
        player2.a1 && player2.b1 && player2.c1 ||
        player2.a2 && player2.b2 && player2.c2 ||
        player2.a3 && player2.b3 && player2.c3 ||
       
        player2.a1 && player2.b2 && player2.c3 ||
        player2.c1 && player2.b2 && player2.a3){
          setPlayer2({winner:true})
        }
  }, [player1, player2])

  return (
    <div className="App">
      <Game player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>
    </div>
  );
}

export default App;
