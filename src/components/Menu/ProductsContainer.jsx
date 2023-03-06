const ProductsContainer = (props) => {
	return (
		<section>
			<div className='flex flex-col space-y-4 space-x-4 items-center justify-center w-1/2'>
				{props.children}
			</div>
		</section>
	);
};

export { ProductsContainer };
