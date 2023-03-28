import "./attention.css";
import Header from "../../components/header/Header.jsx";
import Button from "../../components/button/Button";
import NewOrder from "../../components/neworder/NewOrder.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from "../../components/product/Product.jsx";
import imghamburguesa from "../../assets/hamburguesa.png";
import imgbebida from "../../assets/bebida.png";
import products from "../../../menu.json";
import imghome from "../../assets/homeG.png";

function Attention({ user }) {
  const navigate = useNavigate();

  // ------------categoria elegida
  const [choose, setChoose] = useState("hamburguesas");

  const handleClick = (selectedCategory) => {
    setChoose(selectedCategory);
  };

  const categoria = products.menu[choose];
  //console.log(categoria);

  //-------------------------nueva orden y operaciones

  const [order, setOrder] = useState([]);
  const copyOrder = [...order];
  //const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);

  function addProduct(product) {
    const find = copyOrder.findIndex((e) => e.id === product.id);
    //console.log(find);
    if (find === -1) {
      const newProduct = { ...product, count: 1, subtotal: product.cost };
      setOrder(copyOrder.concat(newProduct));
      //setOrder([...copyOrder,newProduct]);
    } else {
      copyOrder[find].count += 1;
      copyOrder[find].subtotal =
        copyOrder[find].count === 1
          ? copyOrder[find].cost
          : copyOrder[find].count * copyOrder[find].cost;
      setOrder(copyOrder);
    }
    //console.log(product);
  }

  useEffect(() => {
    //console.log(order)
    const sumSubtotal = copyOrder.map((e) => e.subtotal);
    //console.log(sumSubtotal);
    //const totalSum = sumSubtotal.reduce((a, b) => a + b, 0)
    setTotal(sumSubtotal.reduce((a, b) => a + b, 0));
    //console.log(totalSum)
  }, [order]);

  function subtractProduct(product) {
    const find = copyOrder.findIndex((e) => e.id === product.id);
    //const newProduct = { ...product, count: 1, subtotal: product.cost };
    //setOrder(copyOrder.concat(newProduct));
    //setOrder([...copyOrder,newProduct]);
    if (find > -1) {
      if (copyOrder[find].count > 1) {
        copyOrder[find].count -= 1;
        copyOrder[find].subtotal =
          copyOrder[find].count === 1
            ? copyOrder[find].cost
            : copyOrder[find].count * copyOrder[find].cost;
      }
      // else if(copyOrder[find].count === 0 ){
      //   copyOrder.splice(find,1)
      // }
    }
    setOrder(copyOrder);
  }

  function deleteProduct(product) {
    const find = copyOrder.findIndex((e) => e.id === product.id);
    //console.log("dlete",find)
    copyOrder.splice(find, 1);
    setOrder(copyOrder);
  }

  return (
    <>
      <Header user={user} />
      <div className="containerMenuNewOrder">
        <div className="containerMenu">
          <div className="buttonCategories">
            <button
              onClick={() => {
                handleClick("hamburguesas");
              }}
              className={choose === "hamburguesas" ? "chooseRed" : ""}
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
              className={choose === "bebidas" ? "chooseRed" : ""}
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
          <NewOrder
            array={order}
            total={total}
            add={addProduct}
            subtract={subtractProduct}
            delet={deleteProduct}
            cleanArray={()=> {
              setOrder([])
            }}
          />
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
      <img
        src={imghome}
        alt="home"
        className="imgHome"
        onClick={() => navigate("/home")}
      />
    </>
  );
}

export default Attention;
