const ClientOrder = ({ orders, listProducts }) => {
	return orders.map((order) => (
		<div>
			<h2>Cliente: {order.client}</h2>
			<ul>
				{listProducts.map((item) => {
					<li key={item.id}>
						{' '}
						{item.amout}: {item.name}
					</li>;
				})}
			</ul>
		</div>
	));
};

export { ClientOrder };
