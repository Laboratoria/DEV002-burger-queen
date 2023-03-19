import imgError from "../../assets/error.png";
import imgMenos from "../../assets/menos.png";
import imgAnadir from "../../assets/anadir.png";
import "./newProduct.css";

function NewProduct({ data, add, subtract, delet }) {
  const { name, cost, count, subtotal } = data;
  return (
    <div className="containerNewProduct">
      <div>
        <img src={imgAnadir} alt="" className="btn" onClick={() => add(data)} />
        <span>{count}</span>
        <img
          src={imgMenos}
          alt=""
          className="btn"
          onClick={() => subtract(data)}
        />
      </div>
      <p>{name}</p>
      <p>s/.{subtotal}</p>
      <img src={imgError} alt="" className="btn" onClick={() => delet(data)} />
    </div>
  );
}

export default NewProduct;
