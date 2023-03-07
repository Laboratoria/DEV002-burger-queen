import products from '/src/products.json';
import { OrderItem } from './OrderItem';

const NewOrderContainer = ({ items }) => {
	const totalOrder = () => {
		return items.reduce((total, item) => total + item.price, 0);
	};

	return (
		<div>
			<h2>Nuevo Pedido</h2>
			{items.length > 0 ? (
				<div>
					{items.map((item) => (
						<OrderItem key={item.id} item={item} />
					))}
					<p>Total: s/.{totalOrder()}</p>
				</div>
			) : (
				<p>No hay productos en el pedido</p>
			)}
		</div>
	);
};

export { NewOrderContainer };
