const PrintOrder = ({ orders }) => {
	console.log(orders);
	return orders.map((order) => (
		<div
			key={order.id}
			className='bg-white border border-main rounded-md shadow-md p-4'>
			<div className='bg-secoundary-one/50'>
				<h2>Cliente: {order.client}</h2>
				<p> Status: {order.status}</p>
				{/* <p> {order.createdAt.toDate()}</p> */}
			</div>
			<ul>
				<h3> Cantidad | Producto </h3>
				{order?.products.map((item) => (
					<li key={item.id}>
						{item.amount} - {item.name}
					</li>
				))}
			</ul>
		</div>
	));
};

export { PrintOrder };
