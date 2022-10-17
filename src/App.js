import { useState, useEffect } from "react";
import Game from "./componrents/Game";

function App() {
  const [player1name, setPlayer1name] = useState("");
  const [player2name, setPlayer2name] = useState("");
  
  useEffect(()=>{
   const newName1 = prompt("Wie ist dein Name Spieler 1?", "Player1")
   const newName2 = prompt("Wie ist dein Name Spieler 2?", "Player2")
   console.log("name1", newName1);
   console.log("name2", newName2);

   setPlayer1name(newName1)
   setPlayer2name(newName2)
  },[])



  const [player1, setPlayer1] = useState({
    a1:false,a2:false,a3:false,
    b1:false,b2:false,b3:false,
    c1:false,c2:false,c3:false,
    wins:0
  })

  const [player2, setPlayer2] = useState({
    a1:false,a2:false,a3:false,
    b1:false,b2:false,b3:false,
    c1:false,c2:false,c3:false,
    wins:0
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
        setPlayer1({a1:false,a2:false,a3:false,
          b1:false,b2:false,b3:false,
          c1:false,c2:false,c3:false,
          wins: player1.wins+1, winner:true})
      }  
  }, [player1])

  useEffect(()=>{ 
      if(
        player2.a1 && player2.a2 && player2.a3 ||
        player2.b1 && player2.b2 && player2.b3 ||
        player2.c1 && player2.c2 && player2.c3 ||

        player2.a1 && player2.b1 && player2.c1 ||
        player2.a2 && player2.b2 && player2.c2 ||
        player2.a3 && player2.b3 && player2.c3 ||

        player2.a1 && player2.b2 && player2.c3 ||
        player2.c1 && player2.b2 && player2.a3){
          setPlayer2({a1:false,a2:false,a3:false,
            b1:false,b2:false,b3:false,
            c1:false,c2:false,c3:false,
            wins: player2.wins+1, winner:true})
        }
  }, [player2])

  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <Game player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} player1name={player1name} player2name={player2name}/>
    </div>
  );
}

export default App;
