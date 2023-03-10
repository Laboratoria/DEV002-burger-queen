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
	const [products, setProducts] = useState(new Map());
	const [listProducts, setListProducts] = useState([]);
	const [client, setClient] = useState('');
	const mapProducts = new Map();

	const categorys = Object.keys(data);

	const selectCategory = (category) => {
		setCategory(category);
	};
	
	const addItem = (item) => {
		// setProducts([...products, item]);
		if (products.get(item)) {
			products.set(item, products.get(item) + 1);
		} else {
			products.set(item, 1);
		}
		const auxList = []
		products.forEach((value, key) => {
			key.amount = value
			auxList.push(key)
		})
		// mapProducts.forEach(function (value, key) {
		// 	setProducts(products.push(key));
		// });
		setListProducts(auxList);
		console.log(auxList);
	};

	const deleteItem = (item) => {
		// setProducts(products.filter((item) => item.id !== id));
		const amount = products.get(item);
		if (amount === 1) {
			products.delete(item);
		} else {
			products.set(item, products.get(item) - 1);
		}
		setProducts(products);
	};

	const totalOrder = () => {
		return Array.from(products.keys()).reduce(
			(total, item) => parseInt(total) + parseInt(item.price),
			0
		);
	};

	const sendOrder = () => {
		console.log({
			client,
			products,
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
									{/* {Array.from(products.keys()).map((product) => (
										<li key={product.id}>
											<span>
												{product.name} - {product.price} - {products.get(product)}
											</span>

											<button onClick={() => deleteItem(product.id)}>Delete</button>
										</li>
									))} */}
									
										{listProducts.map((product) => (
										<li key={product.id}>
											<span>
												{product.name} - {product.price} - {product.amount}
											</span>

											<button onClick={() => deleteItem(product.id)}>Delete</button>
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
