const ChickenDinner = ({player1, player2, player1name, player2name, klickHandler, restart}) => {
  return (
    <>    
    <div>
      <p>{`${player1name} wins: ${player1.wins}`}</p>
      <p>{`${player2name} wins: ${player2.wins}`}</p>
      <h3>{player1.winner && `${player1name} wins`}</h3>
      <h3>{player2.winner && `${player2name} wins`}</h3>
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
  </>
  );
};

export default ChickenDinner;