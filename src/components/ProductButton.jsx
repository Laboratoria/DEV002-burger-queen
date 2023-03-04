const ProductButton = (props) => {
	return (
		<button type='button' className='product-container-bttn'>
			<p className='product-name-p'>{props.name}</p>
			<p className='product-price-p'>{props.price}</p>
		</button>
	);
};

export { ProductButton };
