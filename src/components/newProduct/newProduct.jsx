import imgError from "../../assets/error.png";
import imgMenos from "../../assets/menos.png";
import imgAnadir from "../../assets/anadir.png";
import "./newProduct.css";

function NewProduct({ data, add, subtract, delet }) {
  const { name, count, subtotal } = data;
  return (
    <div className="containerNewProduct">
      <div className="containerCount">
        <img
          src={imgAnadir}
          alt=""
          className="btn add"
          onClick={() => add(data)}
        />
        <span>{count}</span>
        <img
          src={imgMenos}
          alt=""
          className="btn subtract"
          onClick={() => subtract(data)}
        />
      </div>
      <p className="product">{name}</p>
      <p className="subTotal">s/.{subtotal}</p>
      <img
        src={imgError}
        alt=""
        className="btn delete"
        onClick={() => delet(data)}
      />
    </div>
  );
}

export default NewProduct;
