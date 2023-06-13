const MenuButtnProduct = ({ products, handleClickAdd }) => {
	return (
		<ul role='listitem'>
			{products.map((product) => (
				<li
					key={product.id}
					className='flex flex-col items-center justify-center w-96 bg-secoundary-one border border-secoundary-two hover:border-main hover:bg-secoundary-two text-main-text rounded-3xl p-8 mb-4 text-center text-2xl cursor-pointer'>
					<button onClick={() => handleClickAdd(product)}>
						<p>{product.name}</p>
						<p>s/.{product.price}</p>
					</button>
				</li>
			))}
		</ul>
	);
};

export { MenuButtnProduct };
