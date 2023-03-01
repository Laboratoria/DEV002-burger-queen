import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export function Inicio() {
	const toNavigate = useNavigate();
	return (
		<button
			className='bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black'
			onClick={() => toNavigate('/login')}
		>
			Empezar
		</button>
	);
}
