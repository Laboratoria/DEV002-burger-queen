import "./readyOrder.css";

function ReadyOrder({ data }) {
  console.log(data);
  return (
    <>
      <div className="containerReadyOrder">
        <section className="headerOrderReady">
          <p>{data.client}</p>
        </section>
        <section>
          <p>Pedido</p>
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
        </section>
      </div>
    </>
  );
}

export default ReadyOrder;
