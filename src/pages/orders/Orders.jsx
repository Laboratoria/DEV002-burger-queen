import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";


function Orders() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div>
        <section>
            <h2>PEDIDOS LISTOS</h2>
            <div></div>
        </section>
        <section>
            <h2>PEDIDOS ENTREGADOS</h2>
            <div></div>
        </section>
      </div>
      <Button
        name={"Nueva Orden"}
        onClick={() => {
          navigate("/attention");
        }}
      ></Button>
    </>
  );
}

export default Orders;
