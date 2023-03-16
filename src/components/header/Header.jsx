import "./header.css";
import logo from "../../assets/logo.png";
import imgLogout from "../../assets/cerrar-sesion.png";
import Time from "./Time";

function Header({ user }) {
  const today = new Date();
  const date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo del restaurant" className="logoHeader" />
        <p>{"Hola, Usuario"}</p>
        <div>
          <p>{date}</p>
          <Time />
        </div>
        <img src={imgLogout} alt="boton cerrar sesión" className="imgLogout" />
      </div>
    </>
  );
}

export default Header;
