const MenuBttnCategory = ({ categorys, selectCategory }) => {
	return (
		<div className='flex flex-colum space-x-4 items-center justify-center font-sans '>
			{categorys.map((category) => (
				<button className='flex items-center justify-center w-40 bg-secoundary-one hover:bg-secoundary-two -text font-bold py-2 px-4 rounded-full'
				key={category} onClick={() => selectCategory(category)}>
					{category}
				</button>
			))}
		</div>
	);
};

export { MenuBttnCategory };
