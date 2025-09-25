import "./Rules.css";
import rulesImage from "../public/images/image-rules.svg";
import closeIcon from "../public/icons/icon-close.svg";

export default function Rules(props) {
  return (
    <div className="rules-container">
      <div className="navbar">
        <h2>RULES</h2>
        <div className="exit-container" onClick={props.exit}>
          <img src={closeIcon} alt="exit-button" />
        </div>
      </div>
      <div className="rules-image">
        <img src={rulesImage} alt="rules-image" />
      </div>
    </div>
  );
}
