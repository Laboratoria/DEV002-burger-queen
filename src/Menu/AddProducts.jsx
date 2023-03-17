import { useState } from "react";

const AddProducts = ({ dataProduct, addOrder, setAddOrder }) => {
    const [count, setCount] = useState(0);

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
}
