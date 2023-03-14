import Header from "../../components/header/Header.jsx";
// //import { Product } from "./componentes/product"
import Menu from "../../components/menu/Menu";
import Button from "../../components/button/Button";
import NewOrder from "../../components/neworder/NewOrder.jsx";
import "./attention.css";
import { useNavigate } from "react-router-dom";

function Attention() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="containerMenuNewOrder">
        <Menu />
        <NewOrder />
      </div>
      <Button
        name="Pedidos Listos"
        onClick={() => {
          navigate("/orders");
        }}
      />
    </>
  );
}

export default Attention;
