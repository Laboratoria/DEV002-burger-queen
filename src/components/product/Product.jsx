import "./product.css";

function Product({ data }) {
  //const show = type ? "hamburguesa" : "no"
  //console.log(show)
  const { name, cost } = data;
  return (
    <div className="containerProduct">
      <button className="containerProduct">
        <p>{name}</p>
        <p>{cost}</p>
      </button>
    </div>
  );
}

export default Product;
