import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '/src/firebase/auth.js';
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
			toNavigate('/menu');
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
		<main className='flex flex-col items-center justify-center h-screen bg-main'>
			<form onSubmit={handleSubmit} className='flex items-center justify-center'>
				<div className='w-1/2 p-8 rounded-3xl shadow-3xl bg-secoundary-two'>
					<figure className='flex items-center justify-center mb-4'>
						<img
							className='w-2/3'
							src='src/assets/Logo-La-Ñaña.png'
							alt='Imagen del logo de ñaña'></img>
					</figure>

					<label htmlFor='email' className='text-gray-700'>
						Correo
					</label>
					<input
						type='email'
						name='email'
						placeholder=' '
						required
						onChange={(e) => setEmail(e.target.value)}
						className='w-full py-2 bg-secoundary-one/0 border-b border-main text-main-text px-1 outline-none mb-4'
					/>
					<div className='mb-6'>
						<label htmlFor='password' className='text-gray-700'>
							Contraseña
						</label>
						<input
							type='password'
							name='password'
							id='idPassword'
							placeholder=' '
							onChange={(e) => setPassword(e.target.value)}
							className='w-full py-2 bg-secoundary-one/0 border-b border-main text-main-text px-1 outline-none mb-4'
						/>
					</div>
					{error && <Errors message={error} />}
					<div className='flex items-center justify-center'>
						<button
							type='submit'
							// onClick={() => signIn(email, password)}
							className=' w-2/3 bg-main text-secoundary-one text-2xl py-2 px-4 rounded-full mt-16'>
							Iniciar Sesión
						</button>
					</div>
				</div>
			</form>
		</main>
	);
};
