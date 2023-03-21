import "./readyOrder.css";
import { getDocs, orderCollection, updateDoc, doc, db, query, orderBy,where } from "../../firebase/firebase";
import { useEffect, useState } from "react";


function ReadyOrder({ data }) {
  console.log(data);
  const [order, setOrder] = useState([]);

  const getOrderReady = async () => {

    const q = await query(orderCollection, where("state", "=", "ready"))
    console.log(q)
    const data = await getDocs(orderCollection);
    console.log(data.docs);
    console.log(order)
    setOrder(
      data.docs.map((doc) =>
        //console.log(doc.data())

        ({ ...doc.data(), id: doc.id })
      )
    );
  
    //console.log(order);
    //const singleOrder = order.map(element => console.log(element))
  };

  useEffect(() => {
    getOrderReady();
  }, []);


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
