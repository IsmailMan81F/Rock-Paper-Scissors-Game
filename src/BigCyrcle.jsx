import "./BigCyrcle.css";



function BigCyrcle(props) {
  const stylingBoxShadow =
    "0 0 0 55px rgba(43, 56, 88, 0.8), 0 0 0 110px rgba(39, 54, 85, 0.6), 0 0 0 165px rgba(34, 51, 81, 0.4),inset 0 6px rgba(0, 0, 0, 0.2), 0 6px rgba(0, 0, 0, 0.2) ";
  return (
    <div
      className="big-cyrcle"
      style={{
        borderColor: props.color,
        boxShadow: props.isWinner == "winner" ? stylingBoxShadow : "",
      }}
    >
      <img src={props.image} alt="symbol-logo" className="bigCyrcleImage" />
    </div>
  );
}

export default BigCyrcle;
