const ChickenDinner = (player1, player2) => {
  return (
    <div>
      <h1>{player1.winner && "Player One wins"}</h1>
      <h1>{player2.winner && "Player Two wins"}</h1>
    </div>
  );
};

export default ChickenDinner;