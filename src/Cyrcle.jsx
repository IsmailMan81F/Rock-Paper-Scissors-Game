import { useState } from "react";
import "./Cyrcle.css";

function Cyrcle(props) {
  const [hover, setHover] = useState(false);

  function doing() {
    props.getData({
      name: props.name,
      color: props.color,
      image: props.image,
      chosen: true,
    });
  }

  const boxshadow = "inset 0 6px rgba(0, 0, 0, 0.2), 0 6px rgba(0, 0, 0, 0.2)  "

  return (
    <div
      onClick={doing}
      className="cyrcle"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderColor: props.color,
        boxShadow: boxshadow +  (hover ? ", 0px 0px 30px " + props.hover : ""),
      }}
    >
      <img src={props.image} alt="symbol-logo" />
    </div>
  );
}

export default Cyrcle;
