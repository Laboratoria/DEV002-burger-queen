const MenuButtnProduct = ({ products, handleClickAdd }) => {
	return (
		<div>
			{products.map((product) => (
				<div className='flex flex-row place-content-center items-center'>
					<button
						className='px-8 bg-secoundary-two rounded-full w-full h-20'
						key={product.id}
						onClick={() => handleClickAdd(product)}
					>
						<p className='place-items-center '>{product.name}</p>
					</button>
					<p className='content-end gap-3 font-bold'>{product.price}</p>
				</div>
			))}
		</div>
	);
};

export { MenuButtnProduct };
