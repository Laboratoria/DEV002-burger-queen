import "./pendingOrder.css";
import Timer from "./Timer";

function PendingOrder({ data, ready }) {
  // const dataOrder = data.data
  //const { order, client, date } = dataOrder
  //console.log(prop);

  return (
    <>
      <div className="containerPendingOrder">
        <section className="headerOrderPending">
          <p>CLIENTE : {data.client}</p>
          <Timer timerOrder={data.milisegundos} />
        </section>
        <section className="divPedido">
          <p>PEDIDO:</p>
          <div className="divOrder">
            {data.order.map((element) => {
              //console.log(element);
              return (
                <div key={element.id} className="divOrders">
                  {/* <Timer /> */}
                  <p>{element.count}</p>
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="containerTimerButton">
          <p>{data.date.toDate().toLocaleDateString()}</p>
          <button onClick={() => ready(data)} className="buttonOk">
            OK
          </button>
        </section>
      </div>
    </>
  );
}

export default PendingOrder;
