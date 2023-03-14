import "./button.css";

function Button({ name, onClick, color, img=""  }) {
  // pasar props para img y color para ir variando
  return (
    <button onClick={onClick} className="button">
      {/* <img src={img} alt="" className="imgbutton" /> */}
      {name}
    </button>
  );
}

export default Button;
