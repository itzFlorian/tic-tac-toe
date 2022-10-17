import "../styles/game.css"
import { useState } from "react";
import GameOver from "./GameOver";
import ChickenDinner from "./ChickenDinner";


const Game = ({player1name, player2name, player1, player2, setPlayer1, setPlayer2}) => {
  const [nextPlayer, setNextPlayer] = useState(true)
  const [turns, setTurns] = useState(0)

  const klickHandler = (event) => {
    const field = event.target.className.slice(0,2)
    event.target.innerText = nextPlayer ? 
    player2[field] ? "o" : "x" : 
    player1[field] ? "x" : "o" ;

    nextPlayer ? 
    player2[field] ? setNextPlayer(!nextPlayer) 
    : setPlayer1({...player1, [field]:true}) : 
    player1[field] ? setNextPlayer(!nextPlayer) 
    : setPlayer2({...player2, [field]:true})

    setNextPlayer(!nextPlayer)
    setTurns(prev => prev = prev + 1)
    console.log("player1", player1);
    console.log("player2", player2);
  }

  const restart = () =>{
    setPlayer1({
      a1:false,a2:false,a3:false,
      b1:false,b2:false,b3:false,
      c1:false,c2:false,c3:false,
      wins:player1.wins, 
    })
    setPlayer2({
      a1:false,a2:false,a3:false,
      b1:false,b2:false,b3:false,
      c1:false,c2:false,c3:false,
      wins:player2.wins
    })
    setTurns(0)   
    const fields = document.querySelectorAll(".field") 
    fields.forEach(div => div.innerText = "")
  }

  return !player1.winner && !player2.winner && turns >= 9 ?
    (<GameOver restart={restart}/>) 
    :
    (<ChickenDinner restart={restart} klickHandler={klickHandler} player1={player1} player2={player2} player1name={player1name} player2name={player2name}/>
    )
  }


export default Game;