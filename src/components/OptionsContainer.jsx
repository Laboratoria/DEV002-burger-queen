const OptionsContainer = (props) => {
	return (
		<section className='options-section'>
			<div className='options-container'>{props.children}</div>
		</section>
	);
};

export { OptionsContainer };
