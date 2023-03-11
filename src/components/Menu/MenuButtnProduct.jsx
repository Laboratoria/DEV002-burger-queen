const MenuButtnProduct = ({ products, handleClickAdd }) => {
	return (
		<ul
			role='listitem'>
			{products.map((product) => (
				<li className='flex flex-col items-center bg-secoundary-one border-2 border-secoundary-two hover:border-main text-main-text rounded-full p-8 mb-4 text-center text-xl cursor-pointer'>
					<button
						key={product.id}
						onClick={() => handleClickAdd(product)}>
						<p>{product.name}</p>
						<p>s/.{product.price}</p>
					</button>
				</li>
			))}
		</ul>
	);
};

// className=' bg-secoundary-two rounded-lg ring-2 ring-secoundary-two hover:ring-secoundary-one w-full h-full hover:scale-105 '
export { MenuButtnProduct };
