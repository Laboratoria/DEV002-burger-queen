const MenuButtnProduct = ({ products, handleClickAdd }) => {
	return (
		<ul
			role='listitem'
			className='flex flex-col m-8 p-16 gap-8 w-full h-full bg-secoundary-one/50 rounded-lg'>
			{products.map((product) => (
				<li>
					<button
						className=' bg-secoundary-two rounded-lg ring-2 ring-secoundary-two hover:ring-secoundary-one w-full h-full hover:scale-105 '
						key={product.id}
						onClick={() => handleClickAdd(product)}>
						<p>{product.name}</p>
						<p className='font-bold'>{product.price}</p>
					</button>
				</li>
			))}
		</ul>
	);
};

export { MenuButtnProduct };
