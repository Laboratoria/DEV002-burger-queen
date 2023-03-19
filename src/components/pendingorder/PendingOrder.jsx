function PendingOrder(data) {
  //const { order, client, date } = data
  console.log(data.data.client);
  return (
    <>
      <div>
        <section>
          <p>{data.data.client}</p>
          <p>timer</p>
        </section>
        <section>
          <p>Pedido</p>
          <div>
            {data.data.order.map((element) => {
                console.log(element.count);
              <div key={element.id}>
                <p>{element.count}</p>
                <p>{element.name}</p>
              </div>
            })}
          </div>
        </section>
        <section>
          <p>{data.data.date.toDate().toLocaleDateString()}</p>
        </section>
        <button>OK</button>
      </div>
    </>
  );
}

export default PendingOrder;
