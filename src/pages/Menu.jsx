import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import products from '../products.json/'
import { MenuPicotería } from '../components/Menu/MenuPicotería';
import { MenuFondazos } from '../components/Menu/MenuFondazos';
import { MenuRefrescos } from '../components/Menu/MenuRefrescos';
import { NewOrderContainer } from '../components/Order/NewOrderContainer';
import { ClientForm } from '../components/Order/ClientForm';



const Menu = () => {
	const [toShowMenuPicotería, settoShowMenuPicotería] = useState(true);
	const [toShowMenuFondazos, settoShowMenuFondazos] = useState(false);
	const [toShowMenuRefrescos, settoShowMenuRefrescos] = useState(false);
	const [client, setClient] = useState('');
	const [items, setItems] = useState([]);
	const toShowMenu = (menu) => {
		if (menu === 'Picotería') {
			settoShowMenuPicotería(true);
			settoShowMenuFondazos(false);
			settoShowMenuRefrescos(false);
		} else if (menu === 'Fondazos') {
			settoShowMenuPicotería(false);
			settoShowMenuFondazos(true);
			settoShowMenuRefrescos(false);
		} else if (menu === 'Refrescos') {
			settoShowMenuPicotería(false);
			settoShowMenuFondazos(false);
			settoShowMenuRefrescos(true);
		}
	};

	const addItem = (item) => {
		setItems([...items, item]);
	};

	const deleteItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const totalOrder = () => {
		return items.reduce((total, item) => total + item.price, 0);
	};

	const sendOrder = () => {
		//Nada
	};
	const handleClickAdd = (item) => {
		addItem(item);
	};

	const handleChangeClient = (event) => {
		setClient(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		sendOrder();
	};
	return (
		<div>
			{<NavBar />}
			<div className='flex flex-colum space-x-4 items-center justify-center font-sans '>
				<button
					onClick={() => toShowMenu('Picotería')}
					type='submit'
					className='flex items-center justify-center w-40 bg-secoundary-one hover:bg-secoundary-two -text font-bold py-2 px-4 rounded-full'
				>
					Picotería
				</button>
				<button
					onClick={() => toShowMenu('Fondazos')}
					type='submit'
					className='flex items-center justify-center w-40 bg-secoundary-one hover:bg-secoundary-two text-white font-bold py-2 px-4 rounded-full'
				>
					Fondazos
				</button>
				<button
					onClick={() => toShowMenu('Refrescos')}
					type='submit'
					className='flex items-center justify-center w-40 bg-secoundary-one hover:bg-secoundary-two text-white font-bold py-2 px-4 rounded-full'
				>
					Refrescos
				</button>
			</div>
			<div>
				{toShowMenuPicotería && <MenuPicotería />}
				{toShowMenuFondazos && <MenuFondazos />}
				{toShowMenuRefrescos && <MenuRefrescos />}
			</div>
			<div>
				<h2>Nuevo pedido</h2>
				<ClientForm
					client={client}
					handleChangeClient={handleChangeClient}
					handleSubmit={handleSubmit}
				/>
				<div>
					<NewOrderContainer items={items} addItem={addItem} />
				</div>
			</div>
		</div>
	);
};

export { Menu };
