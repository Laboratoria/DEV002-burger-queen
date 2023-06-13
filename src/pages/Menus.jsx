import { useState } from 'react';
import { NavBarWaiter } from '../components/NavBarWaiter';
import { NavBarMobile } from '../components/NavBarMobile';
import { Header } from '../components/Header';
import { MenuButtnProduct } from '../components/Menu/MenuButtnProduct';
import { NewOrderContainer } from '../components/Order/NewOrderContainer';
import { MenuBttnCategory } from '/src/components/Menu/MenuBttnCategory';
import data from '../data.json/';

const Menus = ({ userEmail, addOrder, listProducts, setListProducts }) => {
	const [category, setCategory] = useState('picotería');
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [mapProducts] = useState(new Map());
	const [client, setClient] = useState('');

	const categorys = Object.keys(data);

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
		console.log(mapProducts);
		// setProducts(mapProducts.filter((item) => item.id !== id));
		const amount = mapProducts.get(item);
		if (amount === 1) {
			mapProducts.delete(item);
		} else {
			mapProducts.set(item, parseInt(amount) - 1);
		}
		setListProducts(getListFromMap(mapProducts));
	};

	const totalOrder = listProducts.reduce(
		(total, item) => total + item.price * item.amount,
		0
	);

	const sendOrder = () => {
		if (mapProducts.size === 0) {
			alert('Por favor, seleciona algún producto a la nueva orden');
		} else if (client === '') {
			alert('Por favor, agrega el nombre del cliente');
		} else {
			setListProducts(getListFromMap(mapProducts));
			addOrder(client, listProducts, totalOrder);
			console.log({
				client,
				listProducts,
				totalOrder,
			});
			mapProducts.clear();
			setListProducts([]);
			setClient('');
		}
	};

	return (
		<div className='w-screen h-screen'>
			{/* {<sideBar />} */}
			<NavBarWaiter showMenu={showMenu} />
			{/* {<Mobile />} */}
			<NavBarMobile
				toggleMenu={toggleMenu}
				toggleOrders={toggleOrders}
				showMenu={showMenu}
			/>
			{/* {<Header />} */}
			<Header userEmail={userEmail} />
			<main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
				<div className='lg:col-span-5 flex flex-col gap-4'>
					{/* {<tittle and date />} */}
					<div className='flex justify-center items-center mt-10'>
						{/* {<tabs />} */}
						<MenuBttnCategory categorys={categorys} selectCategory={selectCategory} />
					</div>
					<div className='flex justify-center items-center mt-6'>
						{/* {<tittle content />} */}
						<h2 className='text-2xl text-main font-bold'>Elige los platillos</h2>
					</div>
					<div className='flex justify-center items-center mt-4'>
						{/* {<button product />} */}
						<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
					</div>
				</div>
				{/* {<new order />} */}
				<div className='lg:col-span-3 flex flex-col gap-4'>
					<div className='flex justify-center items-center text-center mr-28 mt-32'>
						{/* {<tittle content />} */}
						<h2 className='mr-16 text-2xl text-main font-bold'>Nuevo pedido</h2>
					</div>
					<div>
						<NewOrderContainer
							listProducts={listProducts}
							addItem={addItem}
							deleteItem={deleteItem}
							showOrder={showOrder}
							totalOrder={totalOrder}
							sendOrder={sendOrder}
							client={client}
							setClient={setClient}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export { Menus };
