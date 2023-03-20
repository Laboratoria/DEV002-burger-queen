import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "./orders.css";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="orderReadyGiven">
        <section className="orders orderReadyOrder">
          <h2>PEDIDOS LISTOS</h2>
          <div></div>
        </section>
        <section className="orders orderGiven">
          <h2>PEDIDOS ENTREGADOS</h2>
          <div></div>
        </section>
      </div>
      <div className="btnNewOrder">
        <Button
          name={"Nueva Orden"}
          onClick={() => {
            navigate("/attention");
          }}
        ></Button>
      </div>
    </>
  );
}

export default Orders;
