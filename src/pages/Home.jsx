//import { UserAuth } from '../context/AuthContext';
import { logOut } from '/src/firebase/auth.jsx';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
	const user = props.user;
	//const logOut = props.logOut;
	console.log('Home user: ' + user.email);
	const toNavigate = useNavigate();
	const handleLogOut = async () => {
		try {
			await logOut();
			toNavigate('/');
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div>
			<nav className='px-2 sm:px-4 py-2.5 rounded bg-red-800'>
				<div className='container flex flex-wrap items-center justify-between mx-auto'>
					<img
						src='src/assets/Logotipo-ñaña.png'
						className=' h-200  m-0 sm:h-20 flex items-left'
						alt='Ñaña Logo'
					/>
					<div>
						<button
							type='button'
							onClick={handleLogOut}
							className='text-gray-900  hover:text-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:text-gray-700 mr-2 mb-2'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='w-6 h-6 flex items-right'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-6 h-6 flex items-right'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
					</div>
				</div>
			</nav>
			<div className='flex flex-colum items-center justify-center'>
				<button
					onClick={() => signIn(email, password)}
					className='flex items-center justify-center w-40 bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full'
				>
					Ver Pedidos
				</button>
				<button
					onClick={() => toNavigate('/menu')}
					className='flex items-center justify-center w-40 bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full'
				>
					Nuevo Pedido
				</button>
			</div>
		</div>
	);
};
export { Home };