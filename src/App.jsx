//definir multiples rutas
import { Routes, Route } from 'react-router-dom';
import { Home } from '/src/pages/Home';
import { Inicio } from '/src/pages/Inicio';
import { Login } from '/src/pages/Login';
import { Menu } from '/src/pages/Menu';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/src/firebase/init.jsx';

const App = () => {
	const [user, setUser] = useState(null);
	console.log('User: ' + user);
	//Ejecuta algo ni bien carga el componente
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('currentUser: ' + { currentUser });
			setUser(currentUser);
			// setLoading(false);;
		});
		return () => {
			unsubscribe();
		};
	}, []);

	//const logOut = () => setUser(null);

	console.log('User: ' + user);
	if (user === null) {
		return (
			<Routes>
				<Route path='/' element={<Inicio />} />
				<Route path='/login' element={<Login setUser={setUser} />} />
			</Routes>
		);
	}
	console.log('Estoy logueada');

	return (
		<Routes>
			<Route path='/home' element={<Home user={user} />} />
			<Route path='/menu' element={<Menu user={user} />} />
		</Routes>
	);
};

export { App };
