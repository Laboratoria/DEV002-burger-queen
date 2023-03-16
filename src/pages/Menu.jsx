import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { NavBarMobile } from '../components/NavBarMobile';
import { Header } from '../components/Header';
import { MenuButtnProduct } from '../components/Menu/MenuButtnProduct';
import { NewOrderContainer } from '../components/Order/NewOrderContainer';
import data from '../data.json/';

const Menu = ({userEmail, addOrder}) => {
	const [category, setCategory] = useState('picotería');
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [listProducts, setListProducts] = useState([]);
	const [mapProducts] = useState(new Map());

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};

	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};

	const selectCategory = (category) => {
		setCategory(category);
	};

	const getListFromMap = (mapItems) => {
		const auxList = [];
		mapItems.forEach((value, key) => {
			key.amount = value;
			auxList.push(key);
		});

		return auxList;
	};

	const addItem = (item) => {
		// setProducts([...mapProducts, item]);
		if (mapProducts.get(item)) {
			mapProducts.set(item, mapProducts.get(item) + 1);
		} else {
			mapProducts.set(item, 1);
		}
		setListProducts(getListFromMap(mapProducts));
	};

	const deleteItem = (item) => {
		console.log(item);
		console.log(mapProductsDe);
		// setProducts(mapProductsDe.filter((item) => item.id !== id));
		const amount = mapProductsDe.get(item);
		if (amount === 1) {
			mapProductsDe.delete(item);
		} else {
			mapProductsDe.set(item, parseInt(amount) - 1);
		}
		setListProducts(getListFromMap(mapProductsDe));
	};

	const totalOrder = listProducts.reduce(
		(total, item) => total + item.price * item.amount,
		0
	);
	
const sendOrder = () => {
	if(mapProductsDe.size === 0) {
		alert("Por favor, seleciona algún producto a la nueva orden")
	} else if (client === '') {
		alert("Por favor, agrega el nombre del cliente")
	} else {
		addOrder(client, mapProductsDe, totalOrder)
		setListProducts([]);
		setClient(null)
	}
	console.log({
		client,
		mapProductsDe,
		totalOrder,
	});
};
	
	return (
		<div className='bg-secoundary-two w-full min-h-screen'>
			{/* {<sideBar />} */}
			<NavBar showMenu={showMenu} />
			{/* {<Mobile />} */}
			<NavBarMobile
				toggleMenu={toggleMenu}
				toggleOrders={toggleOrders}
				showMenu={showMenu}
			/>
			<main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
				<div className='lg:col-span-5 flex flex-col items-center justify-center gap-8'>
					{/* {<Header />} */}
					<Header userEmail={userEmail} selectCategory={selectCategory} />
					{/* {<tittle content />} */}
					<h2 className='text-2xl text-main font-bold'>Elige los platillos</h2>
					{/* {<button product />} */}
					<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
				</div>
				{/* {<new order />} */}
				<div className='lg:col-span-3'>
					<NewOrderContainer
						listProducts={listProducts}
						setListProducts={setListProducts}
						mapProductsDe={mapProducts}
						getListFromMap={getListFromMap}
						addItem={addItem}
						deleteItem={deleteItem}
						showOrder={showOrder}
						setShowOrder={setShowOrder}
					/>
				</div>
			</main>
		</div>
	);
};

export { Menu };
