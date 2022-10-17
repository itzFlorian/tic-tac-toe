import Field from "./Field";

const ChickenDinner = ({player1, player2, player1name, player2name, klickHandler, restart}) => {
  return ( 
    <>
    <div>
      <p>{`${player1name} wins: ${player1.wins}`}</p>
      <p>{`${player2name} wins: ${player2.wins}`}</p>
      <h3>{player1.winner && `${player1name} wins`}</h3>
      <h3>{player2.winner && `${player2name} wins`}</h3>
    </div>
    <Field restart={restart} klickHandler={klickHandler}/>
    </>

  );
};

export default ChickenDinner;