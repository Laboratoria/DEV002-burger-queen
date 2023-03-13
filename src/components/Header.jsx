import "./header.css";
import logo from "../assets/logo.png"

function Header({ user, time }) {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo del restaurant" className="logoHeader" />
        <p>{"Hola, Usuario"}</p>
        <p>{"time"}</p>
        <img src="" alt="boton salir" />
      </div>
    </>
  );
}

export default Header;
