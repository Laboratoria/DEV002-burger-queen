import {useEffect, useState} from "react";
import Logo from "../Imagenes/logoLasaña.png";
import signoMas from "../Imagenes/signoMas.png"
import signoMenos from "../Imagenes/signoMenos.png"
import axios from 'axios';
import './Menu.css';

const Menu = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('data.json')
            .then(res => res.data)
            .then(res => {
                setData(res.products)
            })
    }, [])


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
                />
                <select name='numMesa'className='num-mesa'>
                    <option disabled selected>MESA</option>
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
                        <img className="signoMas" src={signoMas} alt='' />
                        <p className="cantidadProd">1</p>
                        <img className="signoMenos" src={signoMenos} alt='' />  
                        <p className="precio">{items.price}</p>                      
                    </div>
                ))}
            </section>
            <h2 className="bebidas">BEBIDAS</h2>
            <section className="container-bebidas">
                {data.filter(product => product.category.includes("Bebidas")).map(items => (
                    <div className="bebidas-div" key={items.id}>
                        <p className="nombreProducto">{items.name}</p>
                        <img className="imgBebidas" src={items.img} alt='' />
                        <img className="signoMasDos" src={signoMas} alt='' />
                        <p className="cantidadProducto">1</p>
                        <img className="signoMenosDos" src={signoMenos} alt='' />
                        <p className="precioBebidas">{items.price}</p>
                    </div>
                ))}
            </section>
            </section>
            <footer>@2023 - Erika Ríos Suesca</footer>
        </>
    )
};

export default Menu;