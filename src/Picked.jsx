import "./Picked.css";
import BigCyrcle from "./BigCyrcle";

function Picked(props) {
  return (
    <div className="picked">
      <h3>{props.message}</h3>
      <BigCyrcle
        color={props.color}
        image={props.image}
        isWinner={props.isWinner}
      />
    </div>
  );
}

export default Picked;
