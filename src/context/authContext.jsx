import { createContext, useContext } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config.jsx';

export const authContext = createContext();

export function useAuth() {
	const context = useContext(authContext);
	if (!context) throw new Error('There is not auth provider');
	return context;
}

export function AuthProvider({ children }) {
	const signIn = (email, password) => {
		const userCredentials = signInWithEmailAndPassword(auth, email, password);
		console.log(userCredentials);
	};
	return (
		//Lo que estamos ejecutando es:
		<authContext.Provider value={{ signIn }}>{children}</authContext.Provider>
	);
}
