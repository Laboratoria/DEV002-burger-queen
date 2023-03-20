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
