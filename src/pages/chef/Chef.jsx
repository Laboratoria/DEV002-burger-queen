import Header from "../../components/header/Header";
import PendingOrder from "../../components/pendingorder/PendingOrder";
import "./chef.css";
import { getDocs, orderCollection, updateDoc, doc, db, query, where, orderBy} from "../../firebase/firebase";
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

  // const getOrder = async () => {
  //   const data = await getDocs(orderCollection);
  //   //console.log(data.docs);
    
  //   const filterOrderPending = data.docs.filter((doc)=> (doc.data().state === "pending"))
  //   setOrder( 
     
  //     filterOrderPending.map((doc) =>
  //       //console.log(doc.data())
  //       ({ ...doc.data(), id: doc.id }))
      
  //   );
  
  //   //console.log(order);
  //   //const singleOrder = order.map(element => console.log(element))
  // };

  // useEffect(() => {
  //   //getOrder();
  //   getOrderReady();
  // }, []);

  // cambio de estado de la orden

const handleStateReady = async (order) => {
  console.log(order)
  const newOrder= doc(db, "NewOrder", order.id);
  const data = {state: "ready"}
  await updateDoc(newOrder,data)
}



const getOrderReady = async () => {

  const q = query(orderCollection, orderBy("ready"))
  //console.log(q)
  const data = await getDocs(q);
   //console.log(data.docs);
  // console.log(order)
  // setOrder(
  //   data.docs.map((doc) =>
  //     //console.log(doc.data())

  //     ({ ...doc.data(), id: doc.id })
  //   )
  // );
};


  //------------------------------

  // const [ready, setReady] = useState([]);
  // const copyReady = [...ready];

  // const handleOk = (orderU) => {
  //   console.log(orderU);
  //   //const singleOrder = order.map(element => console.log(element))
  //   console.log(ready);
  //   const index = copyReady.findIndex((e) => e.id === orderU.id);
  //   console.log(index);
  //   //setReady(copyReady.concat(order))
  //   if (index === -1) {
  //     const newOrder = { ...orderU};
  //     setReady(copyReady.concat(newOrder));

  //     order.splice(index, 1);
  //     setOrder(order);
  //   }

  // };

  //console.log(ready)

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
