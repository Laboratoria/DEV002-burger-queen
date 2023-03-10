import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import data from '../data.json/';
import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
//import { ClientForm } from '../components/Order/ClientForm';
import { MenuButtnProduct } from '../components/Menu/MenuButtnProduct';
import { list } from 'postcss';
//import { NewOrderContainer } from '../components/Order/NewOrderContainer.jsx';
//import { OrderItem } from '../components/Order/OrderItem';

const Menu = () => {
	const [category, setCategory] = useState('picotería');
	const [mapProducts] = useState(new Map());
	const [listProducts, setListProducts] = useState([]);
	const [client, setClient] = useState('');

	const categorys = Object.keys(data);

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
	}

	const addItem = (item) => {
		// setProducts([...mapProducts, item]);
		if (mapProducts.get(item)) {
			mapProducts.set(item, mapProducts.get(item) + 1);
		} else {
			mapProducts.set(item, 1);
		}
		
		// mapProducts.forEach(function (value, key) {
		// 	setProducts(mapProducts.push(key));
		// });
		setListProducts(getListFromMap(mapProducts));
	};;

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

	const totalOrder = () => {
		return listProducts.reduce(
			(total, item) => total + item.price * item.amount, 0
		);
	};

	const sendOrder = () => {
		console.log({
			client,
			mapProducts,
			total: totalOrder(),
		});
		setProducts([]);
	};

	return (
		<div>
			{<NavBar />}
			<div>
				<div className='flex flex-row items-center justify-center'>
					<MenuBttnCategory categorys={categorys} selectCategory={selectCategory} />
				</div>
				<div>
					{/* <h2>Menú: {category}</h2> */}
					<div>
						<div className='flex flex-row items-center justify-center w-full'>
							<div className='w-full h-full m-8'>
								<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
							</div>
							<div className='w-full h-full m-8'>
								<h2>Nuevo pedido</h2>
								<ul className='flex flex-col m-8 p-16 gap-8 w-full h-full bg-secoundary-one/50 rounded-lg'>
									{/* {Array.from(mapProducts.keys()).map((product) => (
										<li key={product.id}>
											<span>
												{product.name} - {product.price} - {mapProducts.get(product)}
											</span>

											<button onClick={() => deleteItem(product.id)}>Delete</button>
										</li>
									))} */}

									{listProducts.map((product) => (
										<li key={product.id}>
											<span>
												{product.name} - {product.price} - {product.amount}
											</span>

											<button onClick={() => deleteItem(product)}>Delete</button>
										</li>
									))}
								</ul>
								<p>Total: s/.{totalOrder()}</p>
								<input
									type='text'
									placeholder='nombre del cliente'
									value={client}
									onChange={(e) => setClient(e.target.value)}
								/>
								<button onClick={() => sendOrder()}>Hacer pedido</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Menu };
