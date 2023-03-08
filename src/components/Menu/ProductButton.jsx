const ProductButton = ({ item, addItem, product }) => {
	return (
		<div className='flex flex-row place-content-between place-items-center w-2/5'>
			<button
				type='button'
				onClick={() => addItem(item)}
				className='px-8 bg-secoundary-two rounded-full w-full h-20'
			>
				<p className='place-items-center '>{product.name}</p>
			</button>
			<p className='content-end gap-3 font-bold'>{product.price}</p>
		</div>
	);
};

export { ProductButton };
