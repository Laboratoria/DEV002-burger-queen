import { useNavigate } from 'react-router-dom';
export function Inicio() {
	const toNavigate = useNavigate();
	return (
		<div className='flex items-center justify-center bg-red-800'>
			<button
				className='flex w-50 bg-red-100 hover:bg-red-900 text-red-800 font-bold py-2 px-4 rounded-full'
				onClick={() => toNavigate('/login')}
			>
				Empezar
			</button>
		</div>
	);
}
