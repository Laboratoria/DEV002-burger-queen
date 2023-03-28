import {useEffect, useState} from "react";
import AddProducts from "./AddProducts";
import OrderSummary from "./OrderSummary";
import AddToCart from "./AddToCart";
import Logo from "../Imagenes/logoLasaña.png";
import axios from 'axios';
import './Menu.scss';

const Menu = () => {
    const [data, setData] = useState([]);
    const [addToOrder, setAddToOrder] = useState([]);
    const [person, setPerson]=useState('');
    const [table, setTable]=useState('Mesa');

    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                setData(res.products)
            })
    }, [])

    const onCustomerName = (event) => {
        setPerson(event.target.value);
    }
    const onTableSelect = (event) => {
        setTable(
            event.target.value
        );
    }

    return (
        <>
            <main className="Menu">
                <img className="logoLasañaMenu" src={Logo} alt="logoLasagnaHouse" />
                <a className="opcionInicio" href='/'><h3>INICIO</h3></a>
                <a className="opcionPedidos" href='/order'><h3>PEDIDOS</h3></a>
            </main>

            <div className='sect-input'>
                <input
                    type='text'
                    placeholder='NOMBRE DEL CLIENTE'
                    className='input-name'
                    onChange={onCustomerName}
                />
                <select 
                className='num-mesa'
                onChange={onTableSelect}
                >
                    <option disabled value='Mesa'>Mesa</option>
                    <option value='Mesa1'>Mesa 1</option>
                    <option value='Mesa2'>Mesa 2</option>
                    <option value='Mesa3'>Mesa 3</option>
                    <option value='Mesa4'>Mesa 4</option>
                    <option value='Mesa5'>Mesa 5</option>
                </select>
            
            </div>
            <section className="containerMenu">
            <h2 className="menuPrincipal">MENÚ</h2>
            <section className="container-comidas">
                {data.filter(product => product.category.includes("Comida")).map(items => (
                    <div className="comidas-div" key={items.id}>
                        <p className="nombreProd">{items.name}</p>
                        <img className="imgLasaña" src={items.img} alt='' />
                        <AddProducts
                                        dataProduct={items}
                                        addOrder={addToOrder}
                                        setAddOrder={setAddToOrder}
                                        personName={person}
                                    />         
                        <p className="precio">${items.price}</p>          
                    </div>
                ))}
            </section>
            <h2 className="bebidas">BEBIDAS</h2>
            <section className="container-bebidas">
                {data.filter(product => product.category.includes("Bebidas")).map(items => (
                    <div className="bebidas-div" key={items.id}>
                        <p className="nombreProducto">{items.name}</p>
                        <img className="imgBebidas" src={items.img} alt='' />
                        <AddProducts
                                        dataProduct={items}
                                        addOrder={addToOrder}
                                        setAddOrder={setAddToOrder}
                                        personName={person}
                                    />      
                        <p className="precioBebidas">${items.price}</p>
                    </div>
                ))}
            </section>
            <div className='order-summary'>
                    <OrderSummary
                        addOrder={addToOrder}
                        setAddOrder={setAddToOrder}
                    />
                </div>
                <AddToCart
                addOrder={addToOrder}
                tableSelect={table}
                personName={person}
                />
            </section>

            <footer>@2023 - Erika Ríos Suesca</footer>
        </>
    )
};

export default Menu;