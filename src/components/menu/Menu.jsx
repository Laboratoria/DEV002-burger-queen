import Product from "../product/Product";
import { useState, useEffect } from "react";
import products from "../../../menu.json";
// import products from "../../products.json";
import Button from "../button/Button";
import "./menu.css";

//import hamburguesa from "./hamburguesa.png";
//import bebida from "./agua.png";
console.log(products);
// const propiedad = data.products.bebidas
// console.log(propiedad)

function Menu() {
  const [choose, setChoose] = useState("hamburguesas");
  // const [categoria, setCategoria] = useState(products.products.hamburguesas)

  // const show = choose ? "seleccionado" : "no seleccionado";
  // console.log(show);

  const handleClick = (selectedCategory) => {
    setChoose(selectedCategory);
  };

  const categoria = products.menu[choose];
  console.log(categoria);

  // useEffect(() => {
  //   setCategoria(products.products[choose]);
  // },[choose]);

  return (
    <>
      <div className="containerMenu">
        <div className="buttonCategories">
          <Button
            name="Hamburguesas"
            onClick={() => {
              handleClick("hamburguesas");
            }}
            id="buttonMenuH"
          ></Button>
          <Button
            name="Bebidas"
            onClick={() => {
              handleClick("bebidas");
            }}
            id="buttonMenuB"
          ></Button>
        </div>
        <div className="containerProducts">
          {categoria.map((product) => (
            <Product key={product.id} data={product} />
          ))}
          {/* {products.products.hamburguesas.map((product) => (
          <Product key={product.id} data={product} />
        ))} */}
        </div>
      </div>
    </>
  );
}

export default Menu;
