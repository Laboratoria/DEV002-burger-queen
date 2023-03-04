const Option = (props) => {
	return (
		<button type='submit' className='option-container-bttn'>
			<p className='option-name-p'>{props.name}</p>
		</button>
	);
};

export { Option };
