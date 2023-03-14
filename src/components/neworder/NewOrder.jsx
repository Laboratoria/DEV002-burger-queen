import Button from "../button/Button";
import "./neworder.css";

function NewOrder() {
  return (
    <>
      <div>
        <div className="containerNeworder">
          <input type="text" name="client" placeholder="nombre del cliente" className="client" />
          <div className="orderClient">productos</div>
          <div className="containerBill">
            <p>TOTAL</p>
            <p>S/. <span>0</span> </p>
          </div>
        </div>
        <div className="buttonCocina">
          <Button name={"Enviar a cocina"} />
        </div>
      </div>
    </>
  );
}

export default NewOrder;
