import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import data from '../data.json/';
import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
import { ClientForm } from '../components/Order/ClientForm';
import { MenuButtnProduct } from '../components/Menu/MenuButtnProduct';
import { OrderItem } from '../components/Order/OrderItem';

const Menu = () => {
	const [category, setCategory] = useState('picotería');
	const [products, setProducts] = useState([]);
	const [client, setClient] = useState('');

	const categorys = Object.keys(data);

	const selectCategory = (category) => {
		setCategory(category);
		setProducts([]);
	};
	const addItem = (item) => {
		setProducts([...products, item]);
	};

	const deleteItem = (id) => {
		setProducts(products.filter((item) => item.id !== id));
	};

	const totalOrder = () => {
		return products.reduce((total, item) => total + item.price, 0);
	};

	const sendOrder = () => {
		console.log({
			client,
			products,
			total: totalOrder(),
		});
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
			<div>
				<MenuBttnCategory categorys={categorys} selectCategory={selectCategory} />
				{category && (
					<div>
						<h2>{category}</h2>
						<div>
							<div>
								<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
							</div>

							<div>
								<h2>Nuevo pedido</h2>
								<ul>
									{products.map((product) => (
										<li key={product.id}>
											{product.name} - {product.price}
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
				)}
				;
			</div>
		</div>
	);
};

export { Menu };
