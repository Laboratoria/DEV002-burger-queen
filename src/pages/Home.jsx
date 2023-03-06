//import { UserAuth } from '../context/AuthContext';
// import { logOut } from '/src/firebase/auth.jsx';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

const Home = (props) => {
	const user = props.user;
	//const logOut = props.logOut;
	console.log('Home user: ' + user.email);
	const toNavigate = useNavigate();
	// const handleLogOut = async () => {
	// 	try {
	// 		await logOut();
	// 		toNavigate('/');
	// 	} catch (error) {
	// 		console.error(error.message);
	// 	}
	// };
	return (
		<div>
			<NavBar />
			<div className='flex flex-colum items-center justify-center'>
				<button
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