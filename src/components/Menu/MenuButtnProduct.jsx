const MenuButtnProduct = ({ products, handleClickAdd }) => {
	return (
		<div className='flex flex-col space-y-4 space-x-4 items-center justify-center w-full'>
			{products.map((product) => (
				<button className='px-8 font-sans  text-mytext bg-secoundary-two rounded-full w-full h-20' key={product.id} onClick={() => handleClickAdd(product)}>
					<p className='place-items-center '>{product.name}</p>
					<p className='content-end gap-3 font-bold'>{product.price}</p>
				</button>
			))}
		</div>
	);
};

export { MenuButtnProduct };
