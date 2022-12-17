import Field from "./Field";
import "../styles/chickendinner.css"

const ChickenDinner = ({player1, player2, player1name, player2name, klickHandler, restart}) => {
  return ( 
    <>
    <div>
      <table>
        <tr><td>X</td><td>O</td></tr>
        <tr>
          <td>{player1name}</td>
          <td>{player2name}</td>
        </tr>
        <tr>
          <td>{player1.wins}</td>
          <td>{player2.wins}</td>
        </tr>
      </table>
      <h3>{player1.winner && `${player1name} wins`}</h3>
      <h3>{player2.winner && `${player2name} wins`}</h3>
    </div>
    {player1.winner || player2.winner ? null : <Field klickHandler={klickHandler}/>}
    <div >
      <button className="main-restart" onClick={restart}> Restart</button>
    </div>
    </>

  );
};

export default ChickenDinner;