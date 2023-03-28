import Button from "../button/Button";
import "./neworder.css";
import NewProduct from "../newProduct/newProduct";
import { useState } from "react";
import { addDoc, orderCollection, Timestamp } from "../../firebase/firebase";
import Swal from "sweetalert2";

function NewOrder({ array, total, add, subtract, delet, cleanArray }) {
  //console.log(array)
  const [client, setClient] = useState("");

  async function handleClick() {
    if (array.length === 0) {
      Swal.fire({
        icon: "warning",
        iconColor: "#fe5f55",
        text: "No ingreso ningun producto",
        confirmButtonColor: "#fe5f55",
      })
    } else if (client === "") {
      messageClient.innerHTML = "ingrese el nombre del cliente";
    } else {
      const sweet = Swal.fire({
        icon: "question",
        iconColor: "#fe5f55",
        html: "<p>¿Desea <b>enviar</b> el pedido?</p>",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#21262b",
        confirmButtonText: "Enviar",
        confirmButtonColor: "#fe5f55",
      }).then( async (response) => {
        if(response.isConfirmed){
          try {
            const addOrder = await addDoc(orderCollection, {
              client: client,
              order: array,
              date: Timestamp.fromDate(new Date()),
              state: "pending",
              milisegundos: Date.now(),
            });
            if (addOrder) {
              console.log("se envio a cocina");
              // console.log(valueClient)
              // valueClient.value = ""
              // orderClient.innerHTML = "No hay productos seleccionados :/"
              cleanOrder();
            }
          } catch (error) {
            console.log(error);
          }
        }
      })

    }
  }

  function handleChange() {
    messageClient.innerHTML = "";
  }

  function cleanOrder(){
      setClient("");
      cleanArray()
  }

  return (
    <>
        <div className="containerNeworder">
          <input
            type="text"
            name="client"
            placeholder="nombre del cliente"
            className="client"
            onChange={(e) => { setClient(e.target.value)}}
            value = {client}
            onKeyUp={handleChange}
            id="valueClient"
          />
          <span id="messageClient"></span>
          <div className="headerNewProduct">
            <p>Cantidad</p>
            <p>Producto</p>
            <p className="subtotalH">Sub Total</p>
          </div>
          <div className="orderClient" id="orderClient">
            {array.length === 0 
            ? <p className="messageOrderClient"> No hay productos seleccionados :/</p>  
            : ""}
            {array.map((product) => (
              <NewProduct
                key={product.id}
                data={product}
                add={add}
                subtract={subtract}
                delet={delet}
              />
            ))}
          </div>
          <div className="containerBill">
            <p>TOTAL</p>
            <p> S/.<span>{total}</span></p>
          </div>
        </div>
        <div className="buttonCocina">
          <Button name={"Cancelar orden"} onClick={cleanOrder} />
          <Button name={"Enviar a cocina"} onClick={handleClick} /> 
        </div>
    </>
  );
}

export default NewOrder;
