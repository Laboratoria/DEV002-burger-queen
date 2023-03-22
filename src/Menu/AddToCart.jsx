import { db } from '../Firebase/fb-config'
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import './Menu.css';

const AddToCart = ({ addOrder}) => {
    const uploadOrder = async () => {
       await addDoc(collection(db, "pedidos"),
            { ...addOrder, state: 'Enviar a cocina', date: new Date() }
        )
    }

const createOrder = () => {
    uploadOrder();
}
const validateInputName = () => {
   if (addOrder.length === 0) {
        Swal.fire({
            title: '<strong>Por favor agrega un producto</strong>',
            icon: 'error'
        })
    }
    else {
        createOrder()
    }
}
return (
    <>
        
        <section className='save-order'>
            <button
                className='btn-save-order'
                onClick={() => {
                    validateInputName()
                }}
            >
                ENVIAR A COCINA
            </button>
        </section>
    </>
)
}

export default AddToCart