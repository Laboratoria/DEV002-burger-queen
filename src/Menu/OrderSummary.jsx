import React from "react";
import Swal from "sweetalert2";
import './Menu.scss';


const OrderSummary = ({ addOrder, setAddOrder }) => {

    const priceProducts = addOrder.map(product => {
        /* Valida el producto + el precio del producto */
     if (product.price !== undefined) {
            return product.price * product.amount;
        }
        return 0;
    })
    /* Retorna la suma acumulada de prirceProducts para hallar el precio total del pedido */
    const totalOrderPrice = priceProducts.reduce((price, sumPrice) => price + sumPrice, 0);

    const deleteOrder = () => {
        Swal.fire({
            title: '¿Estás seguro de eliminar el pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#825F45',
            cancelButtonColor: '#797D62',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                setAddOrder([]);
            }
        })
    }

    return (
        <>
            <section className="Resumen">
                <h3 className="res-ped">RESUMEN DE PEDIDO</h3>
                <section className='delete-order'>
                    <p onClick={deleteOrder}>CANCELAR</p>
                </section>
                {addOrder.map(product =>
                    <div key={product.id} >
                        <section className='product-summary'>
                            <p>{product.name}</p>
                            <p>{product.amount}</p>
                            <p>$ {product.price !== undefined ? product.price * product.amount : ''}</p>
                        </section>
                    </div>
                )}
                <div className='total-order-price'>
                    <h4>Total $ {totalOrderPrice}</h4>
                </div>
            </section>
        </>
    )

}

export default OrderSummary;