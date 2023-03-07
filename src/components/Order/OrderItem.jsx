const OrderItem = ({ item, handleClickDelete }) => {
	return (
		<div>
			<p>{item.name}</p>
			<p>{item.price}</p>
			<button onClick={() => handleClickDelete(item.id)}>Delete</button>
		</div>
	);
};

export { OrderItem };
