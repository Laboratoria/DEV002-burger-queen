const Header = () => {
	return (
		<div className='flex flex-row place-items-center place-content-center justify-between'>
			<img
				className='justify-start w-1/6'
				src='src/assets/Logotipo-ñaña.png'
				alt='imagen del logo de ñaña'
			></img>
			<p className='content-center'>Name</p>
		</div>
	);
};

export { Header };
