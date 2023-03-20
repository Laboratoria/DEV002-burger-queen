import "./pendingOrder.css";

function PendingOrder(data) {
  //const { order, client, date } = data
  //console.log(data.data.client);
  return (
    <>
      <div className="containerPendingOrder">
        <section className="headerOrderPending">
          <p>{data.data.client}</p>
          <p>timer</p>
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
