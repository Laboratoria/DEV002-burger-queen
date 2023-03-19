import Header from "../../components/header/Header";
import PendingOrder from "../../components/pendingorder/PendingOrder";
import "./chef.css";
import { getDocs, orderCollection } from "../../firebase/firebase";
import { useEffect, useState } from "react";

function Chef() {
  const [order, setOrder] = useState([]);
     
  const getOrder = async () => {
    const data = await getDocs(orderCollection);
    console.log(data.docs);

    setOrder(data.docs.map((doc) => (
        console.log(doc.data()),

        { ...doc.data(), id: doc.id })));
    //console.log(array)
    //console.log(order);
    console.log(order.map(element => console.log(element)))
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="containerPendingReady">
        <section>
          <h2>PEDIDOS PENDIENTES</h2>
          <div>
            {order.map((element) => (
              <PendingOrder key={element.id} data={element} />
            ))}
          </div>
        </section>
        <section>
          <h2>PEDIDOS LISTOS</h2>
          <div></div>
        </section>
      </div>
    </>
  );
}

export default Chef;
