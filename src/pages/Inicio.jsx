import { useNavigate } from 'react-router-dom';
const Inicio = () => {
	const toNavigate = useNavigate();
	return (
		<div className='flex flex-col items-center justify-center bg-main w-full min-h-screen'>
			<figure className='w-3/5'>
				<img src='src/assets/Logo-La-Ñaña.png' alt='Logo La Ñaña'   />
			</figure>
			<button
				onClick={() => toNavigate('/login')}
				className='flex items-center justify-center bg-secoundary-one rounded-full px-20 py-2 mt-20 text-2xl text-main'>
				Empezar
			</button>
		</div>
	);
};
export { Inicio };
