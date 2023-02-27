import { useState } from 'react';

function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
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

export default Login;
