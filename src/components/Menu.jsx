import Product from "./Product";
import { useState, useEffect } from "react";
import products from "../../menu.json";
// import products from "../../products.json";
import Button from "./Button.jsx";

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
      <Button
        name="Hamburguesas"
        onClick={() => {
          handleClick("hamburguesas");
        }}
      ></Button>
      <Button
        name="Bebidas"
        onClick={() => {
          handleClick("bebidas");
        }}
      ></Button>
      <div>
        {categoria.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        {/* {products.products.hamburguesas.map((product) => (
          <Product key={product.id} data={product} />
        ))} */}
      </div>
    </>
  );
}

export default Menu;
