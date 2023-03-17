import imgError from "../../assets/error.png";
import imgMenos from "../../assets/menos.png";
import imgAnadir from "../../assets/anadir.png";
import "./newProduct.css"


function NewProduct({ data }) {
  const { name, cost, count, subtotal } = data;
  return (
    <div className="containerNewProduct">
      <div>
        <img src={imgAnadir} alt="" className="btn"/>
        <span>{count}</span>
        <img src={imgMenos} alt="" className="btn" />
      </div>
      <p>{name}</p>
      <p>s/.{cost}</p>
      <p>{subtotal}</p>
      <img src={imgError} alt="" className="btn" />
    </div>
  );
}

export default NewProduct;
