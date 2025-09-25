import "./Button.css";

const Button = (props) => {
  return (
    <div className="Button">
      <button className={props.classname} onClick={props.function}>
        {props.value}
      </button>
    </div>
  );
};

export default Button;
