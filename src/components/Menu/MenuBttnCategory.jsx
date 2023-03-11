const MenuBttnCategory = ({ categorys, selectCategory }) => {
	return (
		<div className='flex items-center md:justify-start md:gap-8 mb-8'>
			{categorys.map((category) => (
				<button
					className='items-center w-40 pr-4 py-2 border-b border-secoundary-one hover:border-main text-main text-xl'
					key={category}
					onClick={() => selectCategory(category)}>
					{category}
				</button>
			))}
		</div>
	);
};

export { MenuBttnCategory };
