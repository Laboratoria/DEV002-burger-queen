//definir multiples rutas
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Inicio } from './pages/Inicio.jsx';
import { Login } from './pages/Login.jsx';
import { useState } from 'react';
//import { getAdditionalUserInfo } from 'firebase/auth';

function App() {
	const [user, setUser] = useState(null);
  const logOut = () =>
    setUser(null);
  
	console.log(user);
	if (user === null) {
    return (
		<Routes>
			{/* <Route path='/' element={<Inicio />} /> */}
			<Route path='*' element={<Login setUser={setUser} />} />
		</Routes>
    );
	}
  console.log("Estoy logueada");

	return (
		<Routes>
			<Route path='/home' element={<Home user = {user} logOut = {logOut}/>} />
		</Routes>
	);
}

 export default App;
