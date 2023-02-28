import { useState } from 'react';
//import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

//Componente
export const Login = (props) => {
console.log(props);
//crear constantes de lo que se va a utilizar
	const setUser = props.setUser
	//Inicializar inputs en blanco
	//user es un objeto
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('');
	//const { signIn } = UserAuth();
	const toNavigate = useNavigate();
	

	const handleSubmit =  (e) => {
		e.preventDefault();
		setUser(true);
		setError('');
		try {
			//await signIn(email, password);
			toNavigate('/home');
		} catch (error) {
			setError(error.message);
			console.log();(error.message);
		}
	};

	//
	const handleChange = ({ target: { name, value } }) =>
		//copiar todos los datos que tenga el usuario hasta ese momento y luego mostrar
		setUser({ ...user, [name]: value });

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='email'>Correo</label>
			<input
				type='email'
				name='email'
				placeholder='nombre_tipo@ñañarestaurant.pe'
				onChange={handleChange}
			/>

			<label htmlFor='password'>Contraseña</label>
			<input
				type='password'
				name='password'
				id='idPassword'
				placeholder='**************'
				onChange={handleChange}
			/>

			<button type='submit'>Iniciar Sesión</button>
		</form>
	);
};
