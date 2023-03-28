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
		<div className='bg-secoundary-two w-full min-h-screen'>
			{/* {<sideBar />} */}
			<NavBarWaiter showMenu={showMenu} />
			{/* {<Mobile />} */}
			<NavBarMobile
				toggleMenu={toggleMenu}
				toggleOrders={toggleOrders}
				showMenu={showMenu}
			/>
			<main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
				<div className='lg:col-span-5 flex flex-col items-center justify-center gap-8'>
					{/* {<Header />} */}
					<Header userEmail={userEmail} />
					{/* {<tittle and date />} */}
					<nav className='flex justify-start items-center mt-20 ml-10 mb-0'>
						{/* {<tabs />} */}
						<MenuBttnCategory categorys={categorys} selectCategory={selectCategory} />
					</nav>
					{/* {<tittle content />} */}
					<h2 className='text-2xl text-main font-bold'>Elige los platillos</h2>
					{/* {<button product />} */}
					<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
				</div>
				{/* {<new order />} */}
				<div className='lg:col-span-3'>
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

					{/* {showModal ? (
					<PopUpModal tittle = 'Verifica el pedido y luego envía a cocina' listProducts = {listProducts} setListProducts={setListProducts} showModal={showModal} setShowModal={setShowModal} mapProducts={mapProducts}/>
				) : null} */}
				</div>
			</main>
		</div>
	);
};

export { Menus };
