import "../styles/game.css"
import { useState, useEffect } from "react";
import GameOver from "./GameOver";


const Game = (name1, name2) => {
  const [nextPlayer, setNextPlayer] = useState(true)
  const [turns, setTurns] = useState(0)
  const [player1, setPlayer1] = useState({
    // name:name1,
    a1:false,a2:false,a3:false,
    b1:false,b2:false,b3:false,
    c1:false,c2:false,c3:false,
    winner:false
  })
  const [player2, setPlayer2] = useState({
    // name:name2,
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

  const klickHandler = (event) => {
    const field = event.target.className.slice(0,2)
    event.target.innerText = nextPlayer ? 
    player2[field] ? "o" : "x" : 
    player1[field] ? "x" : "o" ;

    nextPlayer ? 
    player2[field] ? alert("nicht erlaubt") 
    : setPlayer1({...player1, [field]:true}) : 
    player1[field] ? alert("nichterlaubt") 
    : setPlayer2({...player2, [field]:true})

    setNextPlayer(!nextPlayer)
    setTurns(prev => prev = prev + 1)
    // console.log("field:", field, "nextPlayer:", nextPlayer);
    // console.log("player1", player1);
    // console.log("player2", player2);
  }
  const restart = () =>{
    setPlayer1({
      a1:false,a2:false,a3:false,
      b1:false,b2:false,b3:false,
      c1:false,c2:false,c3:false,
      winner:false
    })
    setPlayer2({
      a1:false,a2:false,a3:false,
      b1:false,b2:false,b3:false,
      c1:false,c2:false,c3:false,
      winner:false
    })
    setTurns(0)   
    const fields = document.querySelectorAll(".field") 
    fields.forEach(div => div.innerText = "")
  }

  return !player1.winner && !player2.winner && turns >= 9 ?
   (<div>
    <h1>Spiel zuende</h1>
    <button onClick={restart}> Restart</button>
  </div>) 
    :
   (<>    
    <div>
      <h3>{player1.winner && `Player 1 wins`}</h3>
      <h3>{player2.winner && `Player 2 wins`}</h3>
    </div>
    <div className="grid-game" onClick={(event) => klickHandler(event)}>
      <div className="a1 a field"></div>
      <div className="a2 a field"></div>
      <div className="a3 a field"></div>

      <div className="b1 b field"></div>
      <div className="b2 b field"></div>
      <div className="b3 b field"></div>

      <div className="c1 c field"></div>
      <div className="c2 c field"></div>
      <div className="c3 c field"></div>
    </div>    
    <div>
      <button onClick={restart}> Restart</button>
    </div>
  </>)

};

export default Game;