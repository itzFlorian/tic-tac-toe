const GameOver = ({restart}) => {
  return (
    <div>
      <h1>Spiel zuende</h1>
      <button onClick={restart}> Restart</button>
    </div>
  );
};

export default GameOver;