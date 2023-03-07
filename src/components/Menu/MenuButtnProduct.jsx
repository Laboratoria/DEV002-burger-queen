const MenuButtnProduct = ({ products, handleClickAdd }) => {
	return (
		<div>
			{products.map((product) => (
				<button key={product.id} onClick={() => handleClickAdd(product)}>
					<p>{product.name}</p>
					<p>{product.price}</p>
				</button>
			))}
		</div>
	);
};

export { MenuButtnProduct };
