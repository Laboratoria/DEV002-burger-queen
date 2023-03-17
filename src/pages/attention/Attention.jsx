import "./attention.css";
import Header from "../../components/header/Header.jsx";
import Button from "../../components/button/Button";
import NewOrder from "../../components/neworder/NewOrder.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Product from "../../components/product/Product.jsx";
import imghamburguesa from "../../assets/hamburguesa.png";
import imgbebida from "../../assets/bebida.png";
import products from "../../../menu.json";

function Attention() {
  const navigate = useNavigate();

  const [choose, setChoose] = useState("hamburguesas");

  const handleClick = (selectedCategory) => {
    setChoose(selectedCategory);
  };

  const categoria = products.menu[choose];
  //console.log(categoria);

  //-------------------------prueba
  const [order, setOrder] = useState([]);
  const copyOrder = [...order];
  //const [count, setCount] = useState(1);

  function addProduct(product) {
    const find = copyOrder.findIndex((e) => e.id === product.id);
    console.log(find);
    if (find === -1) {
      const newProduct = {...product, count:1 , subtotal: product.cost}
      setOrder(copyOrder.concat(newProduct));
    } else {
      //setCount(prev =>  prev.map((i) => i.id === product.id ? { ...i, count: i.count + 1} : i))
      copyOrder[find].count += 1;
      //console.log(copyOrder[find].count += 1);
      copyOrder[find].subtotal = copyOrder[find].count * copyOrder[find].cost;
      setOrder(copyOrder);
    }
    // setOrder(find ? copyOrder : copyOrder.concat(product));
    // setCount(find ? (count + 1 ): count)
    console.log(product);

  }


  return (
    <>
      <Header />
      <div className="containerMenuNewOrder">
        <div className="containerMenu">
          <div className="buttonCategories">
            <button
              onClick={() => {
                handleClick("hamburguesas");
              }}
              className="categoryH"
            >
              <img
                src={imghamburguesa}
                alt="imagen de la categoria Hamburguesas"
              />
              Hamburguesas
            </button>
            <button
              onClick={() => {
                handleClick("bebidas");
              }}
              className="categoryB"
            >
              <img src={imgbebida} alt="imagen de la categoria Bebidas" />
              Bebidas
            </button>
          </div>
          <div className="containerProducts">
            {categoria.map((product) => (
              <Product key={product.id} data={product} onClick={addProduct} />
            ))}
          </div>
        </div>
        <div>
          <NewOrder array={order} />
        </div>
      </div>
      <div className="buttonViewOrder">
        <Button
          name="Pedidos Listos"
          onClick={() => {
            navigate("/orders");
          }}
        />
      </div>
    </>
  );
}

export default Attention;

// function addProduct(product) {

//   const find = copyOrder.findIndex(e => (e.id === product.id))
//   console.log(find)
//   if(find === -1){
//     setOrder(copyOrder.concat(product))
//   } else{
//     //setCount(prev =>  prev.map((i) => i.id === product.id ? { ...i, count: i.count + 1} : i))
//     console.log(copyOrder[find])
//     console.log(setCount(count + 1))
//     setOrder(copyOrder)
//   }
//     // setOrder(find ? copyOrder : copyOrder.concat(product));
//     // setCount(find ? (count + 1 ): count)
//     console.log(product)

//     // if(order.find(e => e.id === product.id)){
//     //   console.log("estas"+ product.id)
//     //   setOrder(order)
//     //   setCount( count + 1)
//     // }

// }
