import Header from "../../components/header/Header";
import PendingOrder from "../../components/pendingorder/PendingOrder";
import "./chef.css";
import { orderCollection, updateDoc, doc, db, query, orderBy} from "../../firebase/firebase";
import { useEffect, useState } from "react";
import ReadyOrder from "../../components/readyOrder/ReadyOrder";
import { onSnapshot } from "firebase/firestore";

function Chef() {
  const [order, setOrder] = useState([]);

  useEffect(()=>{
    const orderData = query(orderCollection, orderBy("date","asc"))
    //console.log(orderData)
    onSnapshot(orderData, (snapshot)=>{
          const docFilter = snapshot.docs.filter((doc)=> (doc.data().state === "pending"))
          //console.log(docFilter)
          setOrder(docFilter.map((doc)=> ({...doc.data(), id: doc.id})))
    })
  },[])

  //console.log(order)

  const [orderReady, setOrderReady] = useState([]);

  useEffect(()=>{
    const orderData = query(orderCollection, orderBy("date","desc"))
    //console.log(orderData)
    onSnapshot(orderData, (snapshot)=>{
          const docFilter = snapshot.docs.filter((doc)=> (doc.data().state === "ready"))
          //console.log(docFilter)
          setOrderReady(docFilter.map((doc)=> ({...doc.data(), id: doc.id})))
    })
  },[])



const handleStateReady = async (order) => {
  //console.log(order)
  const newOrder= doc(db, "NewOrder", order.id);
  const data = {state: "ready"}
  await updateDoc(newOrder,data)
}


  return (
    <>
      <Header></Header>
      <div className="containerPendingReady">
        <section className="orders orderPending">
          <h2>PEDIDOS PENDIENTES</h2>
          <div className="divOrdersPending">
            {order.map((element) => (
              <PendingOrder key={element.id} data={element} ready={handleStateReady} />
            ))}
          </div>
        </section>
        <section className="orders orderReady">
          <h2>PEDIDOS LISTOS</h2>
          <div className="divOrdersReady">
            {/* {ready.map(e => console.log(e))} */}
            { orderReady.map((element)=> (
              <ReadyOrder key={element.id} data={element}/>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Chef;
