import { useState } from 'react';
//import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signIn } from '/src/firebase/auth.jsx';
import { Errors } from '/src/pages/Errors.jsx';

//Componente
export const Login = (props) => {
	//crear constantes de lo que se va a utilizar
	const setUser = props.setUser;
	console.log('setUser Login: ' + setUser);
	//Inicializar inputs en blanco
	//user es un objeto
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	//const { signIn } = UserAuth();
	const toNavigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signIn(email, password);
			setUser(true);
			toNavigate('/home');
		} catch (error) {
			setError(error.message);
			console.log('setError: ' + error.message);
			
		}
	};

	//
	// const handleChange = ({ target: { name, value } }) =>
	// 	//copiar todos los datos que tenga el usuario hasta ese momento y luego mostrar
	// 	setUser({ ...user, [name]: value });

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-1'>
			
			<img
				className='h-96 w-96'
				src='src/assets/Logo-ñaña.png'
				alt='imagen del logo de ñaña'
			></img>
			
			<form onSubmit={handleSubmit} className='w-full max-w-sm'>
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Correo
					</label>
					<input
						type='email'
						name='email'
						placeholder='nombre_tipo@ñañarestaurant.pe'
						onChange={(e) => setEmail(e.target.value)}
						className='bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:shadow-outline flex items-center border-b border-red-800'
					/>
				</div>
				
				<div className='mb-6'>
					<label
						htmlFor='password'
						className='block text-gray-700 text-sm font-bold mb-2'
					>
						Contraseña
					</label>
					<input
						type='password'
						name='password'
						id='idPassword'
						placeholder='**************'
						onChange={(e) => setPassword(e.target.value)}
						className='flex items-center appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-b border-red-800'
					/>
				</div>
				{error && <Errors message={error} />}
				<button
					type='submit'
					// onClick={() => signIn(email, password)}
					className='flex items-center justify-center w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full'
				>
					Iniciar Sesión
				</button>
			</form>
		</div>
	);
};
