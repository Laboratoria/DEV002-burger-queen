import Product from "../product/Product";
import { useState, useEffect } from "react";
import products from "../../../menu.json";
import "./menu.css";
import imghamburguesa from "../../assets/hamburguesa.png";
import imgbebida from "../../assets/bebida.png";
console.log(products);
// const propiedad = data.products.bebidas
// console.log(propiedad)

function Menu() {
  const [choose, setChoose] = useState("hamburguesas");
  // const [categoria, setCategoria] = useState(products.products.hamburguesas)

  const handleClick = (selectedCategory) => {
    setChoose(selectedCategory);
  };

  const categoria = products.menu[choose];
  //console.log(categoria);

  // useEffect(() => {
  //   setCategoria(products.products[choose]);
  // },[choose]);

  return (
    <>
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
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
