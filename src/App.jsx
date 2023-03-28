//definir multiples rutas
import { Routes, Route } from 'react-router-dom';
import { Inicio } from '/src/pages/Inicio';
import { Login } from '/src/pages/Login';
import { Menus } from '/src/pages/Menus';
import { Orders } from '/src/pages/Orders.jsx';
import { ReadyOrders } from '/src/components/Order/ReadyOrders.jsx';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '/src/firebase/firebase-init.js';
import { addOrder, onGetOrders } from './firestore/firestore-funct';
import { OrdersWaiter } from './pages/OrdersWaiter';

const App = () => {
	const [user, setUser] = useState(null);
	const [userEmail, setUserEmail] = useState('');
	const [listProducts, setListProducts] = useState([]);
	const [orders, setOrders] = useState([]);

	console.log('User: ' + userEmail);
	//Ejecuta algo ni bien carga el componente
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log('currentUser: ' + user);
			if (user) {
				setUser(true);
				setUserEmail(user.email);
				localStorage.setItem('employee', user.email);
			} else {
				setUser(null);
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		const unsubscribe = onGetOrders((query) => {
			const newOrders = query.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setOrders(newOrders);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Routes>
			{userEmail === 'patricio_mozo@restaurant.pe' && (
				<>
					<Route
						path='/menus'
						element={
							<Menus
								userEmail={userEmail}
								addOrder={addOrder}
								listProducts={listProducts}
								setListProducts={setListProducts}
							/>
						}
					/>
					<Route
						path='/waiterorders'
						element={
							<OrdersWaiter
								userEmail={userEmail}
								orders={orders}
								listProducts={listProducts}
							/>
						}
					/>
				</>
			)}
			{userEmail === 'fernando_cheff@restaurant.pe' && (
				<>
					<Route
						path='/orders'
						element={
							<Orders
								userEmail={userEmail}
								orders={orders}
								setOrders={setOrders}
								listProducts={listProducts}
							/>
						}
					/>
				</>
			)}
			{!user && (
				<>
					<Route path='/' element={<Inicio />} />
					<Route path='/login' element={<Login setUser={setUser} />} />
				</>
			)}
			<>
				<Route path='/*' element={<Inicio />} />
				<Route path='/login' element={<Login setUser={setUser} />} />
			</>
		</Routes>
	);

};

export { App }
