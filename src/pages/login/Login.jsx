import "./login.css";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <>
      <div className="containerLogin">
        <img src={logo} alt="logo food express" className="logoLogin" />
        <p>Por favor llena los siguientes datos para iniciar sesión</p>
        <form action="" className="formLogin">
          <input type="text" placeholder="ana@gmail.com" className="" />
          <span></span>
          <input type="password" placeholder="contraseña" className="" />
          <span></span>
          <button className="button-login">INICIA SESIÓN</button>
        </form>
      </div>
    </>
  );
}

export default Login;
