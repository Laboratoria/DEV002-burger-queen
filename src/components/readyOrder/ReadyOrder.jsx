import "./readyOrder.css";
import {
  getDocs,
  orderCollection,
  updateDoc,
  doc,
  db,
  query,
  orderBy,
  where,
  onSnapshot,
} from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ReadyOrder({ data, delivery }) {
  //console.log(data);
  const location = useLocation();
  //console.log(location.pathname);
  // const [order, setOrder] = useState([]);

  // useEffect(()=>{
  //   const order = query(orderCollection, orderBy("date","asc"))
  //   console.log(order)
  //   onSnapshot(order, (snapshot)=>{
  //         const docFilter = snapshot.docs.filter((doc)=> (doc.data().state === "ready"))
  //         console.log(docFilter)
  //         setOrder(docFilter.map((doc)=> ({...doc.data(), id: doc.id})))
  //   })
  // },[])

  // const docOrder = order.map(element => console.log(element.data()))

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
