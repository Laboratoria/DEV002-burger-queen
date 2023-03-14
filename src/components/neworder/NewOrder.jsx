import Button from "../button/Button";
import "./neworder.css";

function NewOrder() {
  return (
    <>
      <div className="containerNeworder">
        <input type="text" name="client" placeholder="nombre del cliente" />
        <div>
          productos elegidos
        </div>
        <div className="containerBill">
          <p>TOTAL</p>
          <span>S/. 20</span>
        </div>
        <Button name={"Enviar a cocina"} />
      </div>
    </>
  );
}

export default NewOrder;
