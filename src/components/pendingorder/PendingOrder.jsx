import "./pendingOrder.css";
import Timer from "./Timer";
import { useState } from "react";

function PendingOrder(data) {
  //const { order, client, date } = data
  //console.log(data.data.client);
// const [timer, setTimer] = useState({ s:0, m:0, h:0})
// console.log(timer)

// const updatedS = timer.s


  return (
    <>
      <div className="containerPendingOrder">
        <section className="headerOrderPending">
          <p>{data.data.client}</p>
          <Timer/>
        </section>
        <section>
          <p>Pedido</p>
          <div>
            {data.data.order.map((element) => {
              console.log(element.name);
              <div key={element.id}>
                <p>{element.count}</p>
                <p>{element.name}</p>
              </div>;
            })}
          </div>
        </section>
        <section className="containerTimerButton">
          <p>{data.data.date.toDate().toLocaleDateString()}</p>
          <button className="buttonOk">OK</button>
        </section>
      </div>
    </>
  );
}

export default PendingOrder;
