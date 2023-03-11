import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import data from '../data.json/';
import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
import { MenuButtnProduct } from '../components/Menu/MenuButtnProduct';
import { NewOrderContainer } from '../components/Order/NewOrderContainer.jsx';
import { NavBarMobile } from '../components/NavBarMobile';

const Menu = () => {
	const [category, setCategory] = useState('picotería');
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [mapProducts] = useState(new Map());
	const [listProducts, setListProducts] = useState([]);

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
				<div className='lg:col-span-5'>
					{/* {<header />} */}
					<header>
						{/* {<tittle and date />} */}
						<div className='flex flex-col md:flex-row md-justify-between md:items-center gap-4 mb-6'>
							<h1 className='text-2xl text-main'> La ñana restaurant</h1>
							<p> 10 marzo 2023</p>
						</div>
						<nav>
							{/* {<tabs />} */}
							<MenuBttnCategory
								categorys={categorys}
								selectCategory={selectCategory}
							/>
						</nav>
					</header>
					{/* {<tittle content />} */}
					<div className='flex items-center justify-center mb-10 mt-10'>
						<h2 className='text-2xl text-main font-bold'>Elige los platillos</h2>
					</div>
					<div className="grid grid-flow-row md:grid-row-2 lg:grid-row-3 items-center justify-center">
						{/* {<button product />} */}
						<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
					</div>
					{/* {<new order />} */}
				</div>
				<di>
					<NewOrderContainer
						listProducts={listProducts}
						setListProducts={setListProducts}
						mapProductsDe={mapProducts}
						getListFromMap={getListFromMap}
						addItem={addItem}
					/>
				</di>
			</main>
		</div>
	);
};

export { Menu };
