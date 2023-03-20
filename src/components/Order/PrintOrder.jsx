const PrintOrder = ({ orders }) => {
	console.log(orders);
	return orders.map((order) => (
		<div key={order.id}>
			<h2>Cliente: {order.client}</h2>
			<p> Status: {order.status}</p>
			{/* <p> {order.createdAt.toDate()}</p> */}
			<ul>
				{order?.products.map((item) => (
					<li key={item.id}>
						{item.price}: {item.name}
					</li>
				))}
			</ul>
		</div>
	));
};

export { PrintOrder };
