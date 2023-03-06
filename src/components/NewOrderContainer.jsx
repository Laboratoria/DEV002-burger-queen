import products from '/src/products.json';

const NewOrderContainer = () => {
	return (
		<div>
			<p>Nuevo Pedido</p>
			<ul>
				{products.map((product) => (
					<li key={product.id} name={product.name} price={product.price}>
						{product.name} - {product.price}
					</li>
				))}
			</ul>
		</div>
	);
};

export { NewOrderContainer };
