const MenuBttnCategory = ({ categorys, selectCategory }) => {
	return (
		<div>
			{categorys.map((category) => (
				<button key={category} onClick={() => selectCategory(category)}>
					{category}
				</button>
			))}
		</div>
	);
};

export { MenuBttnCategory };
