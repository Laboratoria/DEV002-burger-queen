import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

//Componente
export function Login() {
    //Inicializar inputs en blanco
    //user es un objeto
    console.log("Hola");
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { signIn } = useAuth();
	const toNavigate = useNavigate();
	const [error, setError] = useState();

    //
	const handleChange = ({ target: { name, value } }) => {
		//copiar todos los datos que tenga el usuario hasta ese momento y luego mostrar
        setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setError('');
		try {
			await signIn(user.email, user.password);
			toNavigate('/home');
		} catch (error) {
			setError(error.message);
		}
	};

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

			<button>Iniciar Sesión</button>
		</form>
	);
}
