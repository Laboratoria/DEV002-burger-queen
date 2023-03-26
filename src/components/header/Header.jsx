import "./header.css";
import logo from "../../assets/logo.png";
import imgLogout from "../../assets/cerrar-sesion.png";
import Time from "./Time";
import { logoutUser } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Header({ user }) {
  const navigate = useNavigate();
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  function logout() {
    const sweet = Swal.fire({
      icon: "question",
      iconColor: "#fe5f55",
      html: "<p>¿Desea <b>cerrar sesión</b>?</p>",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#21262b",
      confirmButtonText: "Confirmar",
      confirmButtonColor: "#fe5f55",
    }).then((response) => {
      if (response.isConfirmed) {
        console.log("logout");
        logoutUser();
        navigate("/");
      }
    });
  }

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo del restaurant" className="logoHeader" />
        <div>
          {" "}
          Hola,<p className="userConect">{user}</p>
        </div>
        <div>
          <p>{date}</p>
          <Time />
        </div>
        <img
          src={imgLogout}
          alt="boton cerrar sesión"
          className="imgLogout"
          onClick={logout}
        />
      </div>
    </>
  );
}

export default Header;
