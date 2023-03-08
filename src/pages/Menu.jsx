import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import data from '../data.json/';
import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
//import { ClientForm } from '../components/Order/ClientForm';
import { MenuButtnProduct } from '../components/Menu/MenuButtnProduct';
//import { NewOrderContainer } from '../components/Order/NewOrderContainer.jsx';
//import { OrderItem } from '../components/Order/OrderItem';

const Menu = () => {
	const [category, setCategory] = useState('picotería');
	const [products, setProducts] = useState([]);
	const [client, setClient] = useState('');

	const categorys = Object.keys(data);

	const selectCategory = (category) => {
		setCategory(category);
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
		setProducts([]);
	};

	return (
		<div>
			{<NavBar />}
			<div>
				<div className='flex flex-row items-center justify-center w-full'>
					<MenuBttnCategory categorys={categorys} selectCategory={selectCategory} />
				</div>
				<div>
					{/* <h2>Menú: {category}</h2> */}
					<div>
						<div className='flex flex-row space-y-8 space-x-16 items-center justify-center w-full'>
							<div className='items-center justify-center w-1/2 m-8'>
								<MenuButtnProduct products={data[category]} handleClickAdd={addItem} />
							</div>
							<div className= 'flex flex-col items-center justify-center space-y-8 space-x-16  w-1/2 m-8 border-2 border-rose-500'>
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
				</div>
				;
			</div>
		</div>
	);
};

export { Menu };
