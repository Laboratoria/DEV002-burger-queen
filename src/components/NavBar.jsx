import { Link } from 'react-router-dom';
import { logOut } from '/src/firebase/auth.jsx';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
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
		<div className='flex flex-row items-center bg-[#8F0505]'>
			<div>
				<Link to='/home'>
					<img
						className='justify-start w-1/6'
						src='src/assets/Logotipo-ñaña.png'
						alt='imagen del logo de ñaña'
					></img>
				</Link>
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
			</div>
		</div>
	);
};

export { NavBar };
