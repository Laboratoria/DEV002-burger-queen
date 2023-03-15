import "./button.css";

function Button({ name, onClick }) {
  // pasar props para img y color para ir variando
  return (
    <button onClick={onClick} className="button">
      {name}
    </button>
  );
}

export default Button;
