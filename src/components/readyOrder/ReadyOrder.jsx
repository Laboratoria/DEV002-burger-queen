import "./readyOrder.css";
import { useLocation } from "react-router-dom";

function ReadyOrder({ data, delivery }) {
  //console.log(data);
  const location = useLocation();
  //console.log(location.pathname);

  return (
    <>
      <div className="containerReadyOrder">
        <section className="headerOrderReady">
          <p>CLIENTE : {data.client}</p>
        </section>
        <section>
          <p>PEDIDO:</p>
          <div>
            {data.order.map((element) => {
              //console.log(element);
              return (
                <div key={element.id}>
                  <p>{element.count}</p>
                  <p>{element.name}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="containerTimerButton">
          <p>{data.date.toDate().toLocaleDateString()}</p>
          <button
            className={
              location.pathname === "/chef"
                ? "buttonOkReady"
                : "buttonOkReady-Attention"
            }
            onClick={() => delivery(data)}
          >
            OK
          </button>
        </section>
      </div>
    </>
  );
}

export default ReadyOrder;
