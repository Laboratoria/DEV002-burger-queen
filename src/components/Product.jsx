function Product({ data }) {
  //const show = type ? "hamburguesa" : "no"
  //console.log(show)
  const { name, cost } = data;
  return (
    <div>
      <button>
        <p>{name}</p>
        <p>{cost}</p>
      </button>
    </div>
  );
}

export default Product;
