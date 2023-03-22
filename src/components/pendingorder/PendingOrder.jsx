import "./pendingOrder.css";
import Timer from "./Timer";
import { useState } from "react";

function PendingOrder({ data, ready }) {
  // const dataOrder = data.data
  //const { order, client, date } = dataOrder
  //console.log(prop);
  // const [timer, setTimer] = useState({ s:0, m:0, h:0})
  // console.log(timer)
  //console.log(data);
  // const updatedS = timer.s
  // function handleClick(){
  //   onClick(data.dta)
  // }

  return (
    <>
      <div className="containerPendingOrder">
        <section className="headerOrderPending">
          <p>{data.client}</p>
        </section>
        <section>
          <p>Pedido</p>
          <div>
            {data.order.map((element) => {
              //console.log(element);
              return (
                <div key={element.id} >
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
