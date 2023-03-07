const OrderItem = ({ product, handleClickDelete }) => {
	return (
		<div>
			<p>{product.name}</p>
			<p>{product.price}</p>
			<button onClick={() => handleClickDelete(product.id)}>Delete</button>
		</div>
	);
};

export { OrderItem };
