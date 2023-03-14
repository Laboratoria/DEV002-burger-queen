import "./header.css";
import logo from "../../assets/logo.png";
import imgLogout from "../../assets/cerrar-sesion.png";

function Header({ user, time }) {
  const today = new Date();
  //   console.log("hoy", today.toUTCString());
  //   const m = today.getMonth() + 1;
  // const mes = (m < 10) ? '0' + m : m;
  //   console.log('Fecha: '+today.getDate(),'/' +mes,'/'+today.getYear())

  var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var hour = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(date, hour);

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo del restaurant" className="logoHeader" />
        <p>{"Hola, Usuario"}</p>
        <div>
          <p>{date}</p>
          <p>{hour}</p>
        </div>
        <img src={imgLogout} alt="boton cerrar sesión" className="imgLogout" />
      </div>
    </>
  );
}

export default Header;
