const MenuBttnCategory = ({ categorys, selectCategory }) => {
	return (
		<div>
			{categorys.map((category) => (
				<button
					className='items-center justify-center w-40 m-2 bg-secoundary-one hover:bg-secoundary-two py-2 px-4 rounded-full'
					key={category}
					onClick={() => selectCategory(category)}
				>
					{category}
				</button>
			))}
		</div>
	);
};

export { MenuBttnCategory };
