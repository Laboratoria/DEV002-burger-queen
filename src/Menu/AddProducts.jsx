import { useState } from "react";
import signoMas from "../Imagenes/signoMas.png"
import signoMenos from "../Imagenes/signoMenos.png"
import './Menu.scss'

const AddProducts = ({ dataProduct, addOrder, setAddOrder }) => {
    const [count, setCount] = useState(0);
    // console.log(dataProduct, 'addProducts')

    const addToCart = (idDataProduct) => {
        /* Devuelve el índice del primer elemento del array que cumpla con el id seleccionado */
        const indexFound = addOrder.findIndex(item => item.id === idDataProduct)
        /* Comprueba si índice del elemento se encuentra en el array */
        if (indexFound !== -1) {
            /* Se trae el elemento que se encuentra en la posición indexFound */
            const orderFound = addOrder[indexFound];
            /* Toma los elementos del lado izquierdo y derecho del elemento que cumple con la condición */
            const leftArray = addOrder.slice(0, indexFound);
            const rightArray = addOrder.slice(indexFound + 1, addOrder.length);
            /* Agregamos los elementos a un array y sumamos 1 al conteo del elemento que cumple con la condición */
            setAddOrder([...leftArray, { ...orderFound, amount: orderFound.amount + 1 }, ...rightArray])
        } else {
            /* Si el elemento no se encuentra en el array agrega el elemento al array con amount = 1 */
            setAddOrder([...addOrder, { ...dataProduct, amount: 1 }])
        }
    }

    const removeToCart = (idDataProduct) => {
        /* Cuando el valor de amount llegue a 0 se elimina el elemento del array */
        const indexFound = addOrder.findIndex(item => item.id === idDataProduct)
        setAddOrder(addOrder.filter(item => item.amount >= 1));
        if (indexFound !== -1) {
            const orderFound = addOrder[indexFound];
            const leftArray = addOrder.slice(0, indexFound);
            const rightArray = addOrder.slice(indexFound + 1, addOrder.length);
            if (orderFound.amount >= 1) {
                setAddOrder([...leftArray, { ...orderFound, amount: orderFound.amount - 1 }, ...rightArray])
            }
        }
    }

    /* Disminuir cantidades en el contador */
    const subtractCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    
    return (
        <>
            <section className='sect-btn-amount'>
                <img src={signoMenos} alt='menos' className="signoMenos" onClick={() => {
                    removeToCart(dataProduct.id);
                    subtractCount()
                }}></img>
                <span className="cantidadProducto">{count}</span>
                <img src={signoMas} alt='mas' className="signoMas" onClick={() => {
                    addToCart(dataProduct.id);
                    setCount(count + 1)
                }}></img>
            </section>
        </>
    )
}

export default AddProducts;