const Field = ({restart, klickHandler}) => {
  return (
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
);
};

export default Field;