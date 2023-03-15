import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./fb-config";

export default function SendOrder({ name, table, totalOrder, pedido, setName, setTable, setPedido, toggle }) {

    const sendOrders = () => {
      const docRef = addDoc(collection(db, "orders"), {
        name: name,
        table: table,
        status: 'pending',
        pedidos: pedido,
        order: totalOrder,
        timestamp: new Date()
      }).then(() => {
        setPedido([]);
        setName('');
        setTable('');
      });
      return docRef      
    }

    return (
        <button onClick={() => sendOrders() && toggle()} className="buttonAccept">Enviar</button>
      )
    }