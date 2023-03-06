import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { MenuPicotería } from '../components/MenuPicotería';
import { MenuFondazos } from '../components/MenuFondazos';
import { MenuRefrescos } from '../components/MenuRefrescos';
import { NewOrderContainer } from '../components/NewOrderContainer';
import { OrderListContext } from '../context/OrderListContext';
import products from '../products.json/'


const Menu = () => {
	const [toShowMenuPicotería, settoShowMenuPicotería] = useState(true);
	const [toShowMenuFondazos, settoShowMenuFondazos] = useState(false);
	const [toShowMenuRefrescos, settoShowMenuRefrescos] = useState(false);
	const [order, setOrder] = useState(products.order);
	const [toShowNewOrderContainer, settoShowNewOrderContainer] = useState(true);

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
		settoShowNewOrderContainer([...toShowNewOrderContainer, item])
	}
	
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
				{<NewOrderContainer order={order} />}
			</div>
		</div>
	);
};

export { Menu };
