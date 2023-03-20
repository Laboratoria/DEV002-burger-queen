import Header from "../../components/header/Header";
import PendingOrder from "../../components/pendingorder/PendingOrder";
import "./chef.css";
import { getDocs, orderCollection } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import ReadyOrder from "../../components/readyOrder/readyOrder";

function Chef() {
  const [order, setOrder] = useState([]);

  const getOrder = async () => {
    const data = await getDocs(orderCollection);
    //console.log(data.docs);

    setOrder(
      data.docs.map((doc) =>
        //console.log(doc.data()),

        ({ ...doc.data(), id: doc.id })
      )
    );
    //console.log(array)
    //console.log(order);
    //const singleOrder = order.map(element => console.log(element))
  };

  useEffect(() => {
    getOrder();
  }, []);

  // cambio de estao de la orden

  const [ready, setReady] = useState([]);
  const copyReady = [...ready];

  const handleOk = (orderU) => {
    console.log(orderU);
    //const singleOrder = order.map(element => console.log(element))
    console.log(ready);
    const index = copyReady.findIndex((e) => e.id === orderU.id);
    console.log(index);
    //setReady(copyReady.concat(order))
    if (index === -1) {
      const newOrder = { ...orderU};
      setReady(copyReady.concat(newOrder));

      order.splice(index, 1);
      setOrder(order);

    }

  };

  //console.log(ready)
  return (
    <>
      <Header></Header>
      <div className="containerPendingReady">
        <section className="orders orderPending">
          <h2>PEDIDOS PENDIENTES</h2>
          <div>
            {order.map((element) => (
              <PendingOrder key={element.id} data={element} ready={handleOk} />
            ))}
          </div>
        </section>
        <section className="orders orderReady">
          <h2>PEDIDOS LISTOS</h2>
          <div>
            {console.log(ready)}
            {/* { ready.map((element)=> (
              <ReadyOrder key={element.id} data={element}/>
            ))} */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Chef;
