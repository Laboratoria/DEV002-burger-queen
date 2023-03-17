import Button from "../button/Button";
import "./neworder.css";
import NewProduct from "../newProduct/newProduct";

function NewOrder({ array, count }) {
  console.log(array)
  return (
    <>
      <div>
        <div className="containerNeworder">
          <input
            type="text"
            name="client"
            placeholder="nombre del cliente"
            className="client"
          />
          <div className="orderClient">
            {array.map((product) => 
              <NewProduct key={product.id} data={product} />
            )}
          </div>
          <div className="containerBill">
            <p>TOTAL</p>
            <p>
              S/.<span>0</span>
            </p>
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
