import "./header.css";
import logo from "../../assets/logo.png";
import imgLogout from "../../assets/cerrar-sesion.png";
import { useState } from "react";
import Time from "../Time"


function Header({ user }) {
  const today = new Date();
  //const [ hora, sethora] = useState("")
  //   console.log("hoy", today.toUTCString());
  //   const m = today.getMonth() + 1;
  // const mes = (m < 10) ? '0' + m : m;
  //   console.log('Fecha: '+today.getDate(),'/' +mes,'/'+today.getYear())

  const date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  //const hour = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // setInterval(() => {
  //   const hourN = today.getHours();
  //   const minutes = today.getMinutes();
  //   const seconds = today.getSeconds();
  //   const time = hourN + ":" + minutes + ":" + seconds;
  //   sethora(time)
  // }, 1000);

  //console.log(hora);
  // const hourInterval = setInterval(today.getSeconds() , 1000);
  // console.log(hourInterval)

  return (
    <>
      <div className="header">
        <img src={logo} alt="logo del restaurant" className="logoHeader" />
        <p>{"Hola, Usuario"}</p>
        <div>
          <p>{date}</p>
          <Time/>
        </div>
        <img src={imgLogout} alt="boton cerrar sesión" className="imgLogout" />
      </div>
    </>
  );
}

export default Header;
