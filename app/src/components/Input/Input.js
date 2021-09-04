import "./Input.css";

function Input(props) {
  return (
    <input
      className="input"
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={ props.onChange}
      onKeyUp={ props.onChange}
      onBlur={ props.onChange}
    />
  );
}

export default Input;
