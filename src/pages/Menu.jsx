import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header'
import data from '../data.json/';
import { MenuButtnProduct } from '../components/Menu/MenuButtnProduct';
import { NewOrderContainer } from '../components/Order/NewOrderContainer.jsx';
import { NavBarMobile } from '../components/NavBarMobile';

const Menu = () => {
	const [category, setCategory] = useState('picotería');
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [mapProducts] = useState(new Map());
	const [listProducts, setListProducts] = useState([]);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};

	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
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

	const selectCategory = (category) => {
		setCategory(category);
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
				<div className='lg:col-span-6'>
						{/* {<Header />} */}
					< Header selectCategory = {selectCategory}/>
					{/* {<tittle content />} */}
					<div className='flex items-center justify-center mb-10 mt-10'>
						<h2 className='text-2xl text-main font-bold'>Elige los platillos</h2>
					</div>
					<div className='grid grid-col-1 md:grid-col-5 lg:grid-col-3 items-center justify-center'>
						{/* {<button product />} */}
						<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
					</div>
				</div>
					{/* {<new order />} */}
				<div>
					<NewOrderContainer
						listProducts={listProducts}
						setListProducts={setListProducts}
						mapProductsDe={mapProducts}
						getListFromMap={getListFromMap}
						addItem={addItem}
						showOrder={showOrder}
						setShowOrder={setShowOrder}
					/>
				</div>
			</main>
		</div>
	);
};

export { Menu };
