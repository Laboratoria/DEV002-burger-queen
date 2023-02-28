import { createContext, useContext, useState, useEffect } from 'react';
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/init.jsx';

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	// const [loading, setLoading] = useState(true);

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => signOut(auth);

	//Ejecuta algo ni bien carga el componente
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
			// setLoading(false);;
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		//Lo que estamos ejecutando es:
		<UserContext.Provider value={{ signIn, user, logOut }}>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return UserContext(UserContext);
};
