import "./product.css";

function Product({ data, onClick, id }) {
  //const show = type ? "hamburguesa" : "no"
  //console.log(show)
  const { name, cost } = data;
  function handleClick() {
    onClick(data);
  }

  return (
    <div className="containerProduct">
      <button onClick={handleClick} className="containerProduct" data-id={id}>
        <p>{name}</p>
        <p>s/.{cost}</p>
      </button>
    </div>
  );
}

export default Product;
