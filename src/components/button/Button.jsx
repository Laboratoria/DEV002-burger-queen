import "./button.css";

function Button({ name, onClick, color, img=""  }) {
  // pasar props para img y color para ir variando
  return (
    <button onClick={onClick} className="button">
      {name}
      <img src={img} alt="" />
    </button>
  );
}

export default Button;
