const ProductsContainer = (props) => {
	return (
		<section className='products-section'>
			<div className='products-container'>{props.children}</div>
		</section>
	);
};

export { ProductsContainer };
