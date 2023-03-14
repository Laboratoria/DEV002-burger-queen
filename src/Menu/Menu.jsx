import React from "react";
import Logo from "../Imagenes/logoLasaña.png";
import './Menu.css';

const Menu = () => {
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

            <footer>@2023 - Erika Ríos Suesca</footer>
        </>
    )
};

export default Menu;