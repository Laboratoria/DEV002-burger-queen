import "./header.css";
import logo from "../../assets/logo.png";
import imgLogout from "../../assets/cerrar-sesion.png";

function Header({ user }) {
  const today = new Date();
  //   console.log("hoy", today.toUTCString());
  //   const m = today.getMonth() + 1;
  // const mes = (m < 10) ? '0' + m : m;
  //   console.log('Fecha: '+today.getDate(),'/' +mes,'/'+today.getYear())

   const date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const  hour = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//  const showTime = () => {
//     // today = new Date();
//     const hour = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     console.log(hour)
//     return hour
//   }

  //console.log(showTime())

//   const prueba = setInterval(() => {
//     const hour = today.getHours();
//     const minutes = today.getMinutes();
//     const seconds = today.getSeconds();
//      return seconds
    
//   }, 1000);

//  console.log(prueba)
  // const hourInterval = setInterval(today.getSeconds() , 1000);
  // console.log(hourInterval)

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
