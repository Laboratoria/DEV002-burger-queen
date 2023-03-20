import "./header.css";
import logo from "../../assets/logo.png";
import imgLogout from "../../assets/cerrar-sesion.png";
import Time from "./Time";
import { logoutUser } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Header({ user }) {
  const navigate = useNavigate();
  const today = new Date();
  const date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

function logout(){
  const confirmLogout = confirm("¿Desea cerrar sesión?")
  if(confirmLogout){
    console.log("logout")
    logoutUser();
    navigate("/")
  }
}

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo del restaurant" className="logoHeader" />
        <p>{"Hola, Usuario"}</p>
        <div>
          <p>{date}</p>
          <Time />
        </div>
        <img src={imgLogout} alt="boton cerrar sesión" className="imgLogout" onClick={logout} />
      </div>
    </>
  );
}

export default Header;
